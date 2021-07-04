# Projeto desafio Capgemini

Parte 1 e a Parte 2 do desafio se encontram no mesmo repositório.

Tela de cadastro de anúncio
![image](https://user-images.githubusercontent.com/86562890/124400811-b7979a00-dcfb-11eb-9720-ac56e242d0a3.png)

Tela do relatório
![image](https://user-images.githubusercontent.com/86562890/124400827-cd0cc400-dcfb-11eb-92bb-c521ea981075.png)

## Utilização
1 - Instale o NodeJS https://nodejs.org/en/

2 - Instale o MongoDB como banco de dados https://www.mongodb.com/pt-br 

3 - Basta clonar o repositório em sua máquina local
```bash
git clone https://github.com/alessandracunha/desafiocapgemini.git
```

4 - Abra o projeto do backend em sua IDE favorita e rode o comando abaixo para instalar as dependências
```bash
npm install
```

5 - Abra o projeto do frontend em sua IDE favorita e rode o comando abaixo para instalar as dependências
```bash
npm install
```

6 - Rodar o backend com o comando abaixo
```bash
cd pasta_onde_você_clonou_o_projeto
node app.js
```

7 - Rodar o frontend com o comando abaixo
```bash
cd pasta_onde_você_clonou_o_projeto/anuncios-frontend
npm run start
```

8 - Abra o projeto em seu navegador ( [Cadastro](http://localhost:4200/cadastro-anuncio) | [Relatório](http://localhost:4200/relatorio-anuncios) )
```
http://localhost:4200
```

## Endpoints disponíveis API
- (GET) */calcularValorInvestido* | Retorna com base nos parâmetros abaixo um totalizador com os seguintes dados:
    { 
      valorTotalInvestido,
      qtdMaximaVisualizacoes,
      qtdMaximaCliques,
      qtdMaximaCompartilhamentos
    }
  - QueryString Params 
    - investimentoPorDia
    - dataInicioVigencia (MM-DD-YYYY)
    - dataFimVigencia (MM-DD-YYYY)
    
- (POST) */anuncio* | Recebe os dados do anuncio no corpo da requisição e persiste os dados no MongoDB
    {
      nome,
      cliente,
      investimentoDia,
      dataInicioVigencia,
      dataFimVigencia
    }

- (GET) */relatorio* | Retorna com base nos parâmetros abaixo um relatório com os seguintes dados:
    {
      nome,
      valorTotalInvestido,
      qtdMaximaVisualizacoes,
      qtdMaximaCliques,
      qtdMaximaCompartilhamentos
    }
  - QueryString Params 
    - cliente
    - dataInicioVigencia (MM-DD-YYYY)
    - dataFimVigencia (MM-DD-YYYY)
