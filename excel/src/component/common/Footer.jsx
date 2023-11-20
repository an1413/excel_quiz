import React from 'react'
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterItem>
        Footer 입니다.
      </FooterItem>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const FooterItem = styled.div`
  margin-top: auto;
`