import { String } from "../components";

const Opcao = ({ children, cor }) => (
  <String
    sx={{
      border: `3px solid ${cor}`,
      backgroundColor: `${cor}10`,
      padding: "12px 4px",
      borderRadius: "4px",
      margin: "8px 0",
      color: "#000",
    }}
  >
    {children}
  </String>
);

export default Opcao;
