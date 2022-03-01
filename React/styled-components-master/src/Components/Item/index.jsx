import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-around;

  .type{
    font-weight: bold; 
  }
`

export default ({type, from, value})=>{
  return(
    <Item>
      <span className="type">{type}</span>
      <span>{from}</span>
      <span>{value}</span>
    </Item>
  )
}