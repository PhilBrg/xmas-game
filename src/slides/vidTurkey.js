import React from 'react'
import Video from '../components/video'
import { Slide } from 'spectacle'

const vidoeoTurkeyCreator = () => (
  <Slide transition={['fade']}>
    {Video({src: 'dead_turkey'})}
  </Slide>
)

export default vidoeoTurkeyCreator
