import { AppStore } from './app.store';
import { baseHydrate, IStore, IS_STORE_TYPE } from './common/store';

class AppModule {
  private static _instance: AppStore;

  // @ts-ignore
  private static deepHydrate(target, source, global) {
    Object.entries(target)
      // @ts-ignore
      .filter(item => item[1].constructor[IS_STORE_TYPE])
      // @ts-ignore
      .forEach(([key, store]: [string, IStore<any>]) => {
        if (store.__hydrate) {
          store.__hydrate((source as any)[key], global);
        } else {
          baseHydrate((source as any)[key], store);
        }

        store.__global = global;

        this.deepHydrate(store, (source as any)[key], global);
      });
  }

  public static getStore(initialStore: AppStore) {
    if (this._instance) return this._instance;

    this._instance = new AppStore();

    if (typeof window != 'undefined') {
      this.deepHydrate(this._instance, initialStore, initialStore);
    }

    return this._instance;
  }
}

export { AppModule };
