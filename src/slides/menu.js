import React from 'react'
import Sound from 'react-sound'
import inception from '../assets/sound/inception.mp3'
import { Slide, Heading, Appear } from 'spectacle'

const menuCreator = ({ games }) => (
    <Slide transition={['fade']} bgColor="red">
        <Heading size={6} textColor="white" caps>
          Menu
        </Heading>
        {games.map((game, index) => (
            <Appear key={index} fid={index}>
              <div>
                <Sound 
                  url={inception}
                  playStatus={Sound.status.PLAYING}
                />
                <Heading size={3} textColor="lightGreen">
                  {game.name}
                </Heading>
              </div>
            </Appear>
          ))
        }
      </Slide>
);

export default menuCreator