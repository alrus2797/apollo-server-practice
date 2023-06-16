import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { CommentsAPI, PostsAPI, TypicodeAPI, UsersAPI } from "./rest/typicode";
import { resolvers } from "./resolvers";

import { readFileSync } from "fs";

const typeDefs = readFileSync("./src/schema.graphql", { encoding: "utf-8" });

export interface ContextValue {
  dataSources: {
    typicodeAPI: TypicodeAPI;
    commentsAPI: CommentsAPI;
    postsAPI: PostsAPI;
    usersAPI: UsersAPI;
  };
}

const server = new ApolloServer<ContextValue>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    const { cache } = server;

    return {
      dataSources: {
        typicodeAPI: new TypicodeAPI({ cache }),
        commentsAPI: new CommentsAPI({ cache }),
        postsAPI: new PostsAPI({ cache }),
        usersAPI: new UsersAPI({ cache }),
      },
    };
  },
});

console.log("Server started at", url);
