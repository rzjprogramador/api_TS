import { TypeValidateScalar, Feedback } from "@external"

export const nomeClienteFisico: TypeValidateScalar<string> = {
  text: 3,
  number: 0,
  rule: '',
  messageError: Feedback.minText,
}
export const sobrenomeClienteFisico: TypeValidateScalar<string> = nomeClienteFisico

export class AdmClienteFisico {
  constructor(
    public readonly nome: TypeValidateScalar<string> = nomeClienteFisico,
    public readonly sobrenome: TypeValidateScalar<string> = sobrenomeClienteFisico,
  ) { }

}
