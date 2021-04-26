import { PluginObject } from "vue";
import Vue from "vue";

export class ApiError extends Error {
  public statusCode: string;
  public code: string;

  constructor(data: any = {}) {
    super(data.message);
    this.code = data.code;
    this.statusCode = data.statusCode;
  }
}

export class Api {
  constructor(
    private onError: (e: ApiError) => void | Promise<void> = console.error
  ) {}

  async get(params: any) {
    const url = "https://api.github.com/search/users?q=";
    return await this.request(url, params);
  }

  async getOne(params: any) {
    const url = "https://api.github.com/users/";
    return await this.request(url, params);
  }

  private async request(url: string, endpoint: string) {
    const uri = `${url}${endpoint}`;
    try {
      const result = await Vue.axios.get(uri).then((response) => {
        return response.data;
      });
      if (result?.items?.length === 0) {
        throw new Error("Error");
      }
      return result;
    } catch (e) {
      await Promise.resolve(this.onError(e));
      return undefined;
    }
  }
}

interface ApiOptions {
  onError: (e: ApiError) => void | Promise<void>;
  uriSearch: string;
}

const ApiPlugin: PluginObject<ApiOptions> = {
  install: (Vue: any, options?: ApiOptions) => {
    Vue.$api = Vue.prototype.$api = new Api(options?.onError);
  },
};

export default ApiPlugin;
