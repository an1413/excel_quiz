import React from 'react';
import styled from "styled-components";
import Swal from "sweetalert2";

export default function NextProb({ onNext }) {
  const handle_next = () => {
        onNext(); // 다음 스테이지로 이동
  };

  return <NextButton onClick={handle_next}>다음 문제</NextButton>;
}

const NextButton = styled.button`
  font-size: 15px;
  font-family: 'GmarketSansMedium';
  width: 82px;
  border-radius: 4px;
  padding: 2px;
  &:hover {
    background-color: #4B504B;
    color: #fff;
  }
`;