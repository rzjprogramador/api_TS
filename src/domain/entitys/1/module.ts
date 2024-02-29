import { requestCreateEntity1 } from "./seed.entity1.ts";

// interface Entity1 {
//   nome: string
//   idade: number
//   saldo: number
//   casado: boolean
// }

class Entity {

  constructor(
    private readonly texto: string,
  ) { }

  static create(texto: string) {
    return new Entity(texto)
  }

}

const entity_1 = async () => {
  const created = await Entity.create(requestCreateEntity1)
  return created
}

export {
  entity_1
}