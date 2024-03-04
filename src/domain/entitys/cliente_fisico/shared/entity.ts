import { ArgsClienteFisico } from "@clienteFisico";

export class EntityClienteFisico {
  constructor(
    public readonly args: ArgsClienteFisico,
  ) { }

  static async create(args: ArgsClienteFisico) {
    return await new EntityClienteFisico(args)
  }

  async nomeCompleto() {
    return await `${this.args.nome} ${this.args.sobrenome}`
  }

}