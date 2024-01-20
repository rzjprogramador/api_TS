---
marp: true
---
# ARQUITETURA IMPLEMENTASHOW_RZ

> ## Dependências
**deps Remote/**
  * *em replicas.ts*
    * importa módulos principais e exporta as réplicas renomeadas -> para uso nos mod.ts das entidades


**dependencias em ENTIDADE/**
  * *em mod.ts*
    * conceito: "definir uma fonte única de importações relacionadas a entidade e réplicas remotas.",
    * re-importar modulos replicados definidos em depsRemote/replicas
    * re-importar todos artefatos da entidade.

---
# SLIDES
[ArquiteturEmSlidesGoogle](https://docs.google.com/presentation/d/1upaxaMzGQpeHMlHGK5sBPhIQ3fJLeMMu4Z9FU4AIGWs/edit#slide=id.g1e5013a3685_0_1)

