import { IQOSHttpService, UserService } from '@api/iqos';
import { HomeStore } from '@home/home.store';

class AppStore {
  private http = new IQOSHttpService();

  public api = {
    user: new UserService(this.http)
  };

  public home = new HomeStore();
}

export { AppStore };
