import React from 'react'
import Video from '../components/video'
import { Slide } from 'spectacle'

const introVideoCreator = () => (
  <Slide transition={['fade']}>
    {Video({src: 'intro'})}
  </Slide>
)

export default introVideoCreator
