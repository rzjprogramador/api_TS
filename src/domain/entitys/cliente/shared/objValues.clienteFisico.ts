// deno-lint-ignore-file no-unused-vars
import { AdmController } from "@adm"
import { ValidateText, usePipeValidateAsync } from "@external"

const cf = AdmController.createAdmClienteFisico().admClienteFisico

// add no array as funcoes para validar a propriedade
const listNomeClienteFisico = [ValidateText,]
export const NomeClienteFisico = async (data: any) => await usePipeValidateAsync(data, listNomeClienteFisico, cf.nome)

// add no array as funcoes para validar a propriedade
const listSobrenomeClienteFisico = [ValidateText,]
export const SobrenomeClienteFisico = async (data: any) => await usePipeValidateAsync(data, listNomeClienteFisico, cf.sobrenome)

