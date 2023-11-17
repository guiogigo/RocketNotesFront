import { Container } from "./styles";

export function Section({title, children}) {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
};//children vai pegar o que estiver diretamente dentro da tag
