import React, { useState } from 'react';
import MemberItem from "./MemberItem";
import MemberForm from './MemberForm';

const data = [
    {
        "id" : 9999,
        "name" : "asd",
        "phoneNumber" : "010"
    }
]

function MemberList() {
  const [ List, setList ] = useState(data);
  const [newItemId, setnewItemId] = useState(0);

  const handleFilter = (id) => {
    console.log(id)
    const deleltItem = List.filter(item => item.id !== id);
    setList(deleltItem)
  }

  const addMember = (nameInput , phoneNumberInput) => {
    let newMember = [...List];
    newMember = [...newMember, { id: newItemId, name: nameInput, phoneNumber: phoneNumberInput }];
    setnewItemId(newItemId + 1);
    setList(newMember);
  }

 return (
   <div>
     <MemberForm addMember={addMember} />
     <MemberItem MemberList={List} handleFilter={handleFilter} addMember={addMember} />
   </div>
 );
}
 
export default MemberList;