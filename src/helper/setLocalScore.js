export function setLocalScore(quantidadeAcertos, quantidadePerguntas) {
  const pontuacao = `${quantidadeAcertos}/${quantidadePerguntas}`;
  localStorage.setItem("pontos", pontuacao);
}
