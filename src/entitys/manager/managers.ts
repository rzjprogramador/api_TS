
export type StatusActivation = 'off' | 'on'
export type StatusOperational = 'pendente' | 'habilitado' | 'congelado' | 'removido'

export interface IClienteManager {
  activation: StatusActivation
  statusOperational: StatusOperational
}

class ClienteManager implements IClienteManager {
  public activation: StatusActivation = 'off'
  public statusOperational: StatusOperational = 'pendente'
}

export const clienteManager = new ClienteManager()