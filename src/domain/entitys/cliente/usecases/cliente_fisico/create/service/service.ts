import { Cliente, ArgsClienteFisico } from "@cliente";


export class CreateCliente {

  static async execute(data: ArgsClienteFisico) {
    try {
      return await Cliente.createArgsClienteFisico(data)
    } catch (error) {
      throw error
    }
  }

}