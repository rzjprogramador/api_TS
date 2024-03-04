import { EntityClienteFisico, ArgsClienteFisico } from "@clienteFisico";


export class CreateClienteFisicoService {

  static async perform(args: ArgsClienteFisico) {
    return await EntityClienteFisico.create(args)
  }

}