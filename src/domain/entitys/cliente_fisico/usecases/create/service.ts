import { EntityClienteFisico, ArgsClienteFisico } from "@clienteFisico";


export class CreateClienteFisicoService {

  static async perform(data: ArgsClienteFisico) {
    return await EntityClienteFisico.create(data)
  }

}