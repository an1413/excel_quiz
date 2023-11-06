import React from 'react'
import Header from '../../component/Header'
import { Img, LevelButton, LevelContainer, LevelImg, LevelName, Main } from './homeFeed.style'
import 'bootstrap/dist/css/bootstrap.min.css';
import Newbie from "../../img/newbie3.png"
import Intern from "../../img/promotion3.png";
import Expert from "../../img/rating3.png";
import Test from "../../img/exam3.png";
import { useNavigate } from "react-router-dom";

export default function HomeFeed() {
  const navigate = useNavigate();

  const linkNewbie = () => {
    navigate("/beginer");
  }

  const linkIntern = () => {
    navigate("/intern");
  }

  const linkExpert = () => {
    navigate("/expert");
  }

  const linkTest = () => {
    navigate("/test");
  }
  
  return (
    <>
      <Header/>
      <div className='container'>
        <div className='row'>
          <LevelContainer className='col col-md-3 col-lg-3'>
            <LevelImg>
              <Img
                aria-label="채팅방 이동버튼"
                src={
                  Newbie
                }
                alt="초급문제풀이"
              />
            </LevelImg>
            <LevelName>초급</LevelName>
            <LevelButton onClick={linkNewbie}>
              입장하기
            </LevelButton>
          </LevelContainer>

          <LevelContainer className='col col-md-3 col-lg-3'>
            <LevelImg>
              <Img
                aria-label="채팅방 이동버튼"
                src={
                  Intern
                }
                alt="중급문제풀이"
              />
            </LevelImg>
            <LevelName>중급</LevelName>
            <LevelButton onClick={linkIntern}>
              입장하기
            </LevelButton>
          </LevelContainer>

          <LevelContainer className='col col-md-3 col-lg-3'>
            <LevelImg>
              <Img
                aria-label="채팅방 이동버튼"
                src={
                  Expert
                }
                alt="고급문제풀이"
              />
            </LevelImg>
            <LevelName>고급</LevelName>
            <LevelButton onClick={linkExpert}>
              입장하기
            </LevelButton>
          </LevelContainer>
          <LevelContainer className='col col-md-3 col-lg-3'>
            <LevelImg>
              <Img
                aria-label="채팅방 이동버튼"
                src={
                  Test
                }
                alt="전체 모의고사"
              />
            </LevelImg>
            <LevelName>시험보기</LevelName>
            <LevelButton onClick={linkTest}>
              입장하기
            </LevelButton>
          </LevelContainer>
        </div>
      </div>
    </>
  )
}
