import { CreateClienteArgs } from "@cliente";
import { HttpResponse } from "@helpers";

export interface IClienteCenterActions {
  create(args: CreateClienteArgs): Promise<HttpResponse>
}
