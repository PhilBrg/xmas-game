import React from 'react'
import imgMapping from '../tools/imgMapping'
import { Slide } from 'spectacle'

const endGameCreator = ({ questions }) => (
  <Slide
    transition={['fade']}
    bgImage={imgMapping['deadTurkeyScreen']}
    notes={questions.map((question) => ` // ${question.choices} // `)}
  >
  </Slide>
)

export default endGameCreator
