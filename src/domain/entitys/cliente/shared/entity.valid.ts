import type { ArgsClienteFisico, ComputedClienteFisico } from "@cliente";
import { NomeClienteFisico, SobrenomeClienteFisico } from "@helpers";

export class Cliente {
  constructor(
    public readonly args: ArgsClienteFisico,
  ) { }

  static async createArgsClienteFisico(args: ArgsClienteFisico) {
    try {
      const instanceByArgs = await new Cliente(args)
      const validArgs = {
        nome: await NomeClienteFisico(instanceByArgs.args.nome),
        sobrenome: await SobrenomeClienteFisico(instanceByArgs.args.sobrenome),
      }
      const computed: ComputedClienteFisico = {
        nomeCompleto: await instanceByArgs.nomeCompleto(),
      }
      const created = await { args: validArgs, computed }
      return created
    } catch (error) {
      throw error
    }

  }

  async nomeCompleto() {
    return await `${this.args.nome} ${this.args.sobrenome}`
  }

}