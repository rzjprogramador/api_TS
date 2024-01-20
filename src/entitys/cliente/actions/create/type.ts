import { CreateClienteArgs, ClienteModel } from "@cliente";

export interface ICreateClienteServices {
  create(args: CreateClienteArgs): Promise<ClienteModel>
}

export interface ICreateClienteSave {
  save(model: ClienteModel): Promise<ClienteModel>
}

