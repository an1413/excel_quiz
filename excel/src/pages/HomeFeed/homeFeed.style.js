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
  background-color: #4B504B;
  color: white;
  margin-bottom: 1rem;
  width: 180px;
  height: 40px;
  border-radius: 1rem;
  font-family: 'GmarketSansMedium';
  font-size: 20px;
  &:hover {
    scale: 1.1;
  }
`

export const Img = styled.img`
  width: 240px;
  height: 240px;
`;
