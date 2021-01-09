import React from 'react'
import styled from 'styled-components';

const Flex = styled.div`
    display : flex;
    flex-direction : column;

`
const DetailReservation = () => {
    return (
        <Flex>
            <h2>상세 오더 부분</h2>
        <div>회원 전화번호</div>
        <div>회원 전화번호</div>
        <div>예약 시간</div>
        <div>예약 시간</div>
        <div>예약 종료</div>
        <div>예약 종료</div>
        <div>디자이너</div>
        <div>디자이너</div>
        <div>메뉴</div>
        <div>메뉴</div>
        <button>확인</button>
        </Flex>
    );
};

export default DetailReservation;