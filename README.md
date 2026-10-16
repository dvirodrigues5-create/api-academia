# Relatório - Academia Escolar API

## Grupo
- Ávilla Ester
- Davi Rodrigues
- Isabela Duarte
- Lara Aline
- Maria Eduarda
- Maria Elisângela

## Introdução
O projeto tem como objetivo ajudar na organização das inscrições dos alunos nas atividades oferecidas pela escola. A proposta surgiu da necessidade de facilitar o controle das turmas, dos horários, das vagas disponíveis e dos alunos inscritos.

## Objetivo
O objetivo é desenvolver uma API que permita cadastrar e consultar usuários, modalidades, turmas e inscrições. A ideia é tornar esse processo mais organizado e diminuir problemas como inscrições duplicadas e turmas com mais alunos do que o permitido.

## Tecnologias utilizadas
- Node.js: utilizado para executar o JavaScript no ambiente dos servidor.
- Express: utilizado para organizar as rotas e as requisições da API.
- SQLite: banco de daos utilizado para armazenar as informações.
- Knex: utilizado para trabalhar com o banco de dados, incluindo a criação das tabelas por meio de migrations.
- Visual Studio Code: editor utilizado para desenvolver o projeto.

## Organização do projeto
O projeto foi divido em pastas para separar as responsabilidades de cada parte da aplpicação.

A pasta controllers possui arquivos relacionados ao controle das requisições de usuários, modalidades, turmas e inscrições.

A pasta infra/database contém as migrations, utilizadas para criar as tabelas do banco de dados, e os seeds, que servem para inserir dados iniciais.

A pasta repositories reúne os arquivos relacionados ao acesso aos dados do banco. Já a pasta routes contém os arquivos responsáveis pela organização das rotas da API.

Também existem os arquivos knexfile.js, utilizado na configuração do Knex, .gitignore, que indica quais arquivos devem ser ignorados pelo Git, e README.md, destinado às informações e instruções do projeto.

## Banco de dados
O banco de dados foi planejado para trabalhar com quatro tabelas principais:

- Usuários: armazena informações dos alunos
- Modalidades: registra as atividades físicas oferecidas.
- Turmas: contém informações sobre os dias, horários, professores e quantidade de vagas.
- Inscrições: relaciona os usuários às turmas em que estão inscritos.

Essas tabelas permitem relacionar os alunos às atividades e acompanhar as incrições realizadas.

## Funcionalidades previstas
A API foi planejada para permitir o cadastro, a consulta, a atualização e a exclusão de usuários, modalidades e turmas. Também estão previstas funcionalidades para realizar e consultar inscrições, cancelar inscrições e consultar informções sobre a ocupação das turmas.

Entre as regras de negócio previstas estão: impedir inscrições duplicadas, evitar que o número de alunos ultrapasse a quantidade de vagas e verificar se existem inscrições ativas antes de permitir determinadas exclusões.

## Conclusão
Com o desenvolvimento do projeto, conseguimos criar uma API para ajudar na organização das atividades físicas da escola. O sistema facilita o controle dos alunos, das turmas, das vagas e das inscrições, tornando esse processo mais organizado. Além disso, o projeto nos ajudou a colocar em prática os conhecimentos sobre Node.js, Express, SQLite e Knex, além de aprender mais sobre o desenvolvimento de uma API.
