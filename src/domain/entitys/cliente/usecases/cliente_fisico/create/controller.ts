import { CreateCliente, ArgsClienteFisico } from "@cliente";

export class CreateClienteController {

  static async handle(data: ArgsClienteFisico) {
    try {
      return await CreateCliente.performClienteFisico(data)
    } catch (error) {
      return error
    }
  }

}