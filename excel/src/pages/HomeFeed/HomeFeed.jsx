import React from 'react'
import Header from '../../component/Header'
import { Img, LevelButton, LevelContainer, LevelImg, LevelName, Main } from './homeFeed.style'
import 'bootstrap/dist/css/bootstrap.min.css';
import Newbie from "../../img/newbie3.png"
import Intern from "../../img/promotion3.png";
import Expert from "../../img/rating3.png";

export default function HomeFeed() {
  return (
    <>
      <Header/>
      <div className='container'>
        <div className='row'>
          <LevelContainer className='col col-md-4 col-lg-4'>
            <LevelImg>
              <Img
                aria-label="채팅방 이동버튼"
                src={
                  Newbie
                }
                alt="뉴비"
              />
            </LevelImg>
            <LevelName>초급</LevelName>
            <LevelButton>
              입장하기
            </LevelButton>
          </LevelContainer>

          <LevelContainer className='col col-md-4 col-lg-4'>
            <LevelImg>
              <Img
                aria-label="채팅방 이동버튼"
                src={
                  Intern
                }
                alt="뉴비"
              />
            </LevelImg>
            <LevelName>중급</LevelName>
            <LevelButton>
              입장하기
            </LevelButton>
          </LevelContainer>

          <LevelContainer className='col col-md-4 col-lg-4'>
            <LevelImg>
              <Img
                aria-label="채팅방 이동버튼"
                src={
                  Expert
                }
                alt="뉴비"
              />
            </LevelImg>
            <LevelName>고급</LevelName>
            <LevelButton>
              입장하기
            </LevelButton>
          </LevelContainer>
        </div>
      </div>
    </>
  )
}
