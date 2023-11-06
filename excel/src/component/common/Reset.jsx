import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Reset() {
  const location = useLocation();
  const navigate = useNavigate();
  let thisLevel;

  const stageReset = () => {
    if (location.pathname === '/intern') {
      thisLevel = 'intern';
    } else if (location.pathname === '/beginer') {
      thisLevel = 'beginer';
    } else if (location.pathname === '/expert') {
      thisLevel = 'expert';
    } else {
      thisLevel = 'test';
    }

    Swal.fire({
      title: '처음부터 다시 푸시겠어요?',
      text: '다시 돌아갈 수 없습니다.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '처음으로 돌아갈게요',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('처리 완료되었습니다', '첫 번째 문제로 돌아갑니다.', 'success').then(() => {
          // 로컬 스토리지에서 해당 레벨의 스테이지를 1로 설정
          localStorage.setItem(`stage_${thisLevel}`, '1');
          // 해당 레벨의 처음 문제로 이동
          navigate(`/${thisLevel}`);
        });
      }
    });
  };

  return <Button onClick={stageReset}>처음부터 문제풀기</Button>;
}

const Button = styled.button`
  font-size: 15px;
  width: 180px;
  padding: 2px;
  border-radius: 4px;
  font-family: 'GmarketSansMedium';
  &:hover {
    background-color: #4B504B;
    color: #fff;
  }
`;
