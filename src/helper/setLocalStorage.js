export function setLocalStorage(perguntasArray, respostasArray) {
  const perguntas = JSON.stringify(perguntasArray);
  const respostas = JSON.stringify(respostasArray);
  localStorage.setItem("perguntas", perguntas);
  localStorage.setItem("respostas", respostas);
}
