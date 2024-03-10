import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { CreateClienteController, argsCreateClienteFisicoSEED } from "@cliente"
import { AdmController, nomeClienteFisico } from "@adm";

const sutController = await CreateClienteController.handle(argsCreateClienteFisicoSEED)
const sut = sutController
console.log("INSTANCIA_SUT GERADA CLIENTE FISICO >> ", sut)

Deno.test({
  name: "[ ClienteFisico ] deve criar Cliente.",
  only: false,
  async fn() {
    // console.log(sutInstance)
    expect(sut.data.args.nome).toEqual("ClienteUm");
    expect(sut.data.args.sobrenome).toEqual("SobrenomeUM");
  },

});

Deno.test({
  name: "[ ClienteFisico ] deve computar de forma assincrona o nomeCompleto como prop da instancia.",
  only: false,
  async fn() {
    // console.log(created.nomeCompleto())
    expect(await sut.data.computed.nomeCompleto).toEqual("ClienteUm SobrenomeUM");
  },

});

Deno.test({
  name: "[ ClienteFisico - validacao campo nome ] deve recusar criar a instancia de clienteFisico com nome inferior a 3 letras.",
  only: false,
  async fn() {
    const catchMsg = async () => {
      const requestFail = { nome: "le", sobrenome: "SobrenomeUM" }
      return await CreateClienteController.handle(requestFail)
    }

    const res = await catchMsg()
    const msgError = `${nomeClienteFisico.messageError} ${new AdmController().admClienteFisico.nome.text}`

    // console.log('RESULTADO >>', await res)

    expect(await res.data).toEqual(msgError)
    expect(await res.statusCode).toEqual(400)
  },

});

Deno.test({
  name: "[ ClienteFisico - validacao campo sobrenome ] deve recusar criar a instancia de clienteFisico com nome inferior a 3 letras.",
  only: false,
  async fn() {
    const catchMsg = async () => {
      const requestFail = { nome: "any", sobrenome: "ss" }
      return await CreateClienteController.handle(requestFail)
    }

    const res = await catchMsg()
    const msgError = `${nomeClienteFisico.messageError} ${new AdmController().admClienteFisico.sobrenome.text}`

    console.log('RESULTADO >>', await res)

    expect(await res.data).toEqual(msgError)
    expect(await res.statusCode).toEqual(400)
  },

});

