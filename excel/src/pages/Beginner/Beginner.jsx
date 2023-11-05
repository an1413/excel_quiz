import React, { useState, useEffect } from 'react';
import Back from '../../component/common/Back';
import dummy from '../../db/beginer.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BeginerWrapper, QuestionDiv, BeginerAnswer, BeginerHint, HintImage, QuestionH1, QuestionP, AnswerInput, AnswerButton, BeginerHintStrong, ButtonWrapper, AnswerForm } from './beginer.style';
import Reset from '../../component/common/Reset';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Hint from '../../component/common/Hint';
import NextProb from '../../component/common/NextProb';
import PrevProb from '../../component/common/PrevProb';

export default function Beginer() {
  const navigate = useNavigate();
  const [stage_beginer, setStage_beginer] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const beginer_question = dummy[stage_beginer - 1].question;
  const beginer_answer = dummy[stage_beginer - 1].answer.toString();
  const beginer_sheet_photo = require(`../../img/sheet_photo/1-answer-${stage_beginer}.png`);
  const beginer_hint = dummy[stage_beginer - 1].hint;

  const linkFeed = () => {
    navigate("/");
  }

  // stage_beginer 값을 로컬 스토리지에 저장하는 함수
  const saveStageBeginerToLocalStorage = (value) => {
    localStorage.setItem('stage_beginer', value.toString());
  };

  // 컴포넌트가 마운트될 때 로컬 스토리지에서 stage_beginer 값을 불러옴
  useEffect(() => {
    const storedStageBeginer = localStorage.getItem('stage_beginer');
    if (storedStageBeginer) {
      setStage_beginer(parseInt(storedStageBeginer, 10));
    }
  }, []);

  // stage_beginer 값이 업데이트될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    saveStageBeginerToLocalStorage(stage_beginer);
  }, [stage_beginer]);

  const handleButton = () => {
    console.log('g');
    console.log(stage_beginer);
    if (inputValue.replace(/\s+/g, '') === beginer_answer) {
      // 정답과 입력값이 일치하면 스테이지를 업데이트
      if(stage_beginer === 20) {
        Swal.fire({
        title: "초급문제풀이가 끝났습니다\n홈화면으로 이동합니다",
        icon: 'success',
        timer: 2500,
      })
      localStorage.setItem('stage_beginer', '1');
      linkFeed();
      }
      else {
        Swal.fire("잘하셨어요! 정답입니다.")
        setStage_beginer(stage_beginer + 1);
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
      Swal.fire({
        icon: 'error',
        title: '틀렸습니다.',
        text: '다시한번 풀어보세요. 힌트가 도움이 될겁니다.',
    })
  }
      console.log(typeof inputValue);
      console.log(typeof beginer_answer);
      console.log('wrong');
      setInputValue('');
    }
  };

  const handlePrevStage = () => {
    if (stage_beginer === 1) {
      Swal.fire({
        title: '첫번째 문제입니다.',
        icon: 'error',
        timer: 1500,
      });
    } else {
      setStage_beginer(stage_beginer - 1);
    }
  };

  const handleNextStage = () => {
    if (stage_beginer === 20) {
      Swal.fire({
        title: '마지막 문제입니다.',
        icon: 'error',
        timer: 1500,
      });
    } else {
      setStage_beginer(stage_beginer + 1);
    }
  };

  const beginer_Success = () => {
    if (stage_beginer === 20) {
    Swal.fire({
      title: '초급 문제 풀이가 끝났습니다. 수고하셨습니다!',
      icon: 'success',
      timer: 1500,
    }).then(() => {
      linkFeed();
    });
    return;
  }
  };

  return (
    <BeginerWrapper>
      <div className='container'>
        <div className='row'>
          <QuestionDiv className='col col-sm-12 col-md-12 col-lg-6'>
            <ButtonWrapper>
              <Back />
              <Reset/>
              <Hint hint={beginer_hint}/>
              <PrevProb onPrev={handlePrevStage} /> 
              <NextProb onNext={handleNextStage} />
            </ButtonWrapper>
            <QuestionH1>초급 {stage_beginer}번 문제</QuestionH1>
            <QuestionP>{beginer_question}</QuestionP>
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
            <BeginerAnswer>
            </BeginerAnswer>
            </div>
            <br></br>
            <BeginerHint>
              <BeginerHintStrong>
              </BeginerHintStrong>
              <br></br>
              <HintImage src={beginer_sheet_photo} alt="힌트 이미지" />
            </BeginerHint>
          </div>
        </div>
      </div>
    </BeginerWrapper>
  );
}


