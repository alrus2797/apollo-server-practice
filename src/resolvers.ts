import { ContextValue } from "./context-value";

export const resolvers = {
  Query: {
    comments: async (_: any, __: any, { dataSources }: ContextValue) => {
      return dataSources.commentsAPI.getComments();
    },
  }
}