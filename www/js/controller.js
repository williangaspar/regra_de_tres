var intervalValidar = null;
var intervalSalvarDados = null;
document.addEventListener('deviceready', function () {

	//tenta calcular o resutado a cada 300ms
  intervalValidar = setInterval(validar, 300);
  
  //salva os dados dos campos a cada 400ms
  intervalSalvarDados = setInterval(salvarDados, 400);
  
  //Liga os eventos
  document.getElementById("link").addEventListener('click', openLink);
  document.getElementById("limpar").addEventListener('click', limpar);
  document.getElementById("sair").addEventListener('click', sair);
});

var storage = window.localStorage;

//Carrega os dados da execução anterior
var data = JSON.parse(storage.getItem("data")) || [];
for (var i = 1; i < 5; i++) {
  document.getElementById("n"+i).value = data[i-1] || "";
}
document.getElementById("resultado").innerHTML = "R: " + (data[4] || "");

//Inicia dialog-polyfill. (ver a tag <dialog> no index.html)
(function() {
  'use strict';
  var dialogButton = document.querySelector('.dialog-button');
  var dialog = document.querySelector('#dialog');
  if (! dialog.showModal) {
     dialogPolyfill.registerDialog(dialog);
  }
  dialogButton.addEventListener('click', function() {
     dialog.showModal();
  });
  dialog.querySelector('button:not([disabled])')
  .addEventListener('click', function() {
    dialog.close();
  });
}());

function validar (){
  var count = 0;
  for (var i = 1; i < 5; i++) {
    if (document.getElementById("n"+i).value){
      count++;
    }
  }
  count >= 3 ? calcular() : resetar();
}

function calcular(){
  var list = [];
  for (var i = 1; i < 5; i++) {
    list.push(document.getElementById("n"+i).value);
  }

  var resultado = regra(list);
  document.getElementById("resultado").innerHTML = "R: " + resultado;
  list.push(resultado || "");
}

function salvarDados(){
	var list = [];
  for (var i = 1; i < 5; i++) {
    list.push(document.getElementById("n"+i).value);
  }

  storage.setItem("data", JSON.stringify(list))
}

function resetar(){
  document.getElementById("resultado").innerHTML = "R: ";
}

function limpar(){
  for (var i = 1; i < 5; i++) {
    document.getElementById("n"+i).value = "";
  }
  resetar();
  storage.removeItem("data");
}

function sair(){
  clearInterval(intervalValidar);
  navigator.app.exitApp();
}

function openLink(){
  window.open('https://www.facebook.com/williamGasparApps', '_system');
}
