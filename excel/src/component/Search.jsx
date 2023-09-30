import React from 'react'
import styled from 'styled-components';
import iconSearch from "../img/icon-search.svg"

export default function Search() {
  return (
    <SearchWrap>
   <SearchMain>
      <SearchTerm placeholder="함수를 검색하세요" />
      <SearchButton type="submit">
        <SearchIcon src={iconSearch}/>
     </SearchButton>
   </SearchMain>
  </SearchWrap>
  )
}

const SearchIcon= styled.img`
  width: 85%;
`

const SearchWrap = styled.div`
  width: 30%;
  position: static;
  top: 10%;
  left: 5%;
  transform: translate(-100%, -50%);
`

const SearchMain = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  margin-bottom: 0rem;
`

const SearchTerm = styled.input`
  width: 100%;
  border: 3px solid #00B4CC;
  border-right: none;
  padding: 5px;
  height: 30px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9DBFAF;
    &:focus {
      color: #00B4CC;
    }
`

const SearchButton = styled.button`
  width: 40px;
  height: 36px;
  border: 1px solid #00B4CC;
  background: #00B4CC;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
`
