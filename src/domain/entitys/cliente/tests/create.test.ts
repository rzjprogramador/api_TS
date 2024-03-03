import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { CreateCliente, type Cliente } from "../usecases/create/create.ts"
import { argsCreateClienteSEED } from "../usecases/create/seed.args.create.ts";

const sut = CreateCliente

Deno.test({
  name: "[ OK ] deve criar Cliente.",
  only: false,
  async fn() {
    const created = await sut.execute(argsCreateClienteSEED)
    console.log(created)

    expect(created.args.nome).toEqual("ClienteUm");
    expect(created.args.sobrenome).toEqual("SobrenomeUM");
  },

});
