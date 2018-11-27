import React from "react";
import styled from 'react-emotion'
import { Text, Slide } from "spectacle";
import Header from '../../components/header'


const singleCreator = ({ question, fstep, currentGame, score }) => (
  <StyledSlide transition={["fade"]} bgColor="lightGreen" padding="0px" align="center top" onActive={fstep}>
    <Header currentGame={currentGame} score={score}/>
    <Text size={6} textColor="red" caps>
      {question}
    </Text>
  </StyledSlide>
);

const StyledSlide = styled(Slide)`
  div > {
    padding: none! important;
  }
`

export default singleCreator
