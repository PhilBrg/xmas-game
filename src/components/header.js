import React from 'react'
import styled from 'react-emotion'
import { Text, Image } from 'spectacle'
import dwarf from '../assets/img/dwarf.png'
import reindeer from '../assets/img/reindeer.png'

const headerCreator = ({ currentGame, score }) => (
  <StyledHeaderContainer>
    <StyledContainerTeamOne>
      <StyledImage src={dwarf}/>
      <StyledCurrentScore>
        {score.team_1}
      </StyledCurrentScore>
    </StyledContainerTeamOne>
    
    <StyledCurrentGame size={3}>
        {currentGame}
    </StyledCurrentGame>

    <StyledContainerTeamTwo>
      <StyledCurrentScore>
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
  font-size: 25px;
  width: 200px;
  margin: 0px;
  position: fixed;
  top: 12%;
  left: 39%;
`

const StyledCurrentScore = styled(Text)`
  color: #ffffff;
  font-size: 50px;
  padding-right: 10px;
  padding-left: 10px;
  vertical-align: middle;
  padding-top: 25px;
`

const StyledImage = styled(Image)`
  height: 100px;
  width: 100px;
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
