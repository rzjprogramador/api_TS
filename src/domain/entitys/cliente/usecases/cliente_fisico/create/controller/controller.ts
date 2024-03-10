import { CreateCliente, ArgsClienteFisico } from "@cliente";
import { ok, badRequest } from "@external";

export class CreateClienteController {

  static async perform(data: ArgsClienteFisico) {
    try {
      return await ok(await CreateCliente.execute(data))
    } catch (error) {
      return await badRequest(error.message)
    }
  }

}