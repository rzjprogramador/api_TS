import type { CreateClienteArgs } from "@cliente"

interface ClienteFake {
  ONE: CreateClienteArgs
  TWO: CreateClienteArgs
}

const ClienteOKFake: ClienteFake = {
  ONE: {
    primeiroNome: 'anyONE',
    segundoNome: 'sobrenome fisico',
    cpf: '1234567',
    email: 'any@email.com',
    dataNascimento: {
      dia: '1',
      mes: '1',
      ano: '1980'
    },
    type: "fisico",
  },
  TWO: {
    primeiroNome: 'anyTWO',
    segundoNome: 'sobrenome fisico',
    cpf: '1234567',
    email: 'any@email.com',
    dataNascimento: {
      dia: '1',
      mes: '1',
      ano: '1980'
    },
    type: "fisico",
  },
}

export {
  ClienteOKFake,
  type ClienteFake
}