import { AppStore } from './app.store';
import { baseHydrate, IS_STORE_TYPE, IStore } from './common/store';

let store: AppStore | null = null;

function deepHydrate<T, S>(
  target: T | (T & IStore<T>),
  source: S,
  global: AppStore
) {
  Object.entries(target)
    .filter(([_, store]) => store?.constructor[IS_STORE_TYPE])
    .forEach(([key, store]: [string, T | (T & IStore<T>)]) => {
      const _source = (source as any)[key];

      if ((store as T & IStore<T>).hydrate) {
        (store as T & IStore<T>).hydrate(_source, global);
      } else {
        baseHydrate<typeof _source, typeof store>(_source, store);
      }

      (store as T & IStore<T>).global = global;

      deepHydrate<typeof store, typeof _source>(store, _source, global);
    });
}

const initializeStore = (hydrationData: AppStore = null) => {
  const _store = store ?? new AppStore();

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
  if (hydrationData) {
    deepHydrate(_store, hydrationData, _store);
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;

  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export { initializeStore };
