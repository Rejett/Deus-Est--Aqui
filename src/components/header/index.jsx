import React from 'react'
import { Container, Letreiro, VideoBackground } from './styles'
import logo from '../../assets/logo.png'
import video from '../../assets/fundo.mp4'

export default function Header() {
  return (
    <Container>
        <VideoBackground autoPlay muted loop>
          <source src={video} type="video/mp4"/>
          Seu navegador não suporta o elemento de vídeo.
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
