import { adm } from "@adm"
import { MinString } from "@libs"

// insira nas funcoes as sub funcoes para validar o campo desejado com objectValue.

export const NomeClienteFisico = async (data: string) => {
  const minText = await MinString(data, adm.lengthTextNomeClienteFisico)
  return minText
}

export const SobrenomeClienteFisico = async (data: string) => {
  const minText = await MinString(data, adm.lengthTextSobrenomeClienteFisico)
  return minText
}