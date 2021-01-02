import React from "react";
import styled from "styled-components";

const HairListPresenter = ({ result, loading, error }) => (
    <div>
      {result &&
      <ul>{result.map((item, index) => {
        return <li key={index}>{item.name} : {item.price}</li>
      })}</ul>
      }
    </div>    
)


export default HairListPresenter;