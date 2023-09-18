import React from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function LoginBar() {
  const navigate = useNavigate();

  const linkLogin = () => {
    navigate("/login");
  }

  const linkSignup = () => {
    navigate("/signup");
  }

  return (
    <LoginBarWrapper>
        <LoginBarButton onClick={linkLogin}>로그인</LoginBarButton>
        <LoginBarButton onClick={linkSignup}>회원가입</LoginBarButton>
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

