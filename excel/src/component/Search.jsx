import React from 'react'
import styled from 'styled-components';
import iconSearch from "../img/icon-search.svg"

export default function Search({ setSearchValue }) {
  const handleInputChange = (e) => {
    // 검색어를 상위 컴포넌트로 전달합니다.
    setSearchValue(e.target.value);
  };


  return (
    <SearchWrap>
    <SearchMain>
      <SearchTerm
          placeholder="함수를 검색하세요"
          onChange={handleInputChange}
        />
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
  border: 3px solid #D7CEC7;
  border-right: none;
  padding: 5px;
  height: 36px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #D7CEC7;
    &:focus {
      color: #000;
    }
`

const SearchButton = styled.button`
  width: 40px;
  height: 36px;
  border: 1px solid #D7CEC7;
  background: #D7CEC7;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
`
