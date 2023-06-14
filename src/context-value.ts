import { TypicodeAPI } from "./rest/typicode";

export interface ContextValue {
  dataSources: {
    commentsAPI: TypicodeAPI;
  };
}
