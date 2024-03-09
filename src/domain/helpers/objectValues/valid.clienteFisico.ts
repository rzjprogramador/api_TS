import { AdmController } from "@adm"
import { ValidateText } from "@external"

// insira nas funcoes as sub funcoes para validar o campo desejado com objectValue.

export const NomeClienteFisico = async (data: string) => {
  return await ValidateText(data, new AdmController().admClienteFisico.nome)
}

export const SobrenomeClienteFisico = async (data: string) => {
  return await ValidateText(data, new AdmController().admClienteFisico.sobrenome)
}