import { ClienteModel, ClienteOKFake, CreateClienteArgs, ICreateClienteServices, createClienteService } from "@cliente"

// novo com classe
export class ClienteSeed {
  constructor(
    private readonly createClienteService: ICreateClienteServices
  ) { }

  async perform(args: CreateClienteArgs) {
    return await this.createClienteService.create(args)
  }
}

export const makeClienteSeed = new ClienteSeed(
  createClienteService,
)


// -- sem classes

// const eClienteFakeONE = ClienteOKFake.ONE
// const eClienteFakeTWO = ClienteOKFake.TWO

// const fullnameAsyncONECliente = () => `${eClienteFakeONE.primeiroNome} ${eClienteFakeONE.segundoNome}`

// export const ClienteSeedsONE: ClienteModel = {
//   ID: '1',
//   args: {
//     primeiroNome: eClienteFakeONE.primeiroNome,
//     segundoNome: eClienteFakeONE.segundoNome,
//     cpf: eClienteFakeONE.cpf,
//     email: eClienteFakeONE.email,
//     dataNascimento: eClienteFakeONE.dataNascimento,
//     type: eClienteFakeONE.type,
//   },
//   computed: {
//     fullname: fullnameAsyncONECliente?.()!
//   }
// }

// export const ClienteSeedsTWO: ClienteModel = {
//   ID: '2',
//   args: {
//     primeiroNome: eClienteFakeTWO.primeiroNome,
//     segundoNome: eClienteFakeTWO.segundoNome,
//     cpf: eClienteFakeTWO.cpf,
//     email: eClienteFakeTWO.email,
//     dataNascimento: eClienteFakeTWO.dataNascimento,
//     type: eClienteFakeTWO.type,
//   }
// }
