import { RESTDataSource } from "@apollo/datasource-rest";

export const DEFAULT_PARAMS = {
  _limit: "20",
  _page: "0",
};

export class TypicodeAPI extends RESTDataSource {
  override baseURL = "https://jsonplaceholder.typicode.com";
}
