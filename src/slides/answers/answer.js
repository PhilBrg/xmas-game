import React from "react";
import { Slide, Text } from "spectacle";
import Header from '../../components/header'

const answerCreator = ({ answer, currentGame, score }) => (
    <Slide transition={["zoom"]} align="center top" bgColor="lightRed">
      <Header currentGame={currentGame} score={score}/>
      <Text margin="10px 0 0" textColor="green" size={1} fit bold>
        {answer}
      </Text>
    </Slide>
);

export default answerCreator
