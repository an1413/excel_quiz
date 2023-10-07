import React from 'react'
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';

const yourData = [
  {
    Func_Name: '=sum(인수1, 인수2,...)',
    Func_Explain: '인수들의 합을 구합니다',
    Func_ex: 'sum(1,2,3)  결과: 6',
  },
  {
    Func_Name: '=ROUND(인수,자릿수)',
    Func_Explain: '인수를 자릿수로 반올림한 숫자를 구합니다',
    Func_ex: '=ROUND(3.14156,2)            결과: 3.14',
  },
  {
    Func_Name: '=ROUNDUP(인수,자릿수)',
    Func_Explain: '인수를 자릿수로 올림한 숫자를 구함',
    Func_ex: '=ROUNDUP(3.14456,2)            결과: 3.14',
  },
  {
    Func_Name: '=ROUNDDOWN(인수,자릿수)',
    Func_Explain: '인수를 자릿수로 내림한 숫자를 구함',
    Func_ex: '=ROUNDDOWN(3,자릿수)       결과:3.14  ',
  },
  {
    Func_Name: '=SUMIF(범위,조건,합계 범위)',
    Func_Explain: '범위에서 조건을 검사하여 합계 범위에 해당하는 셀 합계를구함',
    Func_ex: '=SUMIF(A1:A10,”>=40”,C1:C10)    ',
  },
  {
    Func_Name: '=ABS(숫자)',
    Func_Explain: '숫자의 절대값을 구함',
    Func_ex: '=ABS(-2002)           결과 : 2002 ',
  },
  {
    Func_Name: '=MOD(인수,제수)',
    Func_Explain: '인수를 제수로 나눈 결과의 나머지를 구함',
    Func_ex: '=MOD(4,2)          결과: 0',
  },
  {
    Func_Name: '=TRUNC(인수,자릿수)',
    Func_Explain: '지정한 자릿수만을 소수점 아래에 남기고 나머지 자리를 버림',
    Func_ex: '=TRUNC(-4,5)            결과: -4',
  },
  {
    Func_Name: '=INT(인수)',
    Func_Explain: '인수를 넘지 않느 가장 가까운 정수를 구함',
    Func_ex: '=INT(-4,5)            결과:-5 ',
  },
  {
    Func_Name: '=SQRT(숫자)',
    Func_Explain: '숫자의 양의 제곱근을 구함',
    Func_ex: '=SQRT(9)           결과: 3',
  },
  {
    Func_Name: '=FACT(숫자)',
    Func_Explain: '숫자의 계승값(1*2*3*…..*N) 구함',
    Func_ex: '=FACT(3)           결과: 6',
  },
  {
    Func_Name: '=POWER(인수1,인수2)',
    Func_Explain: '인수1을 인수2만큼 거듭제곱한 값을 구함',
    Func_ex: '=POWER(2,4)            결과:16(=2X2X2X2)',
  },
  {
    Func_Name: '=EXP(수치)',
    Func_Explain: '자연로그의 밑수인 e(e=2.7182182)를 수치만큼 거듭제곱한값으로 계산함',
    Func_ex: '=EXP(2)           결과: 7.3890561',
  },
  {
    Func_Name: '=PRODUCT(수치1,수치2,…)',
    Func_Explain: '수치를 모두 곱한 결과를 구함',
    Func_ex: '=PRODUCT(2,3,5)            결과: 30(=2*3*5)',
  },
  {
    Func_Name: '=SUMPRODUCT(배열1,배열)2…)',
    Func_Explain: '수치 배열에 각각 대응하는 요소의곱을 구하고 결과의 합을구함',
    Func_ex: '=SUMPRODUCT({1,2,3},{7,8,9}           결과: 50(=1*7+2*8+3*9)',
  },
  {
    Func_Name: '=AVERAGE(인수1,인수2,…)',
    Func_Explain: '인수들의 평균값을 구함',
    Func_ex: '=AVERAGE(10,20,30)           결과: 20',
  },
  {
    Func_Name: '=MAX(인수1,인수2,…)',
    Func_Explain: '인수들 목록 중 최대값을 구함',
    Func_ex: '=MAX(10,20,30)            결과: 30',
  },
  {
    Func_Name: '=MIN(인수1,인수2,…)',
    Func_Explain: '인수들 목록 중 최소값을 구함',
    Func_ex: '=MIN(10,20,30)          결과: 10',
  },
  {
    Func_Name: '=LARGE(배열,K)',
    Func_Explain: '배열에서 K번째로 큰 값을 구함',
    Func_ex: '=LARGE(A1:A10,3)           결과:지정된 영역에서 3번째로 큰 값을 구함',
  },
  {
    Func_Name: '=SMALL(배열,K)',
    Func_Explain: '배열에서 K번째로 작은값을 구함',
    Func_ex: '=SMALL(A1:A10,3)           결과: 지정된 영역에서 3번째로 작은 값을 구함',
  },
  {
    Func_Name: '=RANK.AVG(값,참조 영역,[순위 결정 방법])',
    Func_Explain: '참조영역 중에서  순위를 구함(순위같을시 평균수위반환)',
    Func_ex: '=RANK.AVG(D3,$D$3:$D$9)        결과: [D3]셀이 [D3:D9]영역에서 순위를 구함)',
  },
  {
    Func_Name: '=RANK.EQ(값,참조영역,[순위결정방법])',
    Func_Explain: '참조영역 중에서 순위를 구함 (순위 같을시 가장 높은 순위 반환)',
    Func_ex: '=RANK.EQ(D3,$D$3:$D$9)           결과: [D3]셀이 [D3:D9]영역에서 순위를 구함)',
  },
  {
    Func_Name: '=VAR(표본의 범위)',
    Func_Explain: '표본의 범위에서 분산을 구함',
    Func_ex: '=VAR(A1:A5)           결과: [A1:A5]영역에서 분산을 구함',
  },
  {
    Func_Name: '=STDEV(표본의 범위)',
    Func_Explain: '표본의 범위 표준편차',
    Func_ex: '=STDEV(A1:A5)          결과: [A1:A5]영역의 표준편차를  구함',
  },
  {
    Func_Name: '=COUNT(인수1,인수2,…)',
    Func_Explain: '인수들에서 숫자가 들어있는 개수를 구함',
    Func_ex: '=COUNT(10,20,30)           결과: 3',
  },
  {
    Func_Name: '=COUNTIF(조건범위,조건)',
    Func_Explain: '조건범위에서 조건에 맞는 셀의 개수를 구함',
    Func_ex: '=COUNTIF(A1:A10,”영진”)   결과: [A1:A10]영역에서 “영진”문자열이 입력된 셀 개수를 구함',
  },
  {
    Func_Name: '=CHOOSE(인덱스 번호, 값1, 값2)',
    Func_Explain: '인덱스 번호에 위치에 있는 값을 구함',
    Func_ex: '=CHOOSE(2,”월”,”화”,”수”)           결과:화(2번째에 해당하는 값)',
  },
  {
    Func_Name: '=YEAR(일련번호 또는 날짜 문자열)',
    Func_Explain: '날짜의 연도 부분만 구함',
    Func_ex: '=YEAR(“2022/4/22")            결과: 2022',
  },
  {
    Func_Name: '=MONTH(일련번호 또는 날짜 문자열)',
    Func_Explain: '날짜의 월 부분만 구함',
    Func_ex: '=MONTH(“2022/4/22”)           결과:4 ',
  },
  {
    Func_Name: '=DAY(일련번호 또는 날짜 문자열)',
    Func_Explain: '날짜의 일자 부분만 구함',
    Func_ex: '=DAY(“2022/4/22”)            결과: 22 ',
  },
  {
    Func_Name: '=HOUR(일련번호 또는 시간문자열)',
    Func_Explain: '시간의 시 부분만 구함',
    Func_ex: '=HOUR(“16:13:15”)            결과: 16',
  },
  {
    Func_Name: '=MINUTE(일련번호 또는 시간문자열)',
    Func_Explain: '시간의 분 부분만 구함',
    Func_ex: '=MINUTE(“16:13:15”)          결과: 13',
  },
  {
    Func_Name: '=SECOND(일련번호 또는 시간문자열)',
    Func_Explain: '시간의 초 부분만 구함',
    Func_ex: '=SECOND(“16:13:15”)         결과: 15',
  },
  {
    Func_Name: '=TODAY()',
    Func_Explain: '컴퓨터 시스템의 현재 날짜를 구함',
    Func_ex: '=TODAY()           결과:2022-01-01(현재날짜가 출력됨)',
  },
  {
    Func_Name: '=NOW()',
    Func_Explain: '컴퓨터 시스템의 현재 날짜와 시간을 구함',
    Func_ex: '=NOW()           결과:2022-01-01 12:30(현재 날짜와 시간이 출력됨)',
  },
  {
    Func_Name: '=DATE(연,월,일)',
    Func_Explain: '지정한 연,월,일로 날짜 데이터를 만듬',
    Func_ex: '=DATE(2022,5,10)           결과:2022-5-10',
  },
  {
    Func_Name: '=TIME(시,분,초)',
    Func_Explain: '지정한 시,분,초로 시간 데이터를 만듦',
    Func_ex: '=TIME(12,30,30)           결과:12:30PM',
  },
  {
    Func_Name: '=WEEKDAY(날짜 문자열,종류)',
    Func_Explain: '날짜 문자열의 요일 일련번호를 구함',
    Func_ex: '=WEEKDAY(“2022-10-19”,2)       결과:3 ',
  },
  {
    Func_Name: '=EDATE(시작 날짜, 개월 수)',
    Func_Explain: '시작 날짜에 개월수를 더한 달의 마지막날짜의 일련번호를 구함',
    Func_ex: '=EDATE(“2022-10-19”)                결과: 44884',
  },
  {
    Func_Name: '=LEN(텍스트)',
    Func_Explain: '텍스트의 문자 수를 구함',
    Func_ex: '=LEN(“컴퓨터활용능력1급”)             결과: 9',
  },
  {
    Func_Name: '=LEFT(텍스트,문자수)',
    Func_Explain: '텍스트의 왼쪽에서 지정한 문자수만큼 텍스트를 추출함',
    Func_ex: '=LEFT(“KOREA”,3)               결과: KOR',
  },
  {
    Func_Name: '=MID(텍스트,시작 위치,문자수)',
    Func_Explain: '텍스트의시작 위치에서부터 지정한 문자수만큼 텍스트를추출함',
    Func_ex: '=MID(“KOREA”,3,2)                결과:RE ',
  },
  {
    Func_Name: '=RIGHT(텍스트,문자수)',
    Func_Explain: '텍스트의 오른쪽에서 지정한 문자수만큼 텍스트를 추출함',
    Func_ex: '=RIGHT(“KOREA”,3)                결과: REA',
  },
  {
    Func_Name: '=LOWER(텍스트)',
    Func_Explain: '텍스트를 소문자로 변환함',
    Func_ex: '=LOWER(“KOREA”)               결과: korea',
  },
  {
    Func_Name: '=UPPER(텍스트)',
    Func_Explain: '텍스트를 대문자로 변환함',
    Func_ex: '=UPPER(“korea”)                결과: KOREA',
  },
  {
    Func_Name: '=PROPER(텍스트)',
    Func_Explain: '텍스트 첫 문자만 대문자로 변환하고, 나머지는 소문자로 변환함',
    Func_ex: '=PROPER(“KOREA”)             결과: Korea',
  },
  {
    Func_Name: '=TRIM(텍스트)',
    Func_Explain: '단어 사이에 있는 한칸의 공백을 제외하고 텍스트의 공백을 모두 삭제함',
    Func_ex: '=TRIM(“KOREA 2009”)                결과: KOREA 2009',
  },
];

export default function List({ searchValue }) {

  // 여기서 searchValue를 사용하여 필터링된 데이터를 생성합니다.
  const filteredData = yourData.filter((item) =>
    item.Func_Name.toLowerCase().includes(searchValue.toLowerCase())
  );

return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>함수이름</th>
          <th>함수설명</th>
          <th>예제</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td className='func_name'>{item.Func_Name}</td>
            <td>{item.Func_Explain}</td>
            <td>{item.Func_ex}</td>
          </tr>
        ))}
      </tbody>
    </Table>
)}

// const FunctionList = styled.div`
//   display: flex;
//   border: 1px solid #ddd;
//   align-items: center;
//   background-color: #FBFBFB;
// `



