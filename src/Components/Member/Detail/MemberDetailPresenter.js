import React from "react";

import PreviousOrder from './PreviousOrder';
import MemberShip from './MemberShip/Info'
import { Link } from 'react-router-dom';

const MemberDetailPresenter = () => {
    return <div>
      <h2> 회원 상세 정보 페이지</h2>
      <div>전화번호</div>
      <div>가입일자</div>

      <PreviousOrder />
      <MemberShip />
      <Link to="/order"> 주문 페이지로 -> </Link>
    </div>;
  };

export default MemberDetailPresenter;