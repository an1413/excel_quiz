import styled from "styled-components";

export const ExpertWrapper = styled.div`
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
  font-size: 1.1rem;
`;

export const AnswerForm = styled.form`
  text-align: left;
`

export const AnswerInput = styled.input`
  width: 80%;
  height: 80px;
  margin-right: 2rem;
`;

export const AnswerButton = styled.button`
  width: 5rem;
  height: 40px;
  border-radius: 4px;
  &:hover {
    background-color: #05742a;
    color: #fff;
  }
`;

export const ExpertAnswer = styled.div`
  font-size: 2rem;
  background-color: #ddd;
`;

export const ExpertHintStrong = styled.div`
  font-size: 1.5rem;
`

export const ExpertHint = styled.div`
  width: 400px;
  height: 300px;
`;

export const HintImage = styled.img`
  text-align: center;
  width: 700px;
  height: 400px;
  object-fit: contain;
`;

export const ButtonWrapper = styled.div`
  display:flex;
  gap: 1rem;
`