import { CreateClienteFisicoService, ArgsClienteFisico } from "@clienteFisico";


export class CreateClienteFisicoController {

  static async execute(data: ArgsClienteFisico) {
    const createdService = await CreateClienteFisicoService.perform(data)
    const created = await createdService
    return created
  }

}