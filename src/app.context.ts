import { createContext, useContext } from 'react';
import { AppStore } from './app.store';

const StoreContext = createContext<AppStore>(null);

const useStore = () => useContext(StoreContext);

export { StoreContext, useStore };
