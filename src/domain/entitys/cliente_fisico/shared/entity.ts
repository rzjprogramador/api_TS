import type { ArgsClienteFisico, ComputedClienteFisico } from "@clienteFisico";

export class EntityClienteFisico {
  constructor(
    public readonly args: ArgsClienteFisico,
  ) { }

  static async create(args: ArgsClienteFisico) {

    const instanceByArgs = await new EntityClienteFisico(args)

    const validArgs = {
      nome: instanceByArgs.args.nome,
      sobrenome: instanceByArgs.args.sobrenome,
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