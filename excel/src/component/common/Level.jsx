import React from 'react'
import styled from "styled-components";
import newbie from "../../img/newbie.png";

export default function Level({levelImg, name}) {
  return (
    <LevelContainer>
      <LevelImg/>
      <LevelName/>
      <LevelButton/>
    </LevelContainer>
  )
}

const LevelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const LevelImg = styled.div`
`

const LevelName = styled.div`

`

const LevelButton = styled.div`
`