import React from 'react'
import { Container, Letreiro } from './styles'
import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <Container backgroundImage='https://live.staticflickr.com/31337/53389057356_5f55a9745f.jpg'>
            <Letreiro>
              <h1><strong>D</strong>eus</h1>
              <h1 id='espacado'><strong>E</strong>stá</h1>
              <h1><strong>A</strong>qui</h1>
            </Letreiro>
            <img src={logo} alt="logo" id='logoRadio'/>
    </Container>
  )
}
