import React from 'react';

import TimeReservation from './TimeReservation';
import DetailReservation from './DetailReservation';

import { Link } from 'react-router-dom';
const ReservationPresenter = (props) => {
    console.log(props)
    return (
        <>
        <h2> 주문 페이지 </h2>
            <TimeReservation />
            <DetailReservation />
            <Link to="/week"> 확인 버튼 동작</Link>
        </>
    );
};

export default ReservationPresenter;