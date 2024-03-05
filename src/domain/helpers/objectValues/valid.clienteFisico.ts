import { Adm } from "@adm"
import { MinString } from "@libs"

// insira nas funcoes as sub funcoes para validar o campo desejado com objectValue.

const adm = Adm.gerarAdmClienteFisico().admClienteFisico

export const NomeClienteFisico = async (data: string) => {
  const minText = await MinString(data, adm.lenghtNome)
  return minText
}

export const SobrenomeClienteFisico = async (data: string) => {
  const minText = await MinString(data, adm.lenghtSobrenome)
  return minText
}