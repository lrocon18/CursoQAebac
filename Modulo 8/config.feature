Funcionalidade: Configurar produto na EBAC-SHOP

  Contexto:
    Dado que sou um cliente da EBAC-SHOP

  Cenário: Configurar produto com tamanho, cor e quantidade
    Dado que estou visualizando um produto
    Quando seleciono uma cor válida
    E seleciono um tamanho válido
    E insiro uma quantidade válida
    Então o produto é configurado corretamente

  Cenário: Limpar configurações do produto
    Dado que estou visualizando um produto configurado
    Quando clico no botão "Limpar"
    Então as configurações do produto voltam ao estado original

  Cenário: Limite de 10 produtos por venda
    Dado que estou visualizando um produto
    Quando seleciono uma cor válida
    E seleciono um tamanho válido
    E insiro uma quantidade maior que 10
    Então uma mensagem de erro é exibida informando o limite máximo de produtos por venda

Autor: Lucas Rocon