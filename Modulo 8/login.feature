Funcionalidade: Autenticação na plataforma da EBAC-SHOP

  Contexto:
    Dado que sou um cliente da EBAC-SHOP

  Cenário: Login com dados válidos
    Quando acesso a página de login
    E insiro dados válidos de usuário e senha
    Então sou direcionado para a tela de checkout

  Cenário: Login com dados inválidos
    Quando acesso a página de login
    E insiro dados inválidos de usuário ou senha
    Então vejo uma mensagem de alerta "Usuário ou senha inválidos"

Autor: Lucas Rocon