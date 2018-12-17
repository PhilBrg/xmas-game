import React from 'react'
import Video from '../components/video'
import { Slide } from 'spectacle'

const vidoeoTurkeyCreator = () => (
  <Slide transition={['fade']}>
    {Video({src: 'dead_turkey', loop: false})}
  </Slide>
)

export default vidoeoTurkeyCreator
