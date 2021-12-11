import { Container } from "@mui/material";
import { useContext } from "react";
import { Header, Wrapper } from "./components";
import Form from "./InitialForm";
import { StartQuiz } from "./startQuiz";
import { GlobalContext } from "./GlobalContext";

function App() {
  const { numeroPerguntas } = useContext(GlobalContext);

  return (
    <Container maxWidth={"sm"}>
      <Header />
      <Wrapper>{numeroPerguntas ? <StartQuiz /> : <Form />}</Wrapper>
    </Container>
  );
}

export default App;
