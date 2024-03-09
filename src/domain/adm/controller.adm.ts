import { AdmClienteFisico } from "./entitys_adm/adm.clienteFisico.ts"

export class AdmController {
  constructor(
    public readonly admClienteFisico = new AdmClienteFisico(),
  ) { }

}
