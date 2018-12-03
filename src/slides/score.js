import React from 'react'
import imgMapping from '../tools/imgMapping'
import { Slide } from 'spectacle'

const scoreCreator = ({ currentGameType, scores }) => (
  <Slide transition={['fade']} bgImage={imgMapping[currentGameType]}>
  </Slide>
)

export default scoreCreator
