import React from 'react'
import styled from 'react-emotion'
import { Text, Image } from 'spectacle'
import { imgMapping } from '../tools/imgMapping'
import dwarf from '../assets/img/dwarf.png'
import reindeer from '../assets/img/reindeer.png'

const headerCreator = ({ currentGame, currentGameType, scores }) => (
  <StyledHeaderContainer>
    <StyledContainerTeamOne>
      <StyledImageTeam src={dwarf}/>
      <StyledCurrentScore>
        {String(scores[0].count)}
      </StyledCurrentScore>
    </StyledContainerTeamOne>
    
    <StyledImageCurrentGame src={imgMapping[currentGameType]} />

    <StyledContainerTeamTwo>
      <StyledCurrentScore>
        {scores[1].count}
      </StyledCurrentScore>
      <StyledImageTeam src={reindeer}/>
    </StyledContainerTeamTwo>
  </StyledHeaderContainer>
)

const StyledHeaderContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  top:0;
`

const StyledCurrentScore = styled(Text)`
  color: #ffffff;
  font-size: 50px;
  padding-right: 10px;
  padding-left: 10px;
  vertical-align: middle;
  padding-top: 25px;
`

const StyledImageTeam = styled(Image)`
  height: 100px;
  width: 100px;
`

const StyledImageCurrentGame= styled(Image)`
  height: 100px;
  width: 100px;
  position: fixed;
  top: 5%;
  left: 44%;
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
