import React from 'react'
import { Slide, Text } from 'spectacle'
import Sound from 'react-sound'

import eddy_malou from '../../assets/sound/eddy-malou.mp3'
import Header from '../../components/header'

const answerCreator = ({ answer, currentGame, score }) => (
    <Slide 
      transition={["zoom"]}
      align="center top" 
      bgColor="lightRed"
    >
      <Header 
        currentGame={currentGame}
        score={score}
      />
      <Text 
        margin="10px 0 0"
        textColor="green"
        size={1}
        fit
        bold
      >
        {answer}
      </Text>
      <Sound 
        url={eddy_malou}
        playStatus={Sound.status.PLAYING}
      />
    </Slide>
)

export default answerCreator
