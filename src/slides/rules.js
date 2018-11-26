import React from "react";
import { Slide, Text, Appear } from "spectacle";

const rulesCreator = ({ rules, fname }) => (
    <Slide transition={["zoom"]} bgColor="green" onActive={fname}>
      {rules.map((rule, index) => (
        <Appear key={index} fid={index}>
          <Text margin="10px 0 0" textColor="lightRed" size={1} fit bold>
            {rule}
          </Text>
        </Appear>
      ))}
    </Slide>
);

export default rulesCreator
