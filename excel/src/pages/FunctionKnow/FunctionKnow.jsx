import React from 'react'
import { CardTitle, CardWrapper, ListGroupItem, ListGroup } from './functionKnow.style';
import "../../db/function.json";
import { useLocation, useNavigate } from 'react-router-dom';
import FunctionProblem from '../FunctionProblem/FunctionProblem'; // 추가된 부분

const data = [
    {
    "function":"DATE()",
    "question": "지정한 연,월,일로 날짜 데이터를 만드는 함수를 구하시오.",
    "answer": "=date(B2,C2,D2)",
    "sheet_photo": "1-answer-3",
    "hint": "DATE"
  },
  {
    "function":"COUNT()",
    "question": "지정한 연,월,일로 날짜 데이터를 만드는 함수를 구하시오.",
    "answer": "=date(B2,C2,D2)",
    "sheet_photo": "1-answer-3",
    "hint": "DATE"
  },
  {
    "function":"TIME()",
    "question": "지정한 시,분,초로 시간데이터를 만드는 함수를 구하시오.",
    "answer": "=time(B2,C2,D2)",
    "sheet_photo": "1-answer-4",
    "hint": "TIME"
  },
  {
    "function":"ISBLACK()",
    "question": "A2셀이 공백셀인지 조사하는 함수를 구하시오.",
    "answer": "=isblank(A2)",
    "sheet_photo": "1-answer-6",
    "hint": "ISBLACK"
  },
  {
    "function":"MODE()",
    "question": "표에 존재하는 인수들중 가장 많이나오는 최빈값을 구하시오.",
    "answer": "=mode(A2:A5)",
    "sheet_photo": "1-answer-8",
    "hint": "MODE"
  },
  {
    "function":"MAX()",
    "question": "A2:A10 목록중 최대값을 구하시오.",
    "answer": "=max(A2:A10)",
    "sheet_photo": "1-answer-9",
    "hint": "MAX"
  },
  {
    "function":"VAL()",
    "question": "표본의 범위에서 분산을 구하시오.",
    "answer": "=val(A2:A10)",
    "sheet_photo": "1-answer-13",
    "hint": "VAL"
  },
  {
    "function":"PRODUCT()",
    "question": "인수를 전부 곱한 값을 구하시오.",
    "answer": "=product(A2:A6)",
    "sheet_photo": "1-answer-18",
    "hint": "PRODUCT"
  },
  {
    "function":"YEAR()",
    "question": "본인의 생일과 현재 날짜를 이용해서 나이를 구하시오.",
    "answer": "=year(today())-year(A2)",
    "sheet_photo": "1-answer-1",
    "hint":"YEAR"
  },
  {
    "function":"DAYS()",
    "question": "전역일을 입력하면, 남은 복무일수를 계산해주는 함수를 입력하세요.",
    "answer": "=days(A2,today())",
    "sheet_photo": "1-answer-2",
    "hint":"DAYS"
  },
  {
    "function":"REPT()",
    "question": "초등학교 선생님인 최모양은 아이들이 선행을 한 횟수만큼 동그라미 스티커를 붙여줄려고 합니다. 가장 뒤의 숫자 크기만큼 ○텍스트를 나열하시오.",
    "answer": "=REPT(“○”,right(“”,1))",
    "sheet_photo": "1-answer-3",
    "hint":"REPT"
  },
  {
    "function":"MID()",
    "question": "주민등록번호를 이용해서 생년월일을 표시하시오.",
    "answer": "=date(mid(A2,1,2),mid(A2,3,2),mid(A2,5,2)",
    "sheet_photo": "1-answer-4",
    "hint":"MID"
  },
  {
    "function":"TRUCT()",
    "question": "다니는 성과금=x 기본급 일 때 성과금을 계산하는 함수를 작성하시오.",
    "answer": "=TRUNC(SQRT(B2:B10)*C2:C10)",
    "sheet_photo": "1-answer-8",
    "hint":"TRUNC"
  },
  {
    "function":"COUNTIF()",
    "question": "회사에서 직급이 대리가 아닌 사원수를 구하고 뒤에 “명”을 표시하시오.",
    "answer": "=COUNTIF(A2:A10<>대리)&”명”",
    "sheet_photo": "1-answer-10",
    "hint":"COUNTIF"
  },
  {
    "function":"PROPER()",
    "question": "선수명의 첫 문자를 대문자로 변환하고 팀명의 전체문자를 대문자로 변환해서  ‘선수명(팀명)’ 형태로 결과가 나오게끔 함수를 입력하시오.",
    "answer": "=RPOPER(A2:A3)&”(”&UPPER(B2:B3)&”)”",
    "sheet_photo": "1-answer-13",
    "hint":"PROPER"
  },
  {
    "function":"SUMIF()",
    "question": "장르가 힙합인 음악들의 팜매량 합계를 구하여 백의자리에서 올림하여 천의자리까지 표시하는 함수를 구하시오 .",
    "answer": "=ROUNDUP(SUMIF(A2:5,”힙합”,B2:B5)-3)",
    "sheet_photo": "1-answer-20",
    "hint":"SUMIF"
  },
  {
    "function":"VLOOKUP()",
    "question": "[표6]을 참조하여 각 과목별 가중치를 반영하여 점수를 구한 후 점수에 해당하는 등급을 계산하여 표시하시오.",
    "answer": "=VLOOKUP(SUMPRODUCT(B30:E30,$B$29:$E$29),$J$30:$K$34,2)",
    "sheet_photo": "1-answer-1",
    "hint": "VLOOKUP,SUMPRODUCT"
  },
  {
    "function":"HLOOKUP()",
    "question": "[표2]를 참조해서 [표1] 지금수수료를 계산하시오.",
    "answer": "=HLOOKUP(C18,$K$17:$N$18,2,0)+IF(G18>=30,50)",
    "sheet_photo": "1-answer-8",
    "hint": "HLOOKUP"
  },
  {
    "function":"CONCATENATE()",
    "question": "[표1]의 구분,특강날짜,기준일[H1]을 이용하여 특강주를 표시하시오,월요일부터 주가 시작하도록 계산하며 이번달 주차는 일년중 특강 날짜 주차에서 기준일의 주차를 뺀 값으로 계산하시오[표시 예:회원-2주].",
    "answer": "=CONCATENATE(A3,'-',WEEKNUM(E3,2)-WEEKNUM($H$1,2),'주')",
    "sheet_photo": "1-answer-9",
    "hint": "CONCATENATE"
  },
  {
    "function":"QOUTIENT()",
    "question": "[표1]의 근무지와 교통비를 이용하여[표2] 영역에 근무지별 교통비의 평균을 10000으로 나눈 몫 만큼 “▶”을 반복하여 표시하시오.",
    "answer": "=REPT('▶',QUOTIENT(AVERAGEIF($B$3:$B$25,L3,$H$3:$H$25),10000))",
    "sheet_photo": "1-answer-13",
    "hint": "QOUTIENT"
  },
  {
    "function":"LOOKUP()",
    "question": " [표2]의 vod코드 마지막 두문자를 이용해 [표1]을 참조해서 영화제목을 구하여라 .",
    "answer": "=LOOKUP(RIGHT(H3,2)*1,$B$3:$F$3,$B$2:$F$2)",
    "sheet_photo": "1-answer-19",
    "hint": "LOOKUP"
  },
  {
    "function":"INDEX()",
    "question": "[표1]의 청약지역,전용면적과 [표2]를 이용하여 쳥약지역과 전용면적에 따른 청약가능액을 계산하여 표시하시오.",
    "answer": "=INDEX($K$4:$N$6,MATCH(B4,$J$4:$J$6,0),MATCH(C4,$K$3:$N$3,1))",
    "sheet_photo": "1-answer-20",
    "hint": "INDEX,MATCH"
  },
  {
    "function":"AVARAGE()",
    "question": "인수들의 평균값을 구하시오.",
    "answer": "=average(A2:A6)",
    "sheet_photo": "1-answer-1",
    "hint": "AVERAGE"
  },
  {
    "function":"LEN",
    "question": "A2셀 텍스트의 문자 수를 구하는 함수를 구하시오.",
    "answer": "=len(A2)",
    "sheet_photo": "1-answer-5",
    "hint": "LEN"
  },
  {
    "function":"ROW()",
    "question": "C3셀의 행 번호를  반환하는 함수를 구하시오.",
    "answer": "=row(C3)",
    "sheet_photo": "1-answer-7",
    "hint": "ROW"
  }
];

export default function FunctionKnow() {
  const navigate = useNavigate();
  const location = useLocation();
  const isFunctionProblemRoute = location.pathname === '/function-problem';
  const handleFunctionClick = (functionName) => {
    // 클릭한 함수에 대한 정보를 저장하고 Expert 컴포넌트로 이동
    localStorage.setItem('selectedFunctionData', JSON.stringify(data.find(item => item.function === functionName)));
    navigate('/function-problem');
  };

    return (
      <>
        <CardWrapper>
          <CardTitle>함수별 문제풀이</CardTitle>
            {data.map((item, index) => (
              <ListGroup key={index}>
                <ListGroupItem onClick={() => handleFunctionClick(item.function)}>
                  {item.function}
                </ListGroupItem>
              </ListGroup>
          ))}
        </CardWrapper>
      {isFunctionProblemRoute && <FunctionProblem />}
      </>
  );
}