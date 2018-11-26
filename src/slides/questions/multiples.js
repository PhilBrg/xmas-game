import React from 'react'
import { Appear, Heading, Text, Slide } from 'spectacle'
import Header from '../../components/header'

const multiplesCreator = ({ question, choices, fstep, currentGame, score }) => (
  <Slide transition={["zoom"]} bgColor="lightGreen" align="center top" onActive={fstep}>
    <Header currentGame={currentGame} score={score}/>
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

export default multiplesCreator
