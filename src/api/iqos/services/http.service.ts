import { HttpService, RequestOptions } from '@packages/http';
import axios, { AxiosError } from 'axios';

class IQOSHttpService extends HttpService {
  /**
   * Api request
   */
  public async request<D, R>({
    url,
    data,
    baseURL,
    headers = {},
    method
  }: RequestOptions<D>) {
    const { getConfig, handleStatus } = this.options;

    try {
      const base = getConfig?.() || { headers: {} };
      const response = await axios({
        ...base,
        url,
        baseURL,
        data,
        method,
        headers: {
          ...(base.headers || {}),
          ...headers
        }
      });

      await handleStatus?.(response.status);

      return response?.data;
    } catch (error) {
      const response = (error as AxiosError)?.response;

      await handleStatus?.(response.status);

      return response.data;
    }
  }
}

export { IQOSHttpService };
