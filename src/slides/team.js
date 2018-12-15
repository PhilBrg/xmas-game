import React from 'react'
import styled from 'react-emotion'
import imgMapping from '../tools/imgMapping'
import { Slide, Text, Appear, Image } from 'spectacle'

const teamCreator = ({ teams }) => (
    <Slide transition={['fade']} bgColor="red40">
        <TeamNameWrapper>
            <StyledImageTeam src={imgMapping['dwarf']} />
            <StyledImageTeam src={imgMapping['reindeer']} />
        </TeamNameWrapper>
        <HorizontalSeparator />
        <TeamWrapper>
            <Column>
                {teams[0].map((e, i) => (
                        <Appear key={i} fid={i}>
                        <StyledText textColor="yellow">
                            {e}
                        </StyledText>
                        </Appear>
                    )
                )}
            </Column>
            <VerticalSeparator />
            <Column>
                {teams[1].map((e, i) => (
                        <Appear key={i} fid={i}>
                        <StyledText textColor="yellow">
                            {e}
                        </StyledText>
                        </Appear>
                    )
                )}
            </Column>
        </TeamWrapper>
      </Slide>
)

const Column = styled('div')`
    display: flex;
    flex-direction: column;
    padding: 50px;
`

const StyledImageTeam = styled(Image)`
  height: 100px;
  width: 100px;
  box-shadow: 1px -1px 14px 0px #c0c5ce;
  background-color: #74d680;
  border-radius: 50%;
  padding: 5px;
`

const StyledText = styled(Text)`
    font-size: 50px;
    padding-bottom: 20px;
`

const TeamNameWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`

const TeamWrapper = styled('div')`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    padding: 20px;
`

const HorizontalSeparator = styled('div')`
    width: 100%;
    height: 2px;
    background-color: white;
    padding: 1px;
`

const VerticalSeparator = styled('div')`
    width: 2px;
    padding: 1px;
    height: 550px;
    background-color: white;
`

export default teamCreator
