import { IClienteCenterActions, CreateClienteArgs, createClienteController } from "@cliente"

class ClienteCenterActions implements IClienteCenterActions {
  constructor(
    private readonly createClienteController: IClienteCenterActions,
  ) { }

  create = async (args: CreateClienteArgs) => await this.createClienteController.create(args)
}

export const clienteCenterActions = new ClienteCenterActions(
  createClienteController,
)

// -- All_Metodos