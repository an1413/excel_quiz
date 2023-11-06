import React from 'react';
import styled from "styled-components";
import Swal from "sweetalert2";

export default function PrevProb({ onPrev }) {
  const handle_prev = () => {
        onPrev(); // 이전 스테이지로 이동
  };

  return <PrevButton onClick={handle_prev}>이전 문제</PrevButton>;
}

const PrevButton = styled.button`
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