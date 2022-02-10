type RequestOptions<D = object> = {
  url: string;
  data: D;
  baseURL?: string;
  method:
    | 'GET'
    | 'DELETE'
    | 'HEAD'
    | 'OPTIONS'
    | 'POST'
    | 'PUT'
    | 'PATCH'
    | 'PURGE'
    | 'LINK'
    | 'UNLINK';
  headers?: Record<string, string>;
};

abstract class HttpService {
  public constructor(
    protected options: {
      getConfig?: () => RequestOptions;
      handleStatus?: (status: number) => void;
    }
  ) {}

  public abstract request<D, R>(options: RequestOptions<D>): Promise<R>;
}

abstract class ApiService {
  public constructor(protected http: HttpService) {}
}

export { HttpService, ApiService };

export type { RequestOptions };
