import { TypeValidateScalar, Feedback } from "@external"

export const nomeClienteFisico: TypeValidateScalar = {
  text: 3,
  number: 0,
  rules: [],
  messageError: Feedback.minText,
}
export const sobrenomeClienteFisico: TypeValidateScalar = nomeClienteFisico

export class AdmClienteFisico {
  constructor(
    public readonly nome: TypeValidateScalar = nomeClienteFisico,
    public readonly sobrenome: TypeValidateScalar = sobrenomeClienteFisico,
  ) { }

}
