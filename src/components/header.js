import React from "react";
import styled from 'react-emotion'
import { Text } from "spectacle";

const headerCreator = ({ currentGame, score }) => (
  <StyledHeaderContainer>
    <StyledCurrentScore size={1}>
      equipe lutin : {score.team_1}
    </StyledCurrentScore>
    <StyledCurrentGame size={3}>
      Jeu en cours : {currentGame}
    </StyledCurrentGame>
    <StyledCurrentScore size={4}>
      equipe lutin : {score.team_2}
    </StyledCurrentScore>
  </StyledHeaderContainer>
);

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

export default headerCreator
