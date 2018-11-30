import React from 'react'
import styled from 'react-emotion'
import { Slide, Heading, Text, Appear } from 'spectacle'

const menuCreator = ({ games }) => (
    <Slide transition={['fade']} bgColor="red40">
        <StyledMenu textColor="white" caps>
          Menu
        </StyledMenu>
        {games.map((game, index) => (
            <Appear key={index} fid={index}>
              <StyledText size={3} textColor="yellow">
                {game.name}
              </StyledText>
            </Appear>
          ))
        }
      </Slide>
)

const StyledMenu = styled(Heading)`
  font-size: 33px;
  margin-bottom: 45px;
  letter-spacing: 1px;
`

const StyledText = styled(Text)`
  font-size: 50px;
  padding-bottom: 20px;
`

export default menuCreator
