import path from "./lib_imports.ts";
import { mergeResolvers, loadFilesSync } from "./lib_imports.ts";
import { __dirname } from "./lib_imports.ts";

import { resolverUM } from "./modules/01/1.resolvers.ts";
import { resolverDOIS } from "./modules/02/2.resolvers.ts";

// const mergePath = loadFilesSync(
//   path.join(__dirname, "modules/**/*.resolvers.ts")
// );

// const resolvers = mergeResolvers(mergePath);

const resolvers = [resolverUM, resolverDOIS];

export default resolvers;