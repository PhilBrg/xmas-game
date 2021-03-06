import React from 'react'
import styled from 'react-emotion'
import Header from '../components/header'
import { Slide, Text, Appear } from 'spectacle'

const rulesCreator = ({ currentGame, currentGameType, fname, rules, scores }) => (
    <Slide 
      transition={["fade"]} 
      bgColor="green40" 
      align="center top" 
      margin-bottom="0px"
      onActive={fname}
    >
      <Header 
        currentGame={currentGame}
        currentGameType={currentGameType}
        scores={scores}
      />
      {rules.map((rule, index) => (
        <Appear key={index} fid={index}>
          <StyledRule>
            {rule}
          </StyledRule>
        </Appear>
      ))}
    </Slide>
)

const StyledRule = styled(Text)`
  color: #ffffff;
  font-size: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
`

export default rulesCreator
