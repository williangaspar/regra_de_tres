# Regra de três
Este exemplo tem como objetivo apresentar uma aplicação Cordova com testes unitários.

## Instalação
Digite no terminal:

```
npm install
npm add platform android
``` 
Além do android é possível adicionar outras plataformas.

### Teste unitário
Os testes são feitos em Jasmine e podem ser encontrados na pasta spec. Para executar a bateria de testes basta digitar:
```
npm test
```
ou
```
npm run test
```

### Executar a aplicação

A aplicação pode ser executada em um smartfone físico, virtual ou no navegador.
```
cordova run [plataforma]
```
Para executar em seu navegador o comando é:

```
cordova run browser
```
Caso não possua o navegador Google Chrome instalado você pode especificar o navegador presente: 
```
cordova run browser target=firefox
```

Para rodar aplicação direto no Android: 

```
cordova run android
```

### O projeto foi desenvolvido com:

* [Apache Cordova](https://cordova.apache.org/) - Framework para o desenvolvimento da aplicação
* [Jasmine](https://jasmine.github.io/) - Framework utilizado para testes unitários
* [Material Design Lite](https://getmdl.io/) - Material design


