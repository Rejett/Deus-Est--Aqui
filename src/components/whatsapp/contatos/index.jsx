import React from 'react'
import { Container, Painel } from './styles'
import instagram from '../../../assets/instagram.png'
import facebook from '../../../assets/facebook.png'
import youtube from '../../../assets/youtube.png'

export default function Contato() {
  return (
    <Container>
      <h1 id='titulo'>Acesse nossas redes Sociais:</h1>
      <Painel>
        <a href="https://www.instagram.com/radio_deusestaaqui/" target='_blank' rel="noreferrer">
          <div>
            <img src={instagram} alt="Logo-Instagram" id='instagram'/>
            <h1 className='redesSociais'>@Radio_Deusestaaqui</h1>
          </div>
        </a>
        <a href="https://www.facebook.com/radiodeusestaaqui" target='_blank' rel="noreferrer">
          <div id='divFacebook'>
            <img src={facebook} alt="Logo-facebook" id='facebook'/>
            <h1 className='redesSociais'>@radiodeusestaaqui</h1>
          </div>
        </a>
        <a href="https://www.facebook.com/radiodeusestaaqui" target='_blank' rel="noreferrer">
          <div>
            <img src={youtube} alt="Logo-youtube" id='youtube'/>
            <h1 className='redesSociais'>Rádio Deus Está Aqui</h1>
          </div>
        </a>
      </Painel>
    </Container>
  )
}
