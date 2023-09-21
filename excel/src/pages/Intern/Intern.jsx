import React, { useState, useEffect } from 'react';
import HomeButton from '../../component/common/HomeButton';
import Back from '../../component/common/Back';
import styled from 'styled-components';
import dummy from '../../db/intern.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spreadsheet from "../../component/Spreadsheet";

export default function Intern() {
  const [stage_intern, setStage_intern] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const intern_question = dummy[stage_intern - 1].question;
  const intern_answer = dummy[stage_intern - 1].answer.toString();
  const intern_sheet_photo = require(`../../img/sheet_photo/2-answer-${stage_intern}.png`);

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
    intern_Success();
    if (inputValue.replace(/\s+/g, '') === intern_answer) {
      // 정답과 입력값이 일치하면 스테이지를 업데이트
      alert('정답입니다. 다음단계로 넘어가시겠습니까?');
      setStage_intern(stage_intern + 1);
      setInputValue(''); // 입력값 초기화
    } else {
      alert('다시한번 풀어주세요.');
      console.log(typeof inputValue);
      console.log(typeof intern_answer);
      console.log('wrong');
      setInputValue('');
    }
  };

  const intern_Success = () => {
    if (stage_intern === 21) {
      console.log('종료');
    }
  };

  return (
    <internWrapper>
    <Container>
      <Row>
        <Col>
        <Back />
        <internQuestion>
        </internQuestion>
        </Col>
        <Col>2 of 2</Col>
      </Row>
      <Spreadsheet/>
    </Container>
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
    </internWrapper>
  );
}

export const internWrapper = styled.div`
  /* text-align: center; */
`;

export const internQuestion = styled.div`
  /* margin-top: 2rem; */
  width: 140px;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const internAnswer = styled.div`
  font-size: 2rem;
`;

const internHint = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 300px;
`;

const HintImage = styled.img`
  text-align: center;
  width: 300px;
  height: 300px;
`;
