import React from "react";
import styled from 'react-emotion'
import { Text, Slide } from "spectacle";
import Header from '../../components/header'


const singleCreator = ({ question, fstep, currentGame, currentGameType, score }) => (
  <Slide 
    transition={["fade"]} 
    bgColor="green20" 
    padding="0px" 
    align="center top" 
    onActive={fstep}
  >
    <Header 
      currentGame={currentGame} 
      currentGameType={currentGameType} 
      score={score}
    />
    <StyledQuestion>
      {question}
    </StyledQuestion>
  </Slide>
)

const StyledQuestion = styled(Text)`
  color: #0c7D21;
  font-size: 50px;
`

export default singleCreator
