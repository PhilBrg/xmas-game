import React from 'react'
import { Slide, Text } from 'spectacle'
import styled from 'react-emotion'
import Header from '../../components/header'

const answerCreator = ({ answer, currentGame, currentGameType, scores }) => (
    <Slide 
      transition={["fade"]}
      align="center top" 
      bgColor="yellow"
      padding="0"
    >
      <Header 
        currentGame={currentGame}
        currentGameType={currentGameType}
        scores={scores}
      />
      <StyledAnswer>
        {answer}
      </StyledAnswer>
    </Slide>
)

const StyledAnswer = styled(Text)`
  color: #0c7D21;
  font-size: 50px;
`

export default answerCreator
