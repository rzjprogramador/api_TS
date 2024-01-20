# LOGG
```
todas acoes para registrar logg tera que ter no prototype da entidade o metodo:
// -- para gravar o add logg no repositorio --

async addLogg(logg: ILoggAction) {
  await defineRepositoryCliente.Cliente.addLogg(logg)
}

// -- e no servico executar o logg passando em string o nome da ação, e a factory alvo que tenha os getterID() e o getterFullname --

// -- replica da SuperLib que add o logg:
export { addLoggFN as AddLoggFN, type LoggAction } from '/home/rzj/..gitAll/SuperLibsTS/main.ts'

await factory.addLogg(await AddLoggFN(await generatorObjAction('nome_DaAção', factory)))
```

---
