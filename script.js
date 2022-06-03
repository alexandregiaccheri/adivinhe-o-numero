"use strict";

const calcularSegredo = () => Math.floor(Math.random() * 20 + 1);
const display = document.querySelector(".numero");
const highscore = document.querySelector(".hscore");
const resposta = document.querySelector(".resposta");
const score = document.querySelector(".score");
const tentativa = document.querySelector("input");
let segredo = calcularSegredo();
let scoreValor = 20;
let highscoreValor = 0;

document.querySelector(".confirmar").addEventListener("click", function () {
  const entrada = Number(tentativa.value);
  if (!entrada || entrada < 1 || entrada > 20) {
    resposta.textContent = "❌ Número inválido!";
  } else if (entrada === segredo) {
    resposta.textContent = "🏅 Você acertou!";
    display.textContent = entrada;
    document.body.classList.add("acertou");
    if (highscoreValor < scoreValor) {
      highscoreValor = scoreValor;
      highscore.textContent = highscoreValor;
    }
  } else if (scoreValor > 1) {
    entrada > segredo
      ? (resposta.textContent = "🔻 Número muito alto! 🔻")
      : (resposta.textContent = "🔺 Número muito baixo! 🔺");
    scoreValor--;
    score.textContent = scoreValor;
  } else {
    resposta.textContent = "❌ Você perdeu :(";
    score.textContent = 0;
  }
});

document.querySelector(".reiniciar").addEventListener("click", function () {
  document.body.classList.remove("acertou");
  scoreValor = 20;
  segredo = calcularSegredo();
  display.textContent = "?";
  resposta.textContent = "🎯 Escolha um número...";
  score.textContent = scoreValor;
  tentativa.value = "";
});
