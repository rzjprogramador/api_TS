import { Cliente, ArgsClienteFisico } from "../../../shared/exports.ts";


export class CreateCliente {

  static async performClienteFisico(data: ArgsClienteFisico) {
    return await Cliente.createArgsClienteFisico(data)
  }

}