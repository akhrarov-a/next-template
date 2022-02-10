import { AppStore } from 'src/app.store';

interface IStore<S> {
  __global: AppStore;

  __hydrate(store: S, global: AppStore): void;
}

const IS_STORE_TYPE = 'IS_STORE_TYPE';

const Store = (constructor: Function) => {
  // @ts-ignore
  constructor[IS_STORE_TYPE] = true;
};

const baseHydrate = (source: object, target: object) => {
  Object.entries(source).forEach(([prop, val]) => {
    (target as any)[prop] = val;
  });
};

export { Store, IS_STORE_TYPE, baseHydrate };

export type { IStore };
