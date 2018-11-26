import React from "react";
import { Slide, Heading, Appear } from "spectacle";

const menuCreator = ({ games }) => (
    <Slide transition={['fade']} bgColor="red">
        <Heading size={6} textColor="white" caps>
          Menu
        </Heading>
        {games.map((game, index) => (
          <Appear key={index} fid={index}>
            <Heading size={3} textColor="lightGreen">
              {game.name}
            </Heading>
          </Appear>
          ))
        }
      </Slide>
);

export default menuCreator
