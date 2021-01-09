import React from 'react'
import { Link } from 'react-router-dom';
import Calendar from './Calendar';

const MainPage = () => {
    return (
        <div>
            <ul>
                <li><Link to="/week">예약 확인</Link></li>
            </ul>
            <div><Calendar /></div>
        </div>

    );
};

export default MainPage;