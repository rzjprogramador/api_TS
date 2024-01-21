import { entity_1 } from "um";
import { entity_2 } from "dois";

import typeDefs from "./frameworks/server_graphql/schema.typeDefs.ts";
import resolvers from "./frameworks/server_graphql/schema.resolvers.ts";


// console.log("Hello Word")

// console.log(`Usando Deno.cwd() esta voltando : ${Deno.cwd()} --- final.`)

// console.log(entity_1())
// console.log(entity_2())

console.log('TYPEDEFS >>> ', typeDefs)
console.log('RESOLVERS >>> ', resolvers)