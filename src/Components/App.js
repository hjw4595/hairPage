import Calendar from "./Calendar"
import MemberPage from "./Member/MemberPage";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: colum;
`
function App() {
  return (
    <Container>
      <Calendar />
      <MemberPage />
    </Container>
  );
}

export default App;
