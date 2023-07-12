Funcionalidade: Concluir cadastro na EBAC-SHOP

  Contexto:
    Dado que sou um cliente da EBAC-SHOP

  Esquema do Cenário: Dados de cadastro
    | Nome       | Sobrenome | E-mail                | Senha    |
    | {nome}     | {sobrenome} | {email}              | {senha}  |

  Cenário: Cadastro com todos os dados obrigatórios
    Quando acesso a página de cadastro
    E preencho o formulário com dados válidos:
      | Nome       | Sobrenome | E-mail                | Senha    |
      | John       | Doe       | john.doe@example.com  | 123456   |
    Então meu cadastro é concluído com sucesso

  Cenário: Cadastro com formato inválido de e-mail
    Quando acesso a página de cadastro
    E preencho o formulário com dados inválidos de e-mail:
      | Nome       | Sobrenome | E-mail                | Senha    |
      | Jane       | Smith     | janesmith           | 123456   |
    Então vejo uma mensagem de erro informando que o e-mail está em formato inválido

  Cenário: Cadastro com campos vazios
    Quando acesso a página de cadastro
    E tento cadastrar com campos vazios
    Então vejo uma mensagem de alerta informando que todos os campos obrigatórios devem ser preenchidos

Autor: Lucas Rocon
