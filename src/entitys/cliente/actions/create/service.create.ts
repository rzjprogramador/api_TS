import { ClienteModel, CreateClienteArgs, ICreateClienteServices, IClienteManager, clienteManager } from "@cliente";
import { IdentificatorType, identificator } from "@helpers";

class CreateClienteService implements ICreateClienteServices {
  constructor(
    public readonly identificator: IdentificatorType,
    public readonly clienteManager: IClienteManager,
  ) { }

  async create(args: CreateClienteArgs) {

    const model: ClienteModel = await {
      ID: await this.identificator?.performID?.()!,
      args: args,
      computed: {
        fullname: `${args.primeiroNome} ${args.segundoNome}`,
        idade: 2023 - Number(args.dataNascimento.ano),
      },
      managers: {
        activation: await this.clienteManager.activation,
        statusOperational: await this.clienteManager.statusOperational
      }
    }
    return await model
  }
}

export const createClienteService = new CreateClienteService(
  identificator,
  clienteManager,
)