import { CreateClienteFisicoService, ArgsClienteFisico } from "@clienteFisico";


export class CreateClienteFisicoController {

  static async execute(args: ArgsClienteFisico) {
    return await CreateClienteFisicoService.perform(args)
  }

}