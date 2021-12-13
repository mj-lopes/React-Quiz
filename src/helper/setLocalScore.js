export function setLocalScore(score) {
  const scoreSalvo = Number(localStorage.getItem("pontos"));
  const pts = scoreSalvo + score;
  localStorage.setItem("pontos", pts);
}
