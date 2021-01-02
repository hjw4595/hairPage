import React from 'react';

const MemberItem = ({MemberList, handleFilter}) => {
    return (
        <div>{MemberList &&
            <ul>
            {MemberList?.map( (Member,index) => {
                return (
                <li key={index}>
                    <span>
                        {Member.name} - {Member.phone}
                    </span>
                    <span onClick={() => handleFilter(Member.id)} role="img" aria-label="checked">
                        ❌
                    </span>
                </li>
                )
            })}
            </ul>}
        </div>
    );
};

export default MemberItem;