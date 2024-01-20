import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import {
  CreateClienteArgs,
  ClienteSeed,
  makeClienteSeed,
  ClienteModel,
} from '@cliente'

const seedClienteONE: CreateClienteArgs = {
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
}
const seedClienteTWO: CreateClienteArgs = {
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
}

const sut: ClienteSeed = makeClienteSeed

Deno.test('[ OK ] deve conter as [ props && valores ] corretas no { Seed && Fake } Cliente .', async () => {
  const where: ClienteModel = await sut.perform(seedClienteONE)

  expect(where).toHaveProperty('ID')
  // expect(where.args.primeiroNome).toBe('any')
  // expect(where.args.segundoNome).toBe('sobrenome fisico')
  // expect(where.args.cpf).toBe('1234567')
  // expect(where.args.email).toBe('any@email.com')
  // expect(where.args.dataNascimento.ano).toBe('1980')
  // expect(where.args.type).toBe('fisico')
});

// Deno.test('[ OK ] deve conter as [ props && valores ] corretas no { Seed && Fake } Cliente TWO.', () => {
//   expect(sutTWO.ID).toBe('2')
//   expect(sutTWO.primeiroNome).toBe('anyTWO')
//   expect(sutTWO.sobrenome).toBe('sobrenome fisico')
//   expect(sutTWO.cpf).toBe('1234567')
//   expect(sutTWO.email).toBe('any@email.com')
//   expect(sutTWO.dataNascimento.ano).toBe('1980')
//   expect(sutTWO.type).toBe('fisico')
// });

export default 1;