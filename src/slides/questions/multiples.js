import React from 'react'
import styled from 'react-emotion'
import { Appear, Heading, Text, Slide } from 'spectacle'
import Header from '../../components/header'

const multiplesCreator = ({ question, choices, fstep, currentGame, currentGameType, score }) => (
  <Slide 
    transition={["fade"]} 
    bgColor="green20"
    padding="0px" 
    align="center top" 
    onActive={fstep}>
    <Header currentGame={currentGame} currentGameType={currentGameType} score={score}/>
    <StyledQuestion textColor="white">
      {question}
    </StyledQuestion>
    {choices.map((choice, index) => (
      <Appear key={index} fid={index}>
        <StyledText>
          {choice}
        </StyledText>
      </Appear>
      ))
    }
  </Slide>
)

const StyledQuestion = styled(Heading)`
  font-size: 40px;
  margin-bottom: 20px;
`

const StyledText = styled(Text)`
  font-size: 35px;
  color: #0c7D21;
  padding-bottom: 20px;
`


export default multiplesCreator
