import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { CreateClienteFisicoController, argsCreateClienteFisicoSEED } from "@clienteFisico"

const sut = CreateClienteFisicoController
const sutInstance = await sut.execute(argsCreateClienteFisicoSEED)

Deno.test({
  name: "[ OK ] deve criar Cliente.",
  only: false,
  async fn() {
    // console.log(created)
    expect(sutInstance.args.nome).toEqual("ClienteUm");
    expect(sutInstance.args.sobrenome).toEqual("SobrenomeUM");
  },

});

Deno.test({
  name: "[ OK ] deve computar de forma assincrona o nomeCompleto()",
  only: false,
  async fn() {
    // console.log(created.nomeCompleto())
    expect(await sutInstance.nomeCompleto()).toEqual("ClienteUm SobrenomeUM");
  },

});
