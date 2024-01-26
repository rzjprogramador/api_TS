import * as path from "https://deno.land/std@0.188.0/path/mod.ts";
export { mergeTypeDefs, mergeResolvers } from "npm:@graphql-tools/merge@^8.2.14";
export { loadFilesSync } from "npm:@graphql-tools/load-files@^7.0.0";


export const __dirname: any = path.dirname(path.fromFileUrl(import.meta.url))

export default path