import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';

export interface AuthState {
  user: { id: string; name: string; email: string } | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
};

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    login(name: string, email: string) {
      patchState(store, { isLoading: true });
      // Simulating API call
      setTimeout(() => {
        patchState(store, {
          user: { id: '1', name, email },
          isAuthenticated: true,
          isLoading: false
        });
      }, 1000);
    },
    logout() {
      patchState(store, {
        user: null,
        isAuthenticated: false,
      });
    }
  }))
);
