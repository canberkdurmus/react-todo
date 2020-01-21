// rcf tab - function based component
import React from 'react'
import { Heading } from 'evergreen-ui'

export default function About() {
    return (
        <div style={{textAlign: 'center'}} >
            <Heading size={900} marginTop="default">About</Heading>
            <Heading size={600} marginTop="default">The ugliest react to do list app of the world.</Heading>
            <Heading size={600} marginTop="default">Runs on a mock Rest API.</Heading>
            <br></br>
            <Heading size={200} marginTop="default" style={{float:'bottom'}} >cb 2020</Heading>
        </div>
    )
}
