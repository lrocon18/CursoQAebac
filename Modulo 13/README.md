# Testes de API com Postman e biblioteca ServeRest
Este é o repositório da atividade do módulo 13 do curso de Testes de Software da EBAC, onde realizaremos testes de API utilizando o Postman em conjunto com a biblioteca ServeRest para criar relatórios com o Newman.

# Descrição
Nesta atividade, aprenderemos a realizar testes automatizados em APIs usando o Postman, uma ferramenta amplamente utilizada para testes de API. Além disso, utilizaremos a biblioteca ServeRest para simular uma API, permitindo que os testes sejam realizados sem depender do ambiente de desenvolvimento real.
O Newman será utilizado para executar os testes em lote e gerar relatórios detalhados, fornecendo uma visão abrangente do status dos testes realizados.

# Requisitos
Para executar os testes localmente, você precisará das seguintes ferramentas instaladas em sua máquina:

Postman
Node.js
Newman
ServeRest

# Como utilizar
Siga as etapas abaixo para executar os testes de API:

Clone este repositório em sua máquina local.
Instale as dependências do projeto executando o seguinte comando no terminal:

npm install -g serverest

Inicie a API utilizando o ServeRest com o seguinte comando:

serverest start

Com a API em execução, agora é possível importar o arquivo de coleção do Postman (disponível no repositório) no Postman.
Verifique se todas as variáveis de ambiente necessárias estão configuradas corretamente no Postman.
Execute os testes manualmente no Postman para garantir que tudo está funcionando conforme esperado.
Agora, para executar os testes em lote usando o Newman, utilize o seguinte comando no terminal:

newman run [nome_do_arquivo_de_colecao] -e [nome_do_arquivo_de_variaveis]

Substitua [nome_do_arquivo_de_colecao] pelo nome do arquivo da coleção do Postman e [nome_do_arquivo_de_variaveis] pelo nome do arquivo de variáveis do Postman, caso seja necessário.

O Newman executará os testes de API em lote e gerará um relatório detalhado com os resultados.
