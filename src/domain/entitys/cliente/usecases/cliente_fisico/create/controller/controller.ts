import { CreateCliente, ArgsClienteFisico } from "@cliente";
import { ok, badRequest } from "@external";

export class CreateClienteController {

  static async handle(data: ArgsClienteFisico) {
    try {
      return await ok(await CreateCliente.performClienteFisico(data))
    } catch (error) {
      return await badRequest(error.message)
    }
  }

}