import React from 'react'
import styled from "styled-components";
import Swal from "sweetalert2";

export default function Hint() {

  const hintView = () => {
    Swal.fire(
        '처리 완료되었습니다',
        '첫번째 문제로 돌아갑니다.',
        '완료'
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