import * as path from "@lib_node_path";

const _dirname: any = path.dirname(path.fromFileUrl(import.meta.url))

export {
  path,
  _dirname,
}