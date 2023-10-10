import React from 'react'
import styled from "styled-components";
import { useHistory, useLocation } from 'react-router-dom';
import Swal from "sweetalert2";

export default function Reset() {
  const location = useLocation();

  let thisLevel;
  const stageReset = () => {
    if (location.pathname === '/intern') {
      thisLevel = "intern"
    }
    else if (location.pathname === "/beginner") {
      thisLevel = "begin"
    }
    else if (location.pathname === "/expert") {
      thisLevel = "expert"
    }
    Swal.fire({
      title: '처음부터 다시 푸시겠어요?',
      text: "다시 돌아갈 수 없습니다.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '처음으로 돌아갈게요'
      }).then((result) => {
        if (result.isConfirmed) {
    Swal.fire(
      '처리 완료되었습니다',
      '첫번째 문제로 돌아갑니다.',
      '완료'
    )
  }
})
    localStorage.setItem(`stage_${thisLevel}`, 1);
  }
  // 모달창 뜨게 만들기


  return (
    <Button onClick={stageReset}>처음부터 문제풀기</Button>
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