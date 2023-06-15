import { Resolvers } from "./generated/graphql";

export const resolvers: Resolvers = {
  Query: {
    comments: async (_, __, context) => {
      return context?.dataSources.commentsAPI.getComments();
    },
  },
};
