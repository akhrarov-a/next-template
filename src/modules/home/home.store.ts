import { action, makeAutoObservable } from 'mobx';
import { AppStore } from 'src/app.store';
import { baseHydrate, IStore, Store } from 'src/common/store';

// class HomeStore implements IStore<HomeStore> {

@Store
class HomeStore {
  public constructor() {
    makeAutoObservable(this);
  }

  public __global: AppStore;

  public counter = 0;

  public token: string;

  // public __hydrate(store: HomeStore, global: AppStore): void {
  //   baseHydrate(store, this);

  //   this.token = localStorage.getItem('dsada');
  // }

  @action.bound
  public count() {
    this.counter += 1;

    this.__global.api.user;
  }

  @action.bound
  public getData() {
    this.counter = 10;
  }
}

export { HomeStore };
