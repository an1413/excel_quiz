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
    <Button onClick={hintView}>힌트보기</Button>
  )
}

const Button = styled.button`
  width: 150px;
  padding: 2px;
  border-radius: 4px;
  &:hover {
    background-color: #05742a;
    color: #fff;
  }
`