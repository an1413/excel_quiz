import React from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Back() {
  const navigate = useNavigate();


  return (
    <BackButton onClick={() => navigate(-1)}>Back</BackButton>
  )
}

const BackButton = styled.button`
  font-size: 15px;
  width: 80px;
  background-color: #d7cec7;
  color: #000;
  font-family: 'GmarketSansMedium';
  padding: 2px;
  border-radius: 4px;
  &:hover {
    background-color: #998066;
    color: white;
  }
`