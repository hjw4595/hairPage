import React from "react";
import styled from "styled-components";

const DesignerPresenter = ({ result, loading, error }) => (
    <div>
      <h2> 디자이너 목록 관리</h2>
      {result &&
      <ul>{result.map((item, index) => {
        return <li key={index}>{item.name} : {item.price}</li>
      })}</ul>
      }
    </div>    
)


export default DesignerPresenter;