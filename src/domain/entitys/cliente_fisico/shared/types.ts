export interface ClienteFisico {
  args: ArgsClienteFisico
  computed: ComputedClienteFisico
}

export type ArgsClienteFisico = {
  nome: string
  sobrenome: string
}

export interface ComputedClienteFisico {
  nomeCompleto: string
}