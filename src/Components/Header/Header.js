import React from "react";
import { Link, withRouter } from "react-router-dom"
import styled from "styled-components";

export default withRouter(({ location: { pathname } }) => (
    <div>
      <ul>
        <li >
          <Link to="/">월 예상 수입</Link>
        </li>
        <li>
          <Link to="/member">회원 확인 및 예약</Link>
        </li>
      </ul>
    </div>
  )
  )