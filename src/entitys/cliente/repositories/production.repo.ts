import { ClienteModel, IClienteRepository, } from "@cliente"

export class ClienteRepositoryProduction implements IClienteRepository {
  public items: ClienteModel[] = []

  async exist(args: ClienteModel) {
    return await this.items.some((i) => i?.ID === args?.ID)
  }

  async create(args: ClienteModel) {
    await this.items.push(args)
    return await args
  }

  async list() {
    return await this.items
  }

  async getbyID(ID: string) {
    const found = await this.items.find((i) => i.ID === ID)
    return await found!
  }

}

export const clienteRepositoryProduction = new ClienteRepositoryProduction
