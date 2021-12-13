import { Container } from "@mui/material";
import { useContext, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { setLocalStorage } from "./helper/setLocalStorage";
import { setLocalScore } from "./helper/setLocalScore";
import { Header, Wrapper } from "./components";

import Form from "./InitialForm";
import { StartQuiz } from "./startQuiz";
import { Questao } from "./questao";
import { Resultado } from "./resultado";

function App() {
  const { numeroPerguntas, data, respostas } = useContext(GlobalContext);
  const [perguntaAtual, setPerguntaAtual] = useState(0);

  if (numeroPerguntas === perguntaAtual) {
    setLocalStorage(data, respostas);
    setLocalScore(
      respostas.filter((x, i) => x === data[i].correct_answer).length,
    );

    return (
      <Container maxWidth={"sm"}>
        <Header />
        <Wrapper>
          {data.map((_, i) => (
            <Resultado key={`Resulta pergunta - ${i + 1}`} index={i} />
          ))}
        </Wrapper>
      </Container>
    );
  }

  if (data) {
    return (
      <Container maxWidth={"sm"}>
        <Header />
        <Wrapper>
          {data.map((questao, i) => (
            <Questao
              key={`Questao: ${i}`}
              dados={questao}
              index={i}
              setPerguntaAtual={setPerguntaAtual}
              perguntaAtual={perguntaAtual}
            />
          ))}
        </Wrapper>
      </Container>
    );
  }

  return (
    <Container maxWidth={"sm"}>
      <Header />
      <Wrapper>{numeroPerguntas ? <StartQuiz /> : <Form />}</Wrapper>
    </Container>
  );
}

export default App;
