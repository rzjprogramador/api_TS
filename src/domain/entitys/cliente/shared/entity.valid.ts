import type { ArgsClienteFisico, ComputedClienteFisico } from "@cliente";
import { NomeClienteFisico, SobrenomeClienteFisico } from "@objectValues";

export class Cliente {
  constructor(
    public readonly args: ArgsClienteFisico,
  ) { }

  static async createArgsClienteFisico(args: ArgsClienteFisico) {
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
  }

  async nomeCompleto() {
    return await `${this.args.nome} ${this.args.sobrenome}`
  }

}