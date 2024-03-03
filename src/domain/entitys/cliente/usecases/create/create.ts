export interface Cliente {
  args: ArgsCliente
}

export type ArgsCliente = {
  nome: string
  sobrenome: string
}

export class CreateCliente {
  constructor(
    public readonly args: ArgsCliente,
  ) { }

  static async execute(args: ArgsCliente) {
    return await new CreateCliente(args)
  }

}