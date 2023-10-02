import styled from "styled-components";

export const InternWrapper = styled.div`
  padding: 2rem;
`;

export const QuestionDiv = styled.div`
  text-align: left;
`;

export const QuestionH1 = styled.h1`
  margin-top: 2rem;
  text-align: left;
`;

export const QuestionP = styled.p`
  background-color: #ddd;
  text-align: left;
`;

export const AnswerForm = styled.form`
  /* display: flex; */
  text-align: left;
`

export const AnswerInput = styled.input`
  width: 80%;
  height: 80px;
  margin-right: 2rem;
`;

export const AnswerButton = styled.button`
  width: 4.7rem;
  height: 40px;
  border-radius: 4px;
  &:hover {
    background-color: #05742a;
    color: #fff;
  }
`;

export const InternAnswer = styled.div`
  font-size: 2rem;
  background-color: #ddd;
  /* margin-bottom: 2px; */
`;

export const InternHintStrong = styled.div`
  font-size: 1.3rem;
  /* margin-bottom: 1rem; */
`

export const InternHint = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  width: 300px;
  height: 300px;
`;

export const HintImage = styled.img`
  text-align: center;
  width: 300px;
  height: 300px;
`;

export const ButtonWrapper = styled.div`
  display:flex;
  gap: 1rem;
`