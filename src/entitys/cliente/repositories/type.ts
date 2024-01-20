import { ClienteModel } from "@cliente"

export interface IClienteRepository {
  items?: ClienteModel[]

  exist: (args: ClienteModel) => Promise<boolean>
  create: (args: ClienteModel) => Promise<ClienteModel>
  list: () => Promise<ClienteModel[]>
  getbyID: (ID: string) => Promise<ClienteModel>
}