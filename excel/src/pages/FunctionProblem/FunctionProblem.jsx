import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { ExpertWrapper, QuestionDiv, ExpertAnswer, ExpertHint, HintImage, QuestionH1, QuestionP, AnswerInput, AnswerButton, ExpertHintStrong, ButtonWrapper, AnswerForm } from '../Expert/expert.style';
import { useNavigate } from 'react-router-dom';

export const FunctionProblem = () => {
  const navigate = useNavigate();
  const selectedFunctionData = JSON.parse(localStorage.getItem('selectedFunctionData'));
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (!selectedFunctionData) {
      // 선택된 함수에 대한 정보가 없으면 예외 처리 또는 홈으로 이동 등을 수행
      Swal.fire({
        title: '선택된 함수 정보가 없습니다.',
        icon: 'error',
        timer: 1500,
      }).then(() => {
        navigate('/');
      });
    }
  }, [selectedFunctionData, navigate]);

  const handleButton = () => {
    // 정답 처리 로직
    const expert_answer = selectedFunctionData.answer.toString();

    if (inputValue.replace(/\s+/g, '') === expert_answer) {
      // 정답과 입력값이 일치하면 성공 메시지 출력
      Swal.fire({
        title: '잘 하셨어요! 정답입니다.',
        icon: 'success',
        timer: 2000,
      }).then(() => {
        // 다음 문제로 이동 또는 홈으로 이동 등을 수행
        navigate('/');
      });
    } else {
      // 오답 메시지 출력
      Swal.fire({
        icon: 'error',
        title: '틀렸습니다.',
        text: '다시 한번 풀어보세요. 힌트가 도움이 될 것입니다.',
      });
      setInputValue('');
    }
  };

  return (
    <ExpertWrapper>
      <div className="container">
        <div className="row">
          <QuestionDiv className="col col-sm-12 col-md-12 col-lg-6">
            {/* 기존의 문제 출력 코드를 selectedFunctionData를 사용하여 수정 */}
            <ButtonWrapper>
              {/* 필요한 버튼 및 컴포넌트 추가 */}
            </ButtonWrapper>
            <QuestionH1>{selectedFunctionData.function} 함수 문제</QuestionH1>
            <QuestionP>{selectedFunctionData.question}</QuestionP>
            <AnswerForm>
              <AnswerInput
                type="text"
                required
                placeholder="여기에 정답을 입력해주세요."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <AnswerButton type="button" onClick={handleButton}>
                정답 입력
              </AnswerButton>
            </AnswerForm>
          </QuestionDiv>
          <div className="col col-sm-12 col-md-6 col-lg-6">
            <div>
              <ExpertAnswer></ExpertAnswer>
            </div>
            <br />
            <ExpertHint>
              <ExpertHintStrong></ExpertHintStrong>
              <br />
              <HintImage src={selectedFunctionData.sheet_photo} alt="힌트 이미지" />
            </ExpertHint>
          </div>
        </div>
      </div>
    </ExpertWrapper>
  );
};

export default FunctionProblem;
