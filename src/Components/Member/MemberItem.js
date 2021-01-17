import React from 'react';
import { Link } from 'react-router-dom';

const MemberItem = ({MemberList, handleFilter }) => {
    return (
        <div>
            {MemberList &&
            <ul>
            {MemberList?.map( (Member) => {
                return (
                <li key={Member.phone}>
                <Link to={`member/${String(Member.phone)}`}>
                    <span>
                        {Member.name} - {Member.phone}
                    </span>
                </Link>
                    <span onClick={() => handleFilter(Member.id)} role="img" aria-label="checked">
                        🔧
                    </span>
                </li>
                )
            })}
            </ul>}
        </div>
    );
};

export default MemberItem;