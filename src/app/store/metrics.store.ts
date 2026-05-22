import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';

export interface MetricData {
  timestamp: string;
  value: number;
}

export interface MetricsState {
  data: MetricData[];
  isLoading: boolean;
  error: string | null;
}

const initialState: MetricsState = {
  data: [],
  isLoading: false,
  error: null,
};

export const MetricsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => {
    let worker: Worker | undefined;

    return {
      loadData() {
        patchState(store, { isLoading: true, error: null });

        if (typeof Worker !== 'undefined') {
          if (!worker) {
             worker = new Worker(new URL('../shared/data-parser.worker', import.meta.url), { type: 'module' });
          }
          
          worker.onmessage = ({ data }) => {
            patchState(store, { data, isLoading: false });
          };
          
          worker.onerror = (error) => {
            patchState(store, { error: error.message, isLoading: false });
          };

          // Trigger worker to start generation/parsing
          worker.postMessage({ action: 'generate' });
        } else {
          // Web Workers are not supported, fallback
          patchState(store, { error: 'Web Workers are not supported in this environment.', isLoading: false });
        }
      }
    };
  })
);
