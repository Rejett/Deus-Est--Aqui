import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSpring } from 'react-spring';
import { Container, Painel } from './styled'
import logoLanchonete from '../../assets/lanchoneteExemplo.png'
import logoDistribuidora from '../../assets/distribuidora.png'
import logoLoja from '../../assets/lojaRoupas.png'


export default function Patrocinadores() {

  const [refSup, inViewSup] = useInView({
    triggerOnce: true, // Garante que a animação só ocorra uma vez
  });

  const propsSup = useSpring({
    opacity: inViewSup ? 1 : 0,
    config: { duration: 1000 }, // Define a duração da transição
    delay: inViewSup ? 0 : 5000, // Aplica um atraso na transição se inViewSup for falso
  });

  return (
    <Container>
      <h1>Nossos Patrocinadores:</h1>
      <Painel style={propsSup} ref={refSup}>
        <div className="card">
          <img className="card-img-top" src={logoLanchonete} alt="Imagem de capa do card" />
          <div className="card-body">
            <h1>Lanchonete Bem Estar!</h1>
            <p className="card-text">Deliciosa Lanchonete com um incrivel cardápio que de lamber os lábios! você não pode perder os incriveis sabores apresentados por esse lanchonete, venha conferir clicando no botão a baixo!</p>
            <button type='button'><a href="https://wa.me/+5519986066401" target="_blank" rel="noreferrer">Acesse Aqui</a></button>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={logoDistribuidora} alt="Imagem de capa do card" />
          <div className="card-body">
            <h1>CBA - Distribuidora</h1>
            <p className="card-text">Como uma distribuidora líder, nos destacamos por oferecer produtos de alta qualidade e serviços eficientes para atender às demandas do mercado. Com uma vasta gama de produtos em nosso portfólio, desde eletrônicos a produtos de consumo.</p>
            <button type='button'><a href="https://wa.me/+5519986066401" target="_blank" rel="noreferrer">Acesse Aqui</a></button>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={logoLoja} alt="Imagem de capa do card" />
          <div className="card-body">
          <h1>Lovely Clotches</h1>
            <p className="card-text">Como uma distribuidora líder, nos destacamos por oferecer produtos de alta qualidade e serviços eficientes para atender às demandas do mercado. Com uma vasta gama de produtos em nosso portfólio, desde eletrônicos a produtos de consumo.</p>
            <button type='button'><a href="https://wa.me/+5519986066401" target="_blank" rel="noreferrer">Acesse Aqui</a></button>
          </div>
        </div>
      </Painel>
    </Container>
  )
}
