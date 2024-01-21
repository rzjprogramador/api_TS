import { LoadFilesSync, MergeResolvers } from 'lib_graphql'
import { join, dirname } from 'lib_std'

const mergePath = LoadFilesSync(join("../../domain/entitys/**/graphql/*.resolvers.ts"));

const resolvers = MergeResolvers(mergePath);

export { resolvers }




// import { umResolver } from "@/domain/entitys/1/graphql/1.resolvers.ts";
// import { doisResolver } from "@/domain/entitys/2/graphql/2.resolvers.ts";

// export const resolvers = [umResolver, doisResolver]