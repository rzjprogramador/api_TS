import { ApolloServer } from "npm:@apollo/server@^4.1";
import { startStandaloneServer } from "npm:@apollo/server@4.1/standalone";
import { graphql } from "npm:graphql@16.6";
import * as path from "https://deno.land/std@0.188.0/path/mod.ts";
import { mergeTypeDefs, mergeResolvers } from "npm:@graphql-tools/merge@^8.2.14";
import { loadFilesSync } from "npm:@graphql-tools/load-files@^7.0.0";
import { listResolvers } from "./domain/list_resolvers/list.resolvers.ts";


const __dirname: any = path.dirname(path.fromFileUrl(import.meta.url))
const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname, "domain/entitys/**/**/"), { extensions: ['gql'] }))
// const resolvers = await mergeResolvers(await loadFilesSync(await path.join(__dirname, "/src/domain/entitys/**/**/"), { extensions: ['resolvers.*'] }))

const server = new ApolloServer({
  typeDefs,
  resolvers: listResolvers,
});

export const runServerGRAPHQL = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 8000 },
  });
  console.log(`Server running on: ${url}`);
}