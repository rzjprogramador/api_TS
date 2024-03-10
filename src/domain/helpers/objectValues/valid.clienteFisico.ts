import { AdmController } from "@adm"
import { ValidateText } from "@external"

// add no array as funcoes para validar a propriedade
const listNomeClienteFisico = [ValidateText,]

export const NomeClienteFisico = async (target: any, listFn: Function[] = listNomeClienteFisico) => {
  try {
    return await listFn.reduce((acc: any, atfn: Function) => {
      return atfn(acc, new AdmController().admClienteFisico.nome)
    }, target)
  } catch (error) {
    throw error
  }
}

// add no array as funcoes para validar a propriedade
const listSobrenomeClienteFisico = [ValidateText,]

export const SobrenomeClienteFisico = async (target: any, listFn: Function[] = listSobrenomeClienteFisico) => {
  try {
    return await listFn.reduce((acc: any, atfn: Function) => {
      return atfn(acc, new AdmController().admClienteFisico.sobrenome)
    }, target)
  } catch (error) {
    throw error
  }
}
