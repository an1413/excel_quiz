import styled from "styled-components";

export const LevelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
`

export const LevelImg = styled.div`
`

export const LevelName = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`

export const LevelButton = styled.button`
  margin-bottom: 1rem;
  width: 180px;
  height: 40px;
  border-radius: 1rem;
  &:hover {
    background-color: #05742a;
    color: #fff;
  }
`

export const Img = styled.img`
  width: 240px;
  height: 240px;
`;
