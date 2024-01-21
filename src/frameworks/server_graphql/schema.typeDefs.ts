
import { LoadFilesSync, MergeTypeDefs } from "lib_graphql";
import { join } from "https://deno.land/std@0.212.0/path/join.ts"
// import { loadFilesSync } from "npm:@graphql-tools/load-files@^7.0.0";

const mergePath = LoadFilesSync("../../domain/entitys/**/graphql/*.gql");

const typeDefs = MergeTypeDefs(mergePath);

export { typeDefs }




// import umTypedef from '@/domain/entitys/1/graphql/1.gql.ts'

// export const typeDefs = [umTypedef]