import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { CreateClienteController, argsCreateClienteFisicoSEED } from "../../shared/exports.ts"

const sutController = await CreateClienteController.executeClienteFisico(argsCreateClienteFisicoSEED)
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

Deno.test({
  name: "[ FAIL ] deve recusar criar a instancia de clienteFisico com nome inferior a 2 letras.",
  only: false,
  async fn() {

    const catchMsg = async () => {
      const requestFail = { ...argsCreateClienteFisicoSEED, nome: "F" }

      try {
        return await CreateClienteController.executeClienteFisico(requestFail)
      }
      catch (err: any) {
        return err.message
      }
    }

    expect(await catchMsg()).toBe("Ops... as letras não podem ser menor que 2");
  },

});
