import path from "./lib_imports.ts";
import { mergeTypeDefs, loadFilesSync } from "./lib_imports.ts";
import { __dirname } from "./lib_imports.ts";


const mergePath = loadFilesSync(
  path.join(__dirname, "modules/**/*.gql")
);

const typeDefs = mergeTypeDefs(mergePath);

export default typeDefs;