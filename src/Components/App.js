import Calendar from "./Calendar"
import MemberPage from "./Member";
import styled from "styled-components";
import HairList from "./hairList";

const Container = styled.div`
  display: flex;
`
function App() {
  return (
    <Container>
      <Calendar />
      <MemberPage />
      <HairList />
    </Container>
  );
}

export default App;
