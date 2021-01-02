import React  from "react";
import styled from "styled-components";
import List from "./MemberList";

const Container = styled.div`
    margin-left: 10px;
    flex-direction: column;
`

class MemberList extends React.Component  {
    render(){
      return (
        <Container>
          <List />
        </Container>
        )
    }
}

export default MemberList