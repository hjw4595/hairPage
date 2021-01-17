import React from 'react'
import { Link } from 'react-router-dom';
import Calendar from './Calendar';
import HairList from './hairList';
import Designer from './designer'
const MainPage = () => {
    return (
        <div>
            <Link to="/week">예약 확인</Link>
            <Calendar />
            <HairList />
            <Designer />
        </div>

    );
};

export default MainPage;