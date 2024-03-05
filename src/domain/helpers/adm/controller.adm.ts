import { AdmClienteFisico } from "./index.ts"

export class Adm {
  constructor(
    public readonly admClienteFisico: any = new AdmClienteFisico,
  ) { }

  static gerarAdmClienteFisico() {
    return new Adm()
  }
}
