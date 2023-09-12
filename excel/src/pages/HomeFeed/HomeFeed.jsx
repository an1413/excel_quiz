import React from 'react'
import Header from '../../component/Header'
import { Img, LevelButton, LevelContainer, LevelImg, LevelName, Main } from './homeFeed.style'
import 'bootstrap/dist/css/bootstrap.min.css';
import newbie from "../../img/newbie3.png"

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
                  newbie
                }
                alt="뉴비"
              />
            </LevelImg>
            <LevelName>초급</LevelName>
            <LevelButton/>
          </LevelContainer>

          <LevelContainer className='col col-md-4 col-lg-4'>
            <LevelImg/>
            <LevelName>중급</LevelName>
            <LevelButton/>
          </LevelContainer>

          <LevelContainer className='col col-md-4 col-lg-4'>
            <LevelImg/>dd
            <LevelName>고급</LevelName>
            <LevelButton/>
          </LevelContainer>
        </div>
      </div>
    </>
  )
}
