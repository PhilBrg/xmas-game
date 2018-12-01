import React from 'react'
import styled from 'react-emotion'
import { Appear, Heading, Text, Slide } from 'spectacle'
import Header from '../../components/header'

const multiplesCreator = ({ question, choices, fstep, currentGame, currentGameType, score }) => (
  <Slide transition={["fade"]} bgColor="lightGreen" padding="0px" align="center top" onActive={fstep}>
    <Header currentGame={currentGame} currentGameType={currentGameType} score={score}/>
    <Heading size={6} textColor="red" caps>
      {question}
    </Heading>
    {choices.map((choice, index) => (
      <Appear key={index} fid={index}>
        <Text margin="10px 0 0" textColor="red" size={3} bold>
          {choice}
        </Text>
      </Appear>
      ))
    }
  </Slide>
);

const StyledSlide = styled(Slide)`
  padding: 0px !important;
`

export default multiplesCreator
