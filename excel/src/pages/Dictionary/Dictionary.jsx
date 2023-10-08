import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import List from '../../component/common/List';
import Search from '../../component/Search';

export default function Dictionary() {

  const [searchValue, setSearchValue] = useState('');

  return (
    <DictionaryWrapper>
      {/* Search 컴포넌트에 검색어와 검색어 업데이트 함수를 전달합니다. */}
      <Search setSearchValue={setSearchValue} />
      {/* List 컴포넌트에 검색어를 전달합니다. */}
      <List searchValue={searchValue} />
    </DictionaryWrapper>
  )
}

const DictionaryWrapper = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin-top: 2rem;
`

const FunctionList = styled.div`
  display: flex;
  border: 1px solid #ddd;
  align-items: center;
  background-color: #ddd;
`

const FunctionNameWrapper = styled.div`
  display:flex;
  align-items: center;
`

const FunctionName = styled.h3`
  font-size: 1.3rem;
`

const FunctionExplainWrapper = styled.div`
  display: flex;
  margin-top: 4px;
  justify-content: center;
`

const FunctionExplain = styled.p`
  font-size: 1rem;
`


