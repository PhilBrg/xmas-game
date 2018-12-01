import React from 'react'
import intro from '../assets/img/intro.jpg'
import { Slide } from 'spectacle'

const introCreator = ({ title, created_by }) => (
    <Slide transition={['zoom']} bgImage={intro}>
  </Slide>
)

export default introCreator
