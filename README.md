<h1 align="center">💻 Pet Feeder 💻 </h1>
<p align="center">🚀 Trabalho de DESENVOLVIMENTO DE SISTEMAS MÓVEIS E EMBARCADOS - INE5670 🚀</p>
<p align="center">
 <a href="#tecnologias">Tecnologia</a> • 
 <a href="#autor">Autores</a> •
  <a href="#comorodar">Como Rodar</a>
</p>

<h1 align="center"> 
  Status do projeto
</h1>
<h4 align="center"> 🚀 Concluído 🚀 </h4>

### Tecnologia

O trabalho foi desenvolvido utilizando a linguagem Javascript com Node.js e os frameworks Express.js e Sequelize como ORM.

### Autores

Os autores do projeto são Diovana Rodrigues Valim e Gabriel Aristeu Cabral, graduandos da quarta fase de Sistemas de Informação na Universidade Federal de Santa Catarina. O trabalho foi desenvolvido para avaliação na disciplina INE5670 - Desenvolvimento de sistemas móveis e embarcados.

### Como Rodar

Para rodar o código, é necessário ter instalado em seu computador o Node.js, disponível no site https://nodejs.org/en/ e uma instância Postgres, disponível no site https://www.postgresql.org/. Após instalar o node e o gerenciador de pacotes javascript NPM, é necessário instalar as dependências do projeto:

- npm install

Depois de concluir esta instalação, é necessário criar a base de dados:

- npx sequelize db:create
- npx sequelize db:migrate
- npx sequelize db:seed:all

Finalmente, para colocar o servidor no ar:

- npm start
