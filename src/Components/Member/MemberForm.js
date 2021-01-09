import React, { useState } from 'react';
import styled from "styled-components";

const MemberForm = ({ addMember }) => {
    const [ nameInput, setNameInput ] = useState('');
    const [ phoneNumberInput, setPhoneNumberInput ] = useState('');

    const handleChangeName = (e) => {
        setNameInput(e.currentTarget.value)
    }
    
    const handleChangePhone = (e) => {
        setPhoneNumberInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addMember(nameInput , phoneNumberInput);
        setNameInput("");
        setPhoneNumberInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={nameInput} type="text" onChange={handleChangeName} placeholder="이름 입력"/>
            <input value={phoneNumberInput} type="text" onChange={handleChangePhone} placeholder="핸드폰 번호"/>
            <button>Submit</button>
        </form>
    );
};

export default MemberForm;