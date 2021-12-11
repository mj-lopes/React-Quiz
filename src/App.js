import { Container } from "@mui/material";
import { useContext, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { Header, Wrapper } from "./components";
import Form from "./InitialForm";
import { StartQuiz } from "./startQuiz";
import { Questao } from "./questao";

function App() {
  const { numeroPerguntas, data } = useContext(GlobalContext);
  const [perguntaAtual, setPerguntaAtual] = useState(0);

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
