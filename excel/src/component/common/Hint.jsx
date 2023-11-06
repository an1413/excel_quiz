import React from 'react'
import styled from "styled-components";
import Swal from "sweetalert2";

export default function Hint({hint}) {

  const hintView = () => {
    Swal.fire(
        '힌트',
        `${hint}`
      )
  }

  return (
    <Button onClick={hintView}>힌트</Button>
  )
}

const Button = styled.button`
  font-size: 15px;
  width: 50px;
  font-family: 'GmarketSansMedium';
  padding: 2px;
  border-radius: 4px;
  &:hover {
    background-color: #4B504B;
    color: #fff;
  }
`