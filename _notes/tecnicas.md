---
marp: true
---

### Tests_TDD
1. [tdd] : tests somente no controller - se puder inicie testando.

### Estrutural
1. entidadeAgrupadora:
   1. diversasAcoes: [controller + repositories + ]

1. entidadesDelegadasResolvedoras
   1. unicaAcaoResolvedoraEspecifica que resolve cada metodo da agrupadora : [services + save + ]

### Composição injeção de dependencia
> pedir via param no contructor somente classes delegadas que resolvem ex: [private readonly serviceCreate: ICreateLoggUserService], obs: params de metodos pedir só nos metodos.

### Maker
> fazer o maker no mesmo arquivo logo após a funcionalidadeAlvo.
> motivo de um maker :: para ter um #poloUnico da funcionalidade para utilizadores.

### Args_SET de entidades que utilizam diversos sets inclusive repositorios
> pedir o objeto sets via param, assim nest sets podem vcoter diversos recursos ex: pode conter o repositorio  assim fica mais dinamico poder testar passando o repo do momento
>
> #usoObjeto_Sets_viaParam : a camada que nao for resolver o objetoSets, apenas recebo e repasso ele empacotado ... onde for resolver sua utilidade desencadeando as props.finais ex: (no service)ai sim posso desenpacota-lo e decidir o que usar deste sets.

### Injecao de Dependencia - Pagar tendo a opção de inversao de dependencia
injeta servicos de depêndencias delegando que eles façam os servicos.
> (obs: tudo que [param]injeta - depois [arg]argumentamos com opção de inversao de dependencias ou seja quem cimpre o contrato serve como argumento no uso.)

### Types
1. *Types_Actions_Service :
    1. classes de serviço -- contem seus types por perto no próprio arquivo de serviço.

## hacks
> [RepoIntact] #hacks copiei do repomemory - para crescerem juntos - clean() o memory ANTES DESTE USO no tdd

## Nomeacoes na app
1. anteFixo:
   [maker] = é um poloUnico que instancia a criacao de uma funcionalidade ou estrutura ex: class unico lugar que usara o new para utilizar instancia da classe.

2. abrevicao de entidades
   [Cliente] = Cliente,


---
