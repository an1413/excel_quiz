import React, { useState, useEffect } from 'react';
import Back from '../../component/common/Back';
import dummy from '../../db/test.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TestWrapper, QuestionDiv, TestAnswer, TestHint, HintImage, QuestionH1, QuestionP, AnswerInput, AnswerButton, TestHintStrong, ButtonWrapper, AnswerForm } from './test.style';
import Reset from '../../component/common/Reset';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Hint from '../../component/common/Hint';
import Record from '../../component/Record';

export default function TestRandom({test}) {
  const navigate = useNavigate();
  const totalQuestions = 15; // 전체 질문 수
  const [stage_test, setStage_test] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const test_question = dummy[stage_test - 1].question;
  const test_answer = dummy[stage_test - 1].answer.toString();
  const test_sheet_photo = require(`../../img/sheet_photo/4-answer-${stage_test}.png`);
  const test_hint = dummy[stage_test - 1].hint;
  const [score, setScore] = useState(100);

  const progress = (stage_test / totalQuestions) * 100;

  const linkFeed = () => {
    navigate("/");
  }

  // stage_test 값을 로컬 스토리지에 저장하는 함수
  const saveStageTestToLocalStorage = (value) => {
    localStorage.setItem('stage_test', value.toString());
  };

  // 컴포넌트가 마운트될 때 로컬 스토리지에서 stage_test 값을 불러옴
  useEffect(() => {
    const storedStageTest = localStorage.getItem('stage_test');
    if (storedStageTest) {
      setStage_test(parseInt(storedStageTest, 10));
    }
  }, []);

  // stage_test 값이 업데이트될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    saveStageTestToLocalStorage(stage_test);
  }, [stage_test]);

  const handleButton = () => {
    console.log('g');
    console.log(stage_test);
    if (inputValue.replace(/\s+/g, '') === test_answer) {
      // 정답과 입력값이 일치하면 스테이지를 업데이트
      if(stage_test === 15) {
        Swal.fire({
        title: `축하합니다. \n시험을 통과하였습니다.`,
        text: '잠시후 메인화면으로 이동합니다.',
        icon: 'success',
      })
      localStorage.setItem('stage_test', '1');
      setTimeout(() => {
        linkFeed();
      }, 4000);
      }
      else {
        Swal.fire("잘하셨어요! 정답입니다.")
        setStage_test(stage_test + 1);
        setInputValue(''); // 입력값 초기화
      }
    } else {
        if(inputValue === "") {
      Swal.fire({
        icon: 'warning',
        title: '정답을 입력해주세요.',
        text: '입력창에 답을 입력해주세요.',
    })
      } else {
        setScore(score - 5);
      Swal.fire({
        icon: 'error',
        title: '틀렸습니다.',
        text: '다시한번 풀어보세요. 힌트가 도움이 될겁니다.',
    })
  }
      console.log(typeof inputValue);
      console.log(typeof test_answer);
      console.log('wrong');
      setInputValue('');
    }
    
  };

  return (
    <TestWrapper>
      <div className='container'>
        <div className='row'>
          <QuestionDiv className='col col-sm-12 col-md-12 col-lg-6'>
            <ButtonWrapper>
              <Back />
              <Reset/>
              <Hint hint={test_hint}/>
            </ButtonWrapper>
            <QuestionH1>테스트 {stage_test}번 문제</QuestionH1>
            <QuestionP>{test_question}</QuestionP>
            <AnswerForm>
              <AnswerInput
              type="text"
              required
              placeholder='여기에 정답을 입력해주세요.'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} // 입력값 업데이트
              />
              <AnswerButton type="button" onClick={handleButton}>
                정답입력
              </AnswerButton>
            </AnswerForm>

          </QuestionDiv>
          <div className='col col-sm-12 col-md-6 col-lg-6'>
            <div>
            {/* <TestAnswer>
            </TestAnswer> */}
            <Record test={stage_test}/>
            {/* 진행 바 (크기 줄이고 왼쪽부터 차오르게) */}
              <div className="progress" style={{ height: '20px', width: '400px' }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${progress}%`, minWidth: '10%', margin: '0'}}
                  aria-valuenow={progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {test}
                </div>
              </div>
            </div>
            <br></br>
            <TestHint>
              <TestHintStrong>
                {/* 참고화면 */}
              </TestHintStrong>
              <br></br>
              <HintImage src={test_sheet_photo} alt="힌트 이미지" />
            </TestHint>
          </div>
        </div>
      </div>
    </TestWrapper>
  );
}
