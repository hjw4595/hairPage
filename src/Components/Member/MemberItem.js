import React from 'react';

const MemberItem = ({MemberList, handleFilter}) => {
    return (
        <div>
            <ul>
            {MemberList.map(Member => 
                <li key={Member.id}>
                    <>
                    <span>
                        {Member.name} -
                        {Member.phoneNumber}
                    </span>
                    <span onClick={() => handleFilter(Member.id)} role="img" aria-label="checked">
                        ❌
                    </span>
                    </>
                </li>
            )}
            </ul>
        </div>
    );
};

export default MemberItem;