import { TypeValidateScalar } from "../../../external/index.ts"

export const setClienteFisico: TypeValidateScalar<string> = {
  text: 2,
  number: 0,
  rule: '',
  messageError: "Ops... nao pode texto menor que",
}

export class AdmClienteFisico {
  constructor(
    public readonly nome: TypeValidateScalar<string> = setClienteFisico,
    public readonly sobrenome: TypeValidateScalar<string> = setClienteFisico,
  ) { }

}