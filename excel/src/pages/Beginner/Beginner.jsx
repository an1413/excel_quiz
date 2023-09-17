import React, { useState } from 'react'
import HomeButton from '../../component/common/HomeButton';
import Back from '../../component/common/Back';
import styled from "styled-components";
import dummy from "../../db/beginer.json";
// import Begin1 from "../../img/sheet_photo/1-answer-1.jpg";
// import Begin2 from "../../img/sheet_photo/1-answer-2.jpg";
// import Begin3 from "../../img/sheet_photo/1-answer-3.jpg";
// import Begin4 from "../../img/sheet_photo/1-answer-4.jpg";
// import Begin5 from "../../img/sheet_photo/1-answer-5.jpg";
// import Begin6 from "../../img/sheet_photo/1-answer-6.jpg";
// import Begin7 from "../../img/sheet_photo/1-answer-7.jpg";
// import Begin8 from "../../img/sheet_photo/1-answer-8.jpg";
// import Begin9 from "../../img/sheet_photo/1-answer-9.jpg";

export default function Beginner() {
  const [stage_beginner, setStage_beginner] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const beginner_question = dummy[stage_beginner - 1].question;
  const beginner_answer = dummy[stage_beginner - 1].answer.toString();
  // const beginner_sheet_photo = dummy[stage_beginner - 1].sheet_photo;

  const beginner_sheet_photo = require(`../../img/sheet_photo/1-answer-${stage_beginner}.jpg`);
  const handleButton = () => {
    console.log("g");
    Beginner_Success();
    if (inputValue === beginner_answer) {
      // 정답과 입력값이 일치하면 스테이지를 업데이트
      alert("정답입니다. 다음단계로 넘어가시겠습니까?");
      setStage_beginner(stage_beginner + 1);
      setInputValue(""); // 입력값 초기화
    }
    else {
      alert("다시한번 풀어주세요.")
      console.log(typeof inputValue);
      console.log(typeof beginner_answer);
      console.log("wrong");
      setInputValue("");
    }
  }

  const Beginner_Success = () => {
    if(stage_beginner === 21) {
      console.log("종료");
    }
  }

  return (
    <BeginnerWrapper>
      <Back />
      <h1>Begginner {stage_beginner}번 문제</h1>
      <HomeButton />
      <p>{beginner_question}</p>
      <form action="">
        <input
          type="text"
          required
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // 입력값 업데이트
        />
        <button type='button' onClick={handleButton}>정답입력</button>
      </form>
      <BeginnerAnswer>정답출력: {beginner_answer}</BeginnerAnswer>
      {/* <div>힌트화면: {beginner_sheet_photo}</div> */}
      <BeginnerHint>힌트화면 <HintImage src={beginner_sheet_photo} alt="힌트 이미지" /></BeginnerHint>
      Beginner
    </BeginnerWrapper>
  )
}

const BeginnerWrapper = styled.div`
  text-align: center;
`

const BeginnerAnswer = styled.div`
  font-size: 2rem;
`

const BeginnerHint = styled.div`
  display:flex;
  align-items: center;
  width: 300px;
  height: 300px;
`

const HintImage = styled.img`
  text-align: center;
  width: 300px;
  height: 300px;
`