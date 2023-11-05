import React, { useState, useEffect, useMemo } from 'react';
import Back from '../../component/common/Back';
import dummy from '../../db/intern.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InternWrapper, QuestionDiv, InternAnswer, InternHint, HintImage, QuestionH1, QuestionP, AnswerInput, AnswerButton, InternHintStrong, ButtonWrapper, AnswerForm } from './intern.style';
import Reset from '../../component/common/Reset';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Hint from '../../component/common/Hint';
import NextProb from '../../component/common/NextProb';
import PrevProb from '../../component/common/PrevProb';

function Intern() {
  const navigate = useNavigate();
  const [stage_intern, setStage_intern] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [showModal, setShowModal] = useState(false); // 모달 표시 상태
  const internData = useMemo(() => dummy[stage_intern - 1], [stage_intern]);
  const intern_question = internData.question;
  const intern_answer = internData.answer.toString();
  const intern_sheet_photo = useMemo(() => require(`../../img/sheet_photo/2-answer-${stage_intern}.png`), [stage_intern]);
  const intern_hint = internData.hint;

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

  const handleNextStage = () => {
    if (stage_intern === 20) {
      Swal.fire({
        title: '마지막 문제입니다.',
        icon: 'error',
        timer: 1500,
      }).then(() => {
      });
    } else {
      setStage_intern(stage_intern + 1);
    }
  };

  const handlePrevStage = () => {
    if (stage_intern === 1) {
      Swal.fire({
        title: '첫번째 문제입니다.',
        icon: 'error',
        timer: 1500,
      }).then(() => {
        // linkFeed();
      });
    } else {
      setStage_intern(stage_intern - 1);
    }
  };

  const handleButton = () => {
    if (inputValue.replace(/\s+/g, '') === intern_answer) {
      // 정답과 입력값이 일치하면 스테이지를 업데이트
      if (stage_intern === 20) {
        Swal.fire({
          title: "중급문제풀이가 끝났습니다\n홈화면으로 이동합니다",
          icon: 'success',
          timer: 2500,
        })
        localStorage.setItem('stage_intern', '1');
        linkFeed();
      } else {
        Swal.fire("잘하셨어요! 정답입니다.")
        setStage_intern(stage_intern + 1);
        setInputValue(''); // 입력값 초기화
      }
    } else {
      if (inputValue === "") {
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
      setInputValue('');
    }
  };

  const intern_Success = () => {
    if (stage_intern === 20) {
      Swal.fire({
        title: '중급 문제 풀이가 끝났습니다. 수고하셨습니다!',
        icon: 'success',
        timer: 1500,
      }).then(() => {
        linkFeed();
      });
      return;
    }
  };

  // 모달을 닫기 위한 핸들러 함수
  function closeModal() {
    setShowModal(false);
  }

  return (
    <InternWrapper>
      <div className='container'>
        <div className='row'>
          <QuestionDiv className='col col-sm-12 col-md-12 col-lg-6'>
            <ButtonWrapper>
              <Back />
              <Reset/>
              <PrevProb onPrev={handlePrevStage} />
              <NextProb onNext={handleNextStage} />
              <Hint hint={intern_hint}/>
            </ButtonWrapper>
            <QuestionH1>중급 {stage_intern}번 문제</QuestionH1>
            <QuestionP>{intern_question}</QuestionP>
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
                {/* <InternAnswer>
                </InternAnswer> */}
              </div>
              <br></br>
              <InternHint>
                <InternHintStrong>
                </InternHintStrong>
                <br></br>
                <HintImage src={intern_sheet_photo} alt="힌트 이미지" onClick={() => setShowModal(true)} />
              </InternHint>
            </div>
          </div>
        </div>
        {/* 모달 창 */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <img src={intern_sheet_photo} alt="힌트 이미지" />
            </div>
          </div>
        )}
      </InternWrapper>
    );
}

export default Intern;
