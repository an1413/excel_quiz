import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import List from '../../component/common/List';
import Search from '../../component/Search';

export default function Dictionary() {
  return (
    <DictionaryWrapper>
      <Search/>
      <FunctionList>
      <FunctionNameWrapper>
        <FunctionName>
          함수명
        </FunctionName>
      </FunctionNameWrapper>
      <FunctionExplainWrapper>
        <FunctionExplain>
          함수설명
        </FunctionExplain>
      </FunctionExplainWrapper>

    </FunctionList>
      <List/>
      <List/>
      <List/>
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


