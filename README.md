

<h1 align="center">Facebook SDK Challenge</h1>

![issues](https://img.shields.io/github/issues/caroolt/facebookSDKChallenge?color=red) ![license](https://img.shields.io/github/license/caroolt/facebookSDKChallenge)

<!-- Imagem que representa o que o projeto faz-->
![Imagem do facebook](./img/readme.png)

## Index
  1. [Descrição do Projeto](#descrição)
  2. [Técnicas e Tecnologias](#tecnologias)
  3. [Abrir e executar o projeto](#executar_o_projeto)
  4. [Pessoas que ajudaram a desenvolver o projecto](#developers)
  5. [English Readme](./READMEEnglish.md)

### Descrição do Projeto 
###### descrição
Nesse desafio eu deveria puxar alguns dados do MongoDB e da Facebook API (usando a sdk Node ou python);

Era necessário que eu puxasse estas informações:
1 - Dados do user: Email, Nome, Telefone, Nome do Plano (hint: user.hormart), Vencimento do Plano (hint: user.hormart).
2 - Data de criação do user (document) e data da última atualização do document.
3 - Total de Campanhas ATIVAS que foram criadas de 01/01/2021 até hoje (hint: Pegar a Data que a campanha iniciou (`start_time`) e terminou (`stop_time`, se existir) para ai sim, pegar as métricas desse intervalo).

Dados da Facebook API:
- AdAccounts: Identificador, Nome, Status, Total Gasto, Campanhas 
- Campanhas: Identificador, Nome, Status, Actions (link_clicks), Conjuntos
- Conjuntos: Identificador, Nome, Status, Anúncios
- Anúncios: Identificador, Nome, Status
- Insights: Impressões, Alcance, Clicks, Conversões
<br>
</br>

### Técnicas e Tecnologias
###### tecnologias
- Node.js
- Typescript 
- Nodemon
- Express
- MongoDB
- dotenv
- eslint
<br>
</br>

## 🛠️ Abrir e executar o projeto
###### executar_o_projeto
#### 1- Clone o Projeto

#### 2- Editar o file .env.example => .env

#### 3- Instale todas as dependências
   `npm install`
   
#### 4- Execute o projeto 
   `npm run start`

#### 5- Caso queira debuggar
`npm run debug`
 e rode junto o debugger para o nodemon.

#### 6- Etapa não obrigatória
   - Na pasta insomnia há um json com os métodos e rotas a serem testados. Para utilizá-los no insmonia basta importar o json e pronto. (funciona com o postman e no thunder client também)
   
   _Insomnia é uma ferramenta cliente REST API, como o Postman, mas tem algumas características adicionais, tais como suporte GraphQL, gRPC, e outras._

## Desenvolvedora do projeto
###### developers
| [<img src="https://avatars.githubusercontent.com/u/82682093?s=400&u=0a46c06b6a1ae04f7acf2f2162187b1a7e4d5d53&v=4" width=115><br><sub>Carolina Teixeira Coelho</sub>](https://github.com/caroolt) | 
| :---: |
