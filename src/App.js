import { Container } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { Header, Wrapper } from "./components";

import { setLocalStorage } from "./helper/setLocalStorage";
import { setLocalScore } from "./helper/setLocalScore";
import { getLocalStorage } from "./helper/getLocalStorage";

import Form from "./InitialForm";
import { StartQuiz } from "./startQuiz";
import { Questao } from "./questao";
import { Resultado } from "./resultado";
import { ReviewRelatorio } from "./reviewRelatorio";

function App() {
  const {
    numeroPerguntas,
    data,
    setData,
    respostas,
    setRespostas,
    setDataLocalStorage,
    dataLocalStorage,
  } = useContext(GlobalContext);
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [visualizarUltimoQuiz, setVisualizarUltimoQuiz] = useState(false);

  useEffect(() => {
    getLocalStorage(setDataLocalStorage);
  }, [setDataLocalStorage]);

  const handleClickUltimoQuiz = () => {
    const { perguntasArray, respostasArray } = dataLocalStorage;

    setData(perguntasArray);
    setRespostas(respostasArray);
    setVisualizarUltimoQuiz(true);
  };

  const exibirUltimoQuiz = () => {
    if (data || numeroPerguntas) {
      return null;
    }
    if (dataLocalStorage) {
      return <ReviewRelatorio onClick={() => handleClickUltimoQuiz()} />;
    }
  };

  const exibirConteudo = () => {
    if (numeroPerguntas === perguntaAtual || visualizarUltimoQuiz) {
      if (!visualizarUltimoQuiz) {
        setLocalStorage(data, respostas);
        setLocalScore(
          respostas.filter((x, i) => x === data[i].correct_answer).length,
          numeroPerguntas,
        );
      }

      return data.map((_, i) => (
        <Resultado key={`Resulta pergunta - ${i + 1}`} index={i} />
      ));
    }

    if (data) {
      return data.map((questao, i) => (
        <Questao
          key={`Questao: ${i}`}
          dados={questao}
          index={i}
          setPerguntaAtual={setPerguntaAtual}
          perguntaAtual={perguntaAtual}
        />
      ));
    }

    return numeroPerguntas ? <StartQuiz /> : <Form />;
  };

  return (
    <Container maxWidth={"sm"}>
      <Header />
      <Wrapper>
        {exibirUltimoQuiz()}
        {exibirConteudo()}
      </Wrapper>
    </Container>
  );
}

export default App;
