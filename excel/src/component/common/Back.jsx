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
  width: 62px;
  border-radius: 4px;
  padding: 2px;
  &:hover {
    background-color: #05742a;
    color: #fff;
  }
`