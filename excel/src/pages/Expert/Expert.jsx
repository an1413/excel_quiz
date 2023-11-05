import React, { useState, useEffect } from 'react';
import Back from '../../component/common/Back';
import dummy from '../../db/expert.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ExpertWrapper, QuestionDiv, ExpertAnswer, ExpertHint, HintImage, QuestionH1, QuestionP, AnswerInput, AnswerButton, ExpertHintStrong, ButtonWrapper, AnswerForm } from './expert.style';
import Reset from '../../component/common/Reset';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Hint from '../../component/common/Hint';
import NextProb from '../../component/common/NextProb';
import PrevProb from '../../component/common/PrevProb';

export default function Expert() {
  const navigate = useNavigate();
  const [stage_expert, setStage_expert] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const expert_question = dummy[stage_expert - 1].question;
  const expert_answer = dummy[stage_expert - 1].answer.toString();
  const expert_sheet_photo = require(`../../img/sheet_photo/3-answer-${stage_expert}.png`);
  const expert_hint = dummy[stage_expert - 1].hint;

  const linkFeed = () => {
    navigate("/");
  }

  const handleNextStage = () => {
    if (stage_expert === 20) {
      Swal.fire({
        title: '마지막 문제입니다.',
        icon: 'error',
        timer: 1500,
      }).then(() => {
      });
    } else {
      setStage_expert(stage_expert + 1);
    }
  };

  const handlePrevStage = () => {
    if (stage_expert === 1) {
      Swal.fire({
        title: '첫번째 문제입니다.',
        icon: 'error',
        timer: 1500,
      }).then(() => {
        // linkFeed();
      });
    } else {
      setStage_expert(stage_expert - 1);
    }
  };

  // stage_expert 값을 로컬 스토리지에 저장하는 함수
  const saveStageExpertToLocalStorage = (value) => {
    localStorage.setItem('stage_expert', value.toString());
  };

  // 컴포넌트가 마운트될 때 로컬 스토리지에서 stage_expert 값을 불러옴
  useEffect(() => {
    const storedStageExpert = localStorage.getItem('stage_expert');
    if (storedStageExpert) {
      setStage_expert(parseInt(storedStageExpert, 10));
    }
  }, []);

  // stage_expert 값이 업데이트될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    saveStageExpertToLocalStorage(stage_expert);
  }, [stage_expert]);

  const handleButton = () => {
    console.log('g');
    console.log(stage_expert);
    if (inputValue.replace(/\s+/g, '') === expert_answer) {
      // 정답과 입력값이 일치하면 스테이지를 업데이트
      if(stage_expert === 20) {
        Swal.fire({
        title: "고급문제풀이가 끝났습니다\n홈화면으로 이동합니다",
        icon: 'success',
        timer: 2500,
      })
      localStorage.setItem('stage_expert', '1');
      linkFeed();
      }
      else {
        Swal.fire("잘하셨어요! 정답입니다.")
        setStage_expert(stage_expert + 1);
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
      console.log(typeof expert_answer);
      console.log('wrong');
      setInputValue('');
    }
  };

  const expert_Success = () => {
    if (stage_expert === 20) {
    Swal.fire({
      title: '고급 문제 풀이가 끝났습니다. 수고하셨습니다!',
      icon: 'success',
      timer: 1500,
    }).then(() => {
      linkFeed();
    });
    return;
  }
  };

  return (
    <ExpertWrapper>
      <div className='container'>
        <div className='row'>
          <QuestionDiv className='col col-sm-12 col-md-12 col-lg-6'>
            <ButtonWrapper>
              <Back />
              <Reset/>
              <PrevProb onPrev={handlePrevStage} />
              <NextProb onNext={handleNextStage} />
              <Hint hint={expert_hint}/>
            </ButtonWrapper>
            <QuestionH1>고급 {stage_expert}번 문제</QuestionH1>
            <QuestionP>{expert_question}</QuestionP>
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
            <ExpertAnswer>
            </ExpertAnswer>
            </div>
            <br></br>
            <ExpertHint>
              <ExpertHintStrong>
                {/* 참고화면 */}
              </ExpertHintStrong>
              <br></br>
              <HintImage src={expert_sheet_photo} alt="힌트 이미지" onclick="window.open(this.src)"/>
            </ExpertHint>
          </div>
        </div>
      </div>
    </ExpertWrapper>
  );
}


