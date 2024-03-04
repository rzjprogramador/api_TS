
class Adm {

  constructor(
    public readonly lengthTextNomeClienteFisico: number = 2,
    public readonly lengthTextSobrenomeClienteFisico: number = 2,
  ) {
    this.lengthTextNomeClienteFisico = lengthTextNomeClienteFisico
  }
}

export const adm = new Adm