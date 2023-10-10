import React from 'react'
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderTitle>Excel Function Study with Simulator</HeaderTitle>
  )
}

const HeaderTitle = styled.h1`
  color: white;
  text-align: center;
  margin-top: 50px;
  font-family: 'Nunito';
  font-size: 4.2rem;
  font-weight: 700;
  margin-bottom: 4rem;
`