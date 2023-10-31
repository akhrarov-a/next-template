import { enableStaticRendering } from 'mobx-react-lite';
import App, { AppContext } from 'next/app';
import { StoreContext } from 'src/app.context';
import { initializeStore } from 'src/app.module';

enableStaticRendering(typeof window == 'undefined');

// @ts-ignore
const _App = ({ Component, pageProps, store }) => {
  const _store = initializeStore(store);

  return (
    <StoreContext.Provider value={_store}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
};

_App.getInitialProps = async (appContext: AppContext) => {
  const store = initializeStore(null);

  // @ts-ignore
  appContext.ctx.store = store;

  const props = await App.getInitialProps(appContext);

  return {
    ...props,
    store
  };
};

export default _App;
