import React from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import MainPage from './MainPage';
import Header from './Header';
import WeekCalendar from './WeekCalendar';

import Member from './Member';
import MemberDetail from './Member/Detail';
import Reservation from './Member/Reservation';

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>  (
    <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/member" component={Member}/>
                <Route exact path="/week" component={WeekCalendar}/>
                <Route path="/order" component={Reservation} />
            </Switch>
            <Route path={"/member/:id"} component={MemberDetail} />
    </Router>
)
