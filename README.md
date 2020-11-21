# tech-challenge  
Esta aplicação é apenas um desafio para demonstração de domínio sobre as tecnologias relacionadas ao Node.js.  
O objetivo da aplicação é obter uma lista de receitas a que são compostas por ingredientes indicados na request.  
  
## Pré-requisitos  
- Node.js 12.*  
- Docker  
- Projeto criado na GIPHY for Developers para uso de gifs da plataforma
  
## Quais configurações são necessárias?  
### Primeiro passo
Existe um arquivo de exemplo para configuração chamado de `.env.example` que contém as váriáveis necessárias para  
a aplicação funcionar normalmente, seu conteúdo atual é:
```
# gifs config
GIPHY_URL="http://api.giphy.com"
GIPHY_KEY="GIPHY_KEY"

# recipes config
RECIPE_PUPPY_URL="http://www.recipepuppy.com/api"
```
Baseando-se nesse arquivo `.env.example` é necessário criar um arquivo na raiz da aplicação chamado `.env` com as  
configurações necessárias, no caso além das urls, será necessário uma api key para o funcionamento correto da listagem de gifs nas respostas da aplicação.  
  
### Segundo passo  
Para construção da imagem da aplicação é necessário a contrução de uma imagem via docker com o seguinte comando:
`docker build -t tech-challenge-image .`  
**atenção** em alguns casos pode ser necessário rodar o comando com permissões `sudo` devido a falta de permissões.  
  
### Terceiro passo
Com a imagem construída é necessário inicializar e executar um novo container para execução da aplicação com o  
seguinte comando:  
`docker run --name tech-challenge-container -p 8080:8080 -d tech-challenge-image`  
**atenção** em alguns casos pode ser necessário rodar o comando com permissões `sudo` devido a falta de permissões.  
  
Ao seguir esses passos a aplicação já deverá ser capaz de receber requests na porta `8080`.  
  
### Gerenciamento do container  
#### Parar a execução do container  
Este comando é usado para interromper a execução do container:  
`sudo docker stop tech-challenge-container`  
  
#### Iniciar um container já criado  
Este comando é usado para inciar o container já criado:  
`sudo docker start tech-challenge-container`  
  
### API  
#### Rotas disponíveis  
##### `GET /recipes`  
A rota recebe como parâmetro query string uma variável chamada `i` que recebe um array de strings com no máximo 3 items.  
Exemplo de utilização:  
`/recipes?i%5B%5D=tomato&i%5B%5D=onion`  
O retorno da api será com status code `200` e conteúdo da seguinte forma:  
```
{
  "keywords": [
    string,
  ],
  "recipes": [
    {
      "title": string,
      "ingredients": [
        string
      ],
      "link": string,
      "gif": string
    }
  ]
}
```
