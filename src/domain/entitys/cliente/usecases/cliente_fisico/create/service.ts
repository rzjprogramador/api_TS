import { Cliente, ArgsClienteFisico } from "@cliente";


export class CreateCliente {

  static async performClienteFisico(data: ArgsClienteFisico) {
    return await Cliente.createArgsClienteFisico(data)
  }

}