# Alguns detalhes sobre o aprendizado de Typescript

    Detalhamento de funções ou mais específico de código estão na documentação da função em sí, coloca o mouse em cima das funções e veja. Esse MD é mais para ideia e teoria novas que achei pertinente.
 
### Estrutura do código

    A estrutura dos arquivos dentro de /src é no padrão APP que consiste em ter o MVC e pastas no source para todo a aplicação mas existe outra estrutura que seja melhor para as aplicações escaláveis que é o padrão FEATURE que é cada feature ter seu próprio modelo de MVC, seus controllers, models e views. 

    APP:
    --- /src
    ------ /controllers
    --------- feature1-controller
    --------- feature2-controller
    --------- feature3-controller
    --------- ...
    ------ /models
    --------- ...
    ------ /views
    --------- ...

    FEATURES:
    --- /src
    ------ /feature1
    --------- /controllers
    ------------ feature1-controller
    ------------ ...
    --------- /models
    ------------ feature1-model
    ------------ ...
    --------- /views
    ------------ feature1-view
    ------------ ...

    No caso o que eu reparei é que numa aplicação robusta igual na empresa o primeiro padrão vai ficar com MUITO arquivo colapsado em apenas uma pasta.
    Fica horrível de se achar a longo prazo. No FEATURE fica muito mais organizado.

### Decorators

    Os decorators é uma exelente feature para quando você tem algum método ou propriedade em uma classe e você quer fazer algo antes desse método e você não quer poluir o seu código, ou você quer fazer algum check de segurança, teste de performance, ou até mesmo um teste unitário. Bem é bem versátil no código e deixa ele mais legível