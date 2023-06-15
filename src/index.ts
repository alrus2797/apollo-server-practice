import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { TypicodeAPI } from "./rest/typicode";
import { resolvers } from "./resolvers";

import { readFileSync } from "fs";

const typeDefs = readFileSync("./src/schema.graphql", { encoding: "utf-8" });

export interface ContextValue {
  dataSources: {
    commentsAPI: TypicodeAPI;
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
        commentsAPI: new TypicodeAPI({ cache }),
      },
    };
  },
});

console.log("Server started at", url);
