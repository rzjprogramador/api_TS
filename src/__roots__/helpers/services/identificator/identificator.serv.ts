import { IDD } from "@helpers"

export interface IdentificatorType {
  performID?: () => Promise<string>
}

class Identificator implements IdentificatorType {
  async performID() {
    return await IDD.perform()
  }
}

export const identificator = new Identificator()