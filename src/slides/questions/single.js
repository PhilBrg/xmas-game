import React from "react";
import { Text, Slide } from "spectacle";
import Header from '../../components/header'


const singleCreator = ({ question, fstep, currentGame, score }) => (
  <Slide transition={["slide"]} bgColor="lightGreen" align="center top" onActive={fstep}>
    <Header currentGame={currentGame} score={score}/>
    <Text size={6} textColor="red" caps>
      {question}
    </Text>
  </Slide>
);

export default singleCreator
