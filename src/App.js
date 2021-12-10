import { Container } from "@mui/material";
import { useContext } from "react";
import { Header, Wrapper } from "./components";
import Form from "./InitialForm";
import StarQuiz from "./starQuiz";
import { GlobalContext } from "./GlobalContext";

function App() {
  const { numeroPerguntas } = useContext(GlobalContext);

  return (
    <Container maxWidth={"sm"}>
      <Header />
      <Wrapper>{numeroPerguntas ? <StarQuiz /> : <Form />}</Wrapper>
    </Container>
  );
}

export default App;
