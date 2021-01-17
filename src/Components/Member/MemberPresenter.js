import React, { useState, useEffect } from 'react';
import MemberItem from "./MemberItem";
import MemberForm from './MemberForm';
import { postMember } from '../../api/member';

const MemberPresenter = ({ member , monthMember, loading, error }) => {
  const [ List, setList ] = useState([]);
  const [ MonthList, setMonthList] = useState([]);
  const [newItemId, setnewItemId] = useState(0);

  useEffect(() => member && setList(member),[member])
  useEffect(() => monthMember && setMonthList(monthMember),[monthMember])

  const handleFilter = (id) => {
    const deleltItem = List.filter(item => item.id !== id);
    setList(deleltItem)
  }
  const handleMonthFilter = (id) => {
    const deleltItem = MonthList.filter(item => item.id !== id);
    setMonthList(deleltItem)
  }

  const addMember = (nameInput , phoneNumberInput) => {
    postMember(nameInput , phoneNumberInput)
    let newMember = [...List];
    newMember = [...newMember, { id: newItemId, name: nameInput, phone: phoneNumberInput }];
    setnewItemId(newItemId + 1);
    setList(newMember);
  }
  const addMonthMember = (nameInput , phoneNumberInput) => {
    postMember(nameInput , phoneNumberInput)
    let newMember = [...MonthList];
    newMember = [...newMember, { id: newItemId, name: nameInput, phone: phoneNumberInput }];
    setnewItemId(newItemId + 1);
    setMonthList(newMember);
  }
 return (
   <div>
     <div>검색 기능 ( 미구현 )</div>
     <h2> 맴버 등록 (클릭으로만 동작 되게)</h2>
     <MemberForm addMember={addMember} />
     <h2> 맴버 정보 </h2>
     <MemberItem MemberList={List} handleFilter={handleFilter} addMember={addMember} />
     <h2> 한달 된 맴버 정보 </h2>
     <MemberItem MonthMemberList={MonthList} handleFilter={handleMonthFilter} addMember={addMonthMember} />
   </div>
 );
}

export default MemberPresenter;