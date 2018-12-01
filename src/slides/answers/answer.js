import React from 'react'
import { Slide, Text } from 'spectacle'
import styled from 'react-emotion'
import Header from '../../components/header'

const answerCreator = ({ answer, currentGame, currentGameType, score }) => (
    <Slide 
      transition={["fade"]}
      align="center top" 
      bgColor="yellow"
      padding="0"
    >
      <Header 
        currentGame={currentGame}
        currentGameType={currentGameType}
        score={score}
      />
      <Text 
        margin="10px 0 0"
        textColor="green40"
        size={1}
        fit
        bold
      >
        {answer}
      </Text>
    </Slide>
)

export default answerCreator
