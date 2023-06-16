import { Resolvers } from "./generated/graphql";
import {
  commentResolver,
  postResolver,
  userResolver,
} from "./rest/typicode/resolver";

export const resolvers: Resolvers = {
  Query: {
    comments: async (_, args, context) => {
      return {
        nextOffset: (args._page ?? 1) + 1,
        results: await context.dataSources.commentsAPI.getComments(args),
      };
    },
    comment: async (_, args, context) => {
      return context.dataSources.commentsAPI.getComment(args.id);
    },
    posts: (_, __, context) => {
      return context.dataSources.postsAPI.getPosts();
    },
  },
  Post: postResolver,
  User: userResolver,
  Comment: commentResolver,
};
