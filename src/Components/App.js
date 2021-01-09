import styled from "styled-components";
import Router from "./Router";

const Container = styled.div`
  display: flex;
`
function App() {
  return (
    <Container>
      <Router />
    </Container>
  );
}

export default App;
