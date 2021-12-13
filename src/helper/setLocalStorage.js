export function setLocalStorage(perguntasArray, respostasArray) {
  const resultado = JSON.stringify({ perguntasArray, respostasArray });
  localStorage.setItem("relatorioQuiz", resultado);
}
