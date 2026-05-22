import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';

export interface SettingsState {
  language: 'en' | 'pt';
  theme: 'dark' | 'light';
  isSettingsModalOpen: boolean;
  isInfoModalOpen: boolean;
}

const initialState: SettingsState = {
  language: 'pt',
  theme: 'dark',
  isSettingsModalOpen: false,
  isInfoModalOpen: false,
};

export const SettingsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    setLanguage(lang: 'en' | 'pt') {
      patchState(store, { language: lang });
    },
    setTheme(theme: 'dark' | 'light') {
      patchState(store, { theme });
      const body = document.body;
      if (theme === 'dark') {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
      } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
      }
    },
    toggleSettingsModal() {
      patchState(store, { isSettingsModalOpen: !store.isSettingsModalOpen() });
    },
    toggleInfoModal() {
      patchState(store, { isInfoModalOpen: !store.isInfoModalOpen() });
    }
  }))
);
