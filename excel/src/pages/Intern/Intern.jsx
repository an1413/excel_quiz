import React, { useState, useEffect } from 'react';
import HomeButton from '../../component/common/HomeButton';
import Back from '../../component/common/Back';
import styled from 'styled-components';
import dummy from '../../db/intern.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InternWrapper, QuestionDiv, InternAnswer, InternHint, HintImage, QuestionH1, QuestionP, AnswerInput, AnswerButton, InternHintStrong, ButtonWrapper, AnswerForm } from './intern.style';
import Reset from '../../component/common/Reset';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Intern() {
  const navigate = useNavigate();
  const [stage_intern, setStage_intern] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const intern_question = dummy[stage_intern - 1].question;
  const intern_answer = dummy[stage_intern - 1].answer.toString();
  const intern_sheet_photo = require(`../../img/sheet_photo/2-answer-${stage_intern}.png`);

  const linkFeed = () => {
    navigate("/");
  }

  // stage_intern 값을 로컬 스토리지에 저장하는 함수
  const saveStageInternToLocalStorage = (value) => {
    localStorage.setItem('stage_intern', value.toString());
  };

  // 컴포넌트가 마운트될 때 로컬 스토리지에서 stage_intern 값을 불러옴
  useEffect(() => {
    const storedStageIntern = localStorage.getItem('stage_intern');
    if (storedStageIntern) {
      setStage_intern(parseInt(storedStageIntern, 10));
    }
  }, []);

  // stage_intern 값이 업데이트될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    saveStageInternToLocalStorage(stage_intern);
  }, [stage_intern]);

  const handleButton = () => {
    console.log('g');
    // intern_Success();
    if (inputValue.replace(/\s+/g, '') === intern_answer) {
      // 정답과 입력값이 일치하면 스테이지를 업데이트
      if(stage_intern === 20) {
        Swal.fire({
        title: "중급문제풀이가 끝났습니다\n홈화면으로 이동합니다",
        icon: 'success',
        timer: 2500,
      })
      linkFeed();
      }
      else {
        Swal.fire("잘하셨어요! 정답입니다.")
        setStage_intern(stage_intern + 1);
        setInputValue(''); // 입력값 초기화
      }
    } else {
      alert('다시한번 풀어주세요.');
      console.log(typeof inputValue);
      console.log(typeof intern_answer);
      console.log('wrong');
      setInputValue('');
    }
  };
  const handleFormSubmit = (e) => {
  e.preventDefault(); // 폼 기본 제출 동작 막기

  if (inputValue.replace(/\s+/g, '') === intern_answer) {
    if (stage_intern === 20) {
      Swal.fire({
        title: "중급문제풀이가 끝났습니다\n홈화면으로 이동합니다",
        icon: 'success',
        timer: 2500,
      })
      linkFeed();
    } else {
      Swal.fire("잘하셨어요! 정답입니다.")
      setStage_intern(stage_intern + 1);
      setInputValue(''); // 입력값 초기화
    }
  } else {
    alert('다시한번 풀어주세요.');
    setInputValue('');
  }
};

  const intern_Success = () => {
    if (stage_intern === 20) {
      Swal.fire({
        title: '중급문제풀이가 끝났습니다. 수고하셨습니다!',
        icon: 'success',
        timer: 1500,
      })
      linkFeed();
      return;
    }
  };

  return (
    <InternWrapper>
      <div className='container'>
        <div className='row'>
          <QuestionDiv className='col col-sm-12 col-md-12 col-lg-6'>
            <ButtonWrapper>
              <Back />
              <Reset/>
            </ButtonWrapper>
            <QuestionH1>Intern {stage_intern}번 문제</QuestionH1>
            <QuestionP>{intern_question}</QuestionP>
            <AnswerForm onSubmit={handleFormSubmit}>
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
            <InternAnswer>
              {/* {intern_answer} */}
            </InternAnswer>
            </div>
            <br></br>
            <InternHint>
              <InternHintStrong>
                참고화면
              </InternHintStrong>
              <br></br>
              <HintImage src={intern_sheet_photo} alt="힌트 이미지" />
            </InternHint>
          </div>
        </div>
      </div>
      {/* <Back />
      <h1>Intern {stage_intern}번 문제</h1>
      <HomeButton />
      <p>{intern_question}</p>
      <form action="">
        <input
          type="text"
          required
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // 입력값 업데이트
        />
        <button type="button" onClick={handleButton}>
          정답입력
        </button>
      </form>
      <internAnswer>정답출력: {intern_answer}</internAnswer> */}
      {/* <div>힌트화면: {intern_sheet_photo}</div> */}
      {/* <internHint>
        힌트화면 <HintImage src={intern_sheet_photo} alt="힌트 이미지" />
      </internHint>
      intern */}
    </InternWrapper>
  );
}


