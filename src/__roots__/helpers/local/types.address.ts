export type DataNascimento = {
  dia: number
  mes: number
  ano: number
}

export interface Endereco {
  cep: string;
  longadouro: string;
  numero: string;
  complemento: string;
  cidade: Cidade;
}

export interface Cidade {
  nome_cidade: string;
  uf: string;
}
