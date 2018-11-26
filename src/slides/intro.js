import React from 'react'
import { Heading, Slide, Text } from 'spectacle'

const introCreator = ({ title, created_by }) => (
    <Slide transition={['zoom']} bgColor="lightRed">
    <Heading size={1} fit caps lineHeight={1} textColor="red">
      {title}
    </Heading>
    <Text margin="10px 0 0" textColor="white" size={1} fit bold>
      Crée de toute pièce par {created_by}
    </Text>
  </Slide>
)

export default introCreator
