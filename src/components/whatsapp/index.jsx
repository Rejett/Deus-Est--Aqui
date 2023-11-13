import React from 'react'
import { WhatsAppButtonContainer } from './styled'
import whatsapp from '../../assets/Whatsapp.gif'

export default function Whatsapp() {
  return (
    <WhatsAppButtonContainer>
      <a href="https://wa.me/+5519988687106" target="_blank" rel="noreferrer"><img src={whatsapp} alt="Botão whatsapp" /></a>
    </WhatsAppButtonContainer>
  )
}
