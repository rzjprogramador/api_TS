import { AdmController } from "@adm"
import { ValidateText } from "@external"

// insira nas funcoes as sub funcoes para validar o campo desejado com objectValue.

export const NomeClienteFisico = async (data: string) => {
  try {
    return await ValidateText(data, new AdmController().admClienteFisico.nome)
  } catch (error) {
    throw error
  }
}

export const SobrenomeClienteFisico = async (data: string) => {
  try {
    return await ValidateText(data, new AdmController().admClienteFisico.sobrenome)
  } catch (error) {
    throw error
  }
}