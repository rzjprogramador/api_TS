import { graphql, ApolloServer, startStandaloneServer } from "lib_graphql"

import { typeDefs } from "./schema.typeDefs.ts"
import { resolvers } from "./schema.resolvers.ts"

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 8000 },
});

console.log(`Server running on: ${url}`);
