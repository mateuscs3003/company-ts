# Cadastro de empresas

Este é um projeto de back-end construído com TypeScript, utilizando Express para fazer o roteamento. Tem a finalidade de armazenar dados em uma instância de MySQL as informações com a biblioteca [TypeORM](https://typeorm.io/). O código foi feito de maneira mais simplória, passível de refatoração para melhores aplicações de práticas ao praticar com essa biblioteca.
Utilizando a biblioteca 'class-validator', é possível validar os dados conforme mostrado até mesmo na própria biblioteca da TypeORM, utilizada para determinar algumas regras, principalmente com a anotação sobre o e-mail.

Abaixo, seguem as rotas que são possíveis de utilizar ao chamar a API e estiver com as devidas conexões (necessário, uma instância de banco MySQL).

## Rotas

* POST — "/company" — Cadastra uma empresa no banco de dados;
* GET — "/companies" — Retorna um array com objetos de todas as empresas cadastradas no banco;
* GET — "/company/:cnpj" — Retorna um array com um objeto de uma única empresa;
* PUT — "/company/:cnpj" — Atualiza um ou mais campos no banco de dados;
* DELETE — "/company/:cnpj" — Deleta uma empresa em específico do banco buscando pelo CNPJ.