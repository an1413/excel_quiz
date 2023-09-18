import React from 'react'
import styled from "styled-components";

export default function LoginBar() {
  return (
    <LoginBarWrapper>
        <LoginBarButton>로그인</LoginBarButton>
        <LoginBarButton>회원가입</LoginBarButton>
    </LoginBarWrapper>
  )
}

const LoginBarWrapper = styled.div`
  display: flex;
  gap: 1em;
  width: 240px;
  height: 40px;
  text-align: center;
  background: transparent;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
`

const LoginBarButton = styled.button`
  background-color: #fff;
  width: 100px;
  height: 24px;
`

