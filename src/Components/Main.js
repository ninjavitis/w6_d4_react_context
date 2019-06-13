import React from 'react';
import styled from 'styled-components'

const Main = () => (
  <MainContainer>
    <MainBox>
    <MainText>CONTEXNEURAL</MainText>
    </MainBox>
  </MainContainer>
);

const MainContainer=styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  height:800px;
  min-height:100%;
	flex-direction: column;

  background-color:#222222;
`;

const MainBox=styled.div`
  display:flex
`;

const MainText = styled.h1`
  color: #ff0039 !important;
  text-align: center;
  font-size:150px;
`;

export default Main;