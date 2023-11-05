import React from 'react'
import styled from "styled-components";

export default function Record({test}) {
  return (
    <RecordWrapper>문제 진행도 {test}/15 </RecordWrapper>
  )
}

const RecordWrapper = styled.div`
`