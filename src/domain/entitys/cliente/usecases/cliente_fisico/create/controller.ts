import { CreateCliente, ArgsClienteFisico } from "../../../shared/exports.ts";


export class CreateClienteController {

  static async executeClienteFisico(data: ArgsClienteFisico) {
    const createdService = await CreateCliente.performClienteFisico(data)
    const created = await createdService
    return created
  }

}