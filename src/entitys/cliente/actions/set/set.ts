import { IClienteRepository, IClienteSet, clienteRepositoryProduction } from "@cliente";

class ClienteSet implements IClienteSet {
  constructor(
    private readonly repositoryProduction: IClienteRepository
  ) { }
}

export const clienteSet = new ClienteSet(
  clienteRepositoryProduction
)