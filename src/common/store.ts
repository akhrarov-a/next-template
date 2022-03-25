import { AppStore } from 'src/app.store';
import { NextPageContext } from 'next';
import { AppContext as _AppContext } from 'next/app';

/**
 * Page Context
 */
type PageContext = NextPageContext & {
  store: AppStore;
};

/**
 * App Context
 */
type AppContext = _AppContext & {
  ctx: NextPageContext & {
    store: AppStore;
  };
};

/**
 * IStore
 */
interface IStore<S> {
  global: AppStore;

  hydrate(store: S, global: AppStore): void;
}

/**
 * Store Constructor
 */
type StoreConstructor = Function & { [IS_STORE_TYPE]?: boolean };

/**
 * IS_STORE_TYPE
 */
const IS_STORE_TYPE = 'IS_STORE_TYPE';

/**
 * Store decorator
 */
const Store = (constructor: StoreConstructor) => {
  constructor[IS_STORE_TYPE] = true;
};

/**
 * Base Hydrate
 */
const baseHydrate = <S, T>(source: S, target: T | (T & IStore<T>)) => {
  Object.entries(source).forEach(([prop, val]) => {
    (target as Record<string, any>)[prop] = val;
  });
};

export { Store, IS_STORE_TYPE, baseHydrate };

export type { IStore, PageContext, AppContext };
