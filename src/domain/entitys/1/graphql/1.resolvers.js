const respostaUm = {
  texto1: "String 1",
  numeroInteiro: 10,
  numeroDecimal: 11.13,
  logico: true,
};

export default {
  Query: {
    um: async () => await respostaUm,
  },
};
// export const resolverUM = {
//   Query: {
//     um: async () => await respostaUm,
//   },
// };
