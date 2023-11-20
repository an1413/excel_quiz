import React from 'react'
import { CardTitle, CardWrapper, ListGroupItem, ListGroup } from './functionKnow.style';
import "../../db/function.json";
import { useLocation, useNavigate } from 'react-router-dom';
import FunctionProblem from '../FunctionProblem/FunctionProblem'; // 추가된 부분
import data from "../../db/function.json"

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