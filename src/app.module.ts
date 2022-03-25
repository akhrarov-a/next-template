import { AppStore } from './app.store';
import { baseHydrate, IS_STORE_TYPE, IStore } from './common/store';

/**
 * App Module
 */
class AppModule {
  private static _instance: AppStore;

  private static deepHydrate<T, S>(
    target: T | (T & IStore<T>),
    source: S,
    global: AppStore
  ) {
    Object.entries(target)
      .filter(([_, store]) => store.constructor[IS_STORE_TYPE])
      .forEach(([key, store]: [string, T | (T & IStore<T>)]) => {
        const _source = (source as any)[key];

        if ((store as T & IStore<T>).hydrate) {
          (store as T & IStore<T>).hydrate(_source, global);
        } else {
          baseHydrate<typeof _source, typeof store>(_source, store);
        }

        (store as T & IStore<T>).global = global;

        this.deepHydrate<typeof store, typeof _source>(store, _source, global);
      });
  }

  public static getStore(initialStore: AppStore) {
    if (this._instance) return this._instance;

    this._instance = new AppStore();

    if (typeof window != 'undefined') {
      this.deepHydrate<AppStore, AppStore>(
        this._instance,
        initialStore,
        this._instance
      );
    }

    return this._instance;
  }
}

export { AppModule };
