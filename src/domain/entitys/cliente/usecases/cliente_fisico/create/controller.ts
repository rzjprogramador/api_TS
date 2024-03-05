import { CreateCliente, ArgsClienteFisico } from "@cliente";

export class CreateClienteController {

  static async executeClienteFisico(data: ArgsClienteFisico) {
    const createdService = await CreateCliente.performClienteFisico(data)
    const created = await createdService
    return created
  }

}