import React from 'react'
import intro from '../assets/img/intro.png'
import { Slide } from 'spectacle'

const introCreator = () => (
  <Slide transition={['fade']} bgImage={intro}>
  </Slide>
)

export default introCreator
