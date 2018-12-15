import React from 'react'
import Fullscreen from "react-full-screen";
import videoMapping from '../tools/videoMapping'

const videoCreator = ({ src }) => (
    <Fullscreen enabled={true}>
        <video width="100%" height="100%" autoPlay>
            {console.log(videoMapping[src])}
            <source src={videoMapping[src]} type="video/mp4" />
        </video>
    </Fullscreen>
)

export default videoCreator
