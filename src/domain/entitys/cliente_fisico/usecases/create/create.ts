export interface ClienteFisico {
  args: ArgsClienteFisico
}

export type ArgsClienteFisico = {
  nome: string
  sobrenome: string
}

export class CreateClienteFisico {
  constructor(
    public readonly args: ArgsClienteFisico,
  ) { }

  static async execute(args: ArgsClienteFisico) {
    return await new CreateClienteFisico(args)
  }

}