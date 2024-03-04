import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { CreateClienteFisicoController, argsCreateClienteFisicoSEED } from "@clienteFisico"

const sutController = await CreateClienteFisicoController.execute(argsCreateClienteFisicoSEED)
const sut = sutController
console.log("INSTANCIA_SUT GERADA >> ", sut)

Deno.test({
  name: "[ OK ] deve criar Cliente.",
  only: false,
  async fn() {
    // console.log(sutInstance)
    expect(sut.args.nome).toEqual("ClienteUm");
    expect(sut.args.sobrenome).toEqual("SobrenomeUM");
  },

});

Deno.test({
  name: "[ OK ] deve computar de forma assincrona o nomeCompleto como prop da instancia.",
  only: false,
  async fn() {
    // console.log(created.nomeCompleto())
    expect(await sut.computed.nomeCompleto).toEqual("ClienteUm SobrenomeUM");
  },

});
