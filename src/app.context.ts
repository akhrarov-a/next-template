import { createContext, useContext } from 'react';
import { AppStore } from './app.store';

/**
 * Store Context
 */
const StoreContext = createContext<AppStore>(null);

/**
 * Use Store
 */
const useStore = () => useContext(StoreContext);

export { StoreContext, useStore };
