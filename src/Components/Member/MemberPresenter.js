import React, { useState, useEffect } from 'react';
import MemberItem from "./MemberItem";
import MemberForm from './MemberForm';
import { postMember } from '../../api/member';

const MemberPresenter = ({ result, loading, error }) => {
  const [ List, setList ] = useState([]);
  const [newItemId, setnewItemId] = useState(0);

  useEffect(() => result && setList(result),[result])

  const handleFilter = (id) => {
    const deleltItem = List.filter(item => item.id !== id);
    setList(deleltItem)
  }

  const addMember = (nameInput , phoneNumberInput) => {
    postMember(nameInput , phoneNumberInput)
    let newMember = [...List];
    newMember = [...newMember, { id: newItemId, name: nameInput, phone: phoneNumberInput }];
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

export default MemberPresenter;