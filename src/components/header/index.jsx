import React from 'react'
import { Container, Letreiro, VideoBackground } from './styles'
import videoSource from '../../assets/fundo.mov'
import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <Container>
        <VideoBackground autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
        </VideoBackground>
            <Letreiro>
              <h1><strong>D</strong>eus</h1>
              <h1 id='espacado'><strong>E</strong>stá</h1>
              <h1><strong>A</strong>qui</h1>
            </Letreiro>
            <img src={logo} alt="logo" />
    </Container>
  )
}
