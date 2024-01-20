import { IDateFieldsStrings } from "@helpers"
import { IClienteManager } from "@cliente"

export interface ClienteModel {
  ID: string
  args: CreateClienteArgs
  computed?: ComputedCliente
  managers?: IClienteManager
}

export interface CreateClienteArgs {
  primeiroNome: string
  segundoNome: string
  cpf: string
  email: string
  dataNascimento: IDateFieldsStrings
  type: ClienteType
}

export type ClienteType = "juridico" | "fisico"

export type ComputedCliente = {
  idade?: number
  fullname?: string
}
