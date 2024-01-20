---
marp: true
---
# ARQUITETURA
## Entidade_Agrupadora_Para_Delegados
> utilizado_em: [ loggUser, Cliente,]


1. #TDD :
   1. iniciar_tdd #poloUnicotestsDaEntidade [TDD_Controller] : testando todos artefatos na {entidade e relacionados} utilizados.
   2. dependenciasModulares_da_entidade agrupar no #poloUnico [index.mod]

2. Implements
    1. se tiver *PROTOTYPE iniciar em actions/core/ gerando a [factoryPrototype] e computando campos. <define: campos da entidade> ... obs: entidadesAuxiliadoras não é obrigatório ter prototype... se nao tiver comece pelo controller - create()
    2. *ACTIONS em actions/
        1. [controller] agrupar <acoes da entidade[ CRUDL - comece pelo create - se tiver prototype execute-o dentro do create e prossiga.]> >> delegando cada acao ao
        2. service/ [service_especifico_Resolvedor] que devolve pronto.
        3. o servico resolvido manda salvar save/ [save] : que devolve salvo na base de dados escolhidas.

3. Repositorios repositories/
    1. contrato de todas acoes do repo em types.ts
    2. *DefineRepo para uso em [defineRepo] criar os objetos set conforme as precisoes :
        1. objSet com repo [PRODUCTION, MEMORY, INTACT]
        2. [Production] será o real apra quando a app estiver publicada.
        3. [Memory] para comparar modificacoes e asserções nos tests TDD.
        4. [Intact] para comparar não-modificacoes e asserções nos tests.


3. pipe para checar argumentos. <checar: regras sobre o input do user>


# entidade_Auxiliadora : LoggUser
1. [tdd] : tests somente no controller - se puder inicie testando.
2. inicia pelo controller
    1. injeta servicos de depêndencias delegando que eles façam os servicos.
3. [usecase_Controller 1x1 service] : um services para cada metodo [usecase] do controller