// deno-lint-ignore-file no-explicit-any
import { ICreateClienteServices, IClienteCenterActions, CreateClienteArgs, createClienteService } from "@cliente";
import { badRequest, ok } from "@helpers";


class CreateClienteController implements IClienteCenterActions {
  constructor(
    private readonly createClienteService: ICreateClienteServices
  ) { }

  create = async (args: CreateClienteArgs) => {
    try {
      return await ok(await this.createClienteService.create(args))
    }
    catch (err: any) {
      return await badRequest(await err)
    }
  }
}

export const createClienteController = new CreateClienteController(
  createClienteService,
)
