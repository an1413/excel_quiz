import styled from "styled-components";

export const TestWrapper = styled.div`
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
  background-color: #f5f3f0;
  text-align: left;
  font-size: 1.2rem;
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
  font-size: 15px;
  font-family: 'GmarketSansMedium';
  background-color: black;
  color: white;
  width: 5rem;
  height: 40px;
  border-radius: 4px;
  &:hover {
    background-color: #4B504B;
    color: #fff;
  }
`;

export const TestAnswer = styled.div`
  font-size: 2rem;
  background-color: #ddd;
`;

export const TestHintStrong = styled.div`
  font-size: 1.5rem;
`

export const TestHint = styled.div`
  width: 400px;
  height: 300px;
`;

export const HintImage = styled.img`
  text-align: center;
  width: 400px;
  height: 400px;
  /* width: 140%;
  height: 140%;
  margin-left: 9.5rem; */
`;

export const ButtonWrapper = styled.div`
  display:flex;
  gap: 1rem;
`