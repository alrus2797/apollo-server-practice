import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { TypicodeAPI } from "./rest/typicode";
import { resolvers } from "./resolvers";
import { ContextValue } from "./context-value";
import { typeDefs } from "./schema";


const server = new ApolloServer<ContextValue>({
  typeDefs,
  resolvers
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
