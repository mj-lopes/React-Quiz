export function getLocalStorage(setDataLocalStorage) {
  const relatorioQuiz = localStorage.getItem("relatorioQuiz");
  if (relatorioQuiz) {
    setDataLocalStorage(JSON.parse(relatorioQuiz));
  }
}
