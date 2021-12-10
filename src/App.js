import { Container } from "@mui/material";
import { Header, Wrapper, Typography } from "./components";
import Form from "./InitialForm";

function App() {
  return (
    <Container maxWidth={"sm"}>
      <Header />
      <Wrapper>
        <Typography variant="body1">
          Quantas perguntas deseja responder?
        </Typography>
        <Form />
      </Wrapper>
    </Container>
  );
}

export default App;
