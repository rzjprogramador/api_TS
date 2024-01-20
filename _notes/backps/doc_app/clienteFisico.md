---
marp: true
---
# ENTIDADE CLIENTE_FISICO

## Diretorios e arquivos escalaveis na entidade
> conceito: o que pode escalar, ou seja editar na app estará dentro das pastas
    * [ scalar/, scalables/ ]

> ## Caso de uso
### objetivo: criar nova entidade
**checar e tratar exceções**
    *[] se já existe
    *[]  validar campos
**sucesso**
    *[]  fabrica nova instancia
        *[]  adicionar novos campos <addFields> ex: [ ID, ]
        *[]  computar campos <computeFields>
    *[]  regrasDeNegocio_ByCliente_sobre_Model
    *[] *regras sobre model
    *[] *pipe salvar onde quiser
    *[]  **concluir objetivo : criar nova entidade.**



---


