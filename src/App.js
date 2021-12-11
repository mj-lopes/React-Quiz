import { Container } from "@mui/material";
import { useContext } from "react";
import { Header, Wrapper } from "./components";
import Form from "./InitialForm";
import { StartQuiz } from "./startQuiz";
import { GlobalContext } from "./GlobalContext";
import { Questao } from "./questao";

function App() {
  const { numeroPerguntas, data } = useContext(GlobalContext);

  if (data) {
    return (
      <Container maxWidth={"sm"}>
        <Header />
        <Wrapper>
          {data.map((questao) => (
            <Questao key={`Questao: ${questao.question}`} dados={questao} />
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
