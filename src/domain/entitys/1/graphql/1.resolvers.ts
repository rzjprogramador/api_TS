const respostaUm = {
  texto1: 'String 10',
  numeroInteiro: 10,
  numeroDecimal: 11.13,
  logico: true
}

export default {
  Query: {
    um: () => respostaUm,
  },
};
// export const resolverUM = {
//   Query: {
//     um: async () => await respostaUm,
//   },
// };
