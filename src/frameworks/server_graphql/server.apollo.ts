export { graphql } from '/home/rzj/x/_github_rz_/Super_Libs_RZ/Typescript/SuperGraphqlTools/modules/graphql.ts'
import { ApolloServer } from "npm:@apollo/server@^4.1"
import { startStandaloneServer } from "npm:@apollo/server@4.1/standalone"
import { loadFilesSync } from "npm:@graphql-tools/load-files@^6.5.4"
import { mergeTypeDefs, mergeResolvers } from "npm:@graphql-tools/merge@^8.2.14"
import { boom } from "./modules/graphql/1.resolvers.ts"


import { join, dirname } from "https://deno.land/std@0.183.0/path/mod.ts";

const arrayTypes = loadFilesSync(join(Deno.cwd(), '/modules/**/*.gql'))
const arrayResolvers = loadFilesSync(join(Deno.cwd(), '/modules/**/*.js'))

const typeDefs = mergeTypeDefs(arrayTypes)
const resolvers = [boom]
// const resolvers = mergeResolvers(arrayResolvers)

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 8000 },
});

console.log(`Server running on: ${url}`);
