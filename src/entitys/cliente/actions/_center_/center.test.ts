// import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

// import { HttpResponse } from "@helpers";
// import { clienteCenterActions, CreateClienteArgs, ClienteOKFake } from "@cliente";

// const sut = clienteCenterActions
// const inputFakeOK: CreateClienteArgs = ClienteOKFake.ONE
// const actionCreateClienteController: HttpResponse = await sut.create(inputFakeOK)

// Deno.test({
//   name: "deve retornar a instancia da entidade com os campos requeridos.[ OK -> Instancia Cliente ]]",
//   only: false,
//   async fn() {
//     console.log(await actionCreateClienteController)
//     expect(await actionCreateClienteController.statusCode).toEqual(200);
//     expect(await actionCreateClienteController.data.ID).not.toBeNull();
//     expect(await actionCreateClienteController.data.args.primeiroNome).toEqual('anyONE');
//   },
// });

// Deno.test({
//   name: "deve ter por default o type: clienteFisico",
//   only: false,
//   async fn() {
//     expect(await actionCreateClienteController.data.args.type).toEqual('fisico');
//   },
// });

// Deno.test({
//   name: "deve ter os seguintes valores em managers",
//   only: false,
//   async fn() {
//     expect(await actionCreateClienteController.data.managers.activation).toEqual('off');
//     expect(await actionCreateClienteController.data.managers.statusOperational).toEqual('pendente');
//   },
// });

// Deno.test({
//   name: "deve computar os campos.",
//   only: false,
//   async fn() {
//     expect(await actionCreateClienteController.data.computed.fullname).toEqual('anyONE sobrenome fisico');
//     expect(await actionCreateClienteController.data.computed.idade).not.toBeNaN();
//   },
// });


// export default 1;