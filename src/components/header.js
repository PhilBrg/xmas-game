import React from 'react'
import styled from 'react-emotion'
import { Text, Image } from 'spectacle'
import lutin from '../assets/img/lutin.png'
import reindeer from '../assets/img/rennes.png'

const headerCreator = ({ currentGame, score }) => (
  <StyledHeaderContainer>
    <StyledContainerTeamOne>
      <StyledImage src={reindeer}/>
      <StyledCurrentScore size={1}>
        {score.team_1}
      </StyledCurrentScore>
    </StyledContainerTeamOne>
    
    <StyledCurrentGame size={3}>
      Jeu en cours : {currentGame}
    </StyledCurrentGame>

    <StyledContainerTeamTwo>
      <StyledCurrentScore size={4}>
        {score.team_2}
      </StyledCurrentScore>
      <StyledImage src={reindeer}/>
    </StyledContainerTeamTwo>
  </StyledHeaderContainer>
)

const StyledHeaderContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  margin-bottom: 180px;
  top:0;
`

const StyledCurrentGame = styled(Text)`
  color: #ffffff;
  font-size: 16px;
`

const StyledCurrentScore = styled(Text)`
  color: #ffffff;
  font-size: 16px;
`

const StyledImage = styled(Image)`
  max-height: 150px;
`

const StyledContainerTeamOne = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const StyledContainerTeamTwo = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export default headerCreator
