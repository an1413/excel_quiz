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
  background-color: black;
  color: white;
  font-family: 'GmarketSansMedium';
  padding: 2px;
  border-radius: 4px;
  &:hover {
    background-color: #4B504B;
    color: #fff;
  }
`