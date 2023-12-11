import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSpring } from 'react-spring';
import { Container, Painel } from './styled'

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
          <img className="card-img-top" src='https://live.staticflickr.com/65535/53389492085_05da223f4f.jpg' alt="Imagem de capa do card" />
          <div className="card-body">
            <h1>WME Studio</h1>
            <p className="card-text">
A WME Studio, sendo uma empresa parceira e criadora do site, oferece uma ampla variedade de serviços na área de design, imagem, audiovisual, programação de sites e aplicativos móveis.</p>
            <button type='button'><a href="https://wa.me/+5519995792413" target="_blank" rel="noreferrer">Acesse Aqui</a></button>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src='https://live.staticflickr.com/65535/53389056211_db0d4fdd24.jpg' alt="Imagem de capa do card" />
          <div className="card-body">
            <h1>AKK -Curso de Inglês-</h1>
            <p className="card-text">
Juntamente com um professor qualificado que reside no exterior há muitos anos e possui experiência qualificada, e utilizando uma nova metodologia de ensino, você terá acesso a um dos melhores cursos de inglês em todo o mundo.</p>
            <button type='button'><a href="https://wa.me/+5519978070404" target="_blank" rel="noreferrer">Acesse Aqui</a></button>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src='https://live.staticflickr.com/65535/53388135572_4121e8abe8.jpg' alt="Imagem de capa do card" />
          <div className="card-body">
          <h1>Bueno`s Pizza Quadrada</h1>
            <p className="card-text">Se você mora na região de Americana, venha conhecer a Pizzaria Bueno s, que inova com suas pizzas em formato quadrado. Destaca-se pela massa de extrema qualidade e sabor, além de recheios e produtos de alta qualidade. Oferecemos o melhor para você e sua família!</p>
            <button type='button'><a href="https://wa.me/+5519993693369" target="_blank" rel="noreferrer">Acesse Aqui</a></button>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src='https://live.staticflickr.com/65535/53389056166_400e9888c9.jpg' alt="Imagem de capa do card" />
          <div className="card-body">
          <h1>AmeriTanques</h1>
            <p className="card-text">Se você trabalha com caminhões e está precisando de uma lavagem, dê uma passada na AmeriTaques. Oferecemos lavagem interna e externa de qualidade, com profissionais eficientes e confiáveis. Seu caminhão terá um tratamento VIP, com o melhor em produtos e serviços para garantir a satisfação do cliente!</p>
            <button type='button'><a href="https://wa.me/+5519983080086" target="_blank" rel="noreferrer">Acesse Aqui</a></button>
          </div>
        </div>
      </Painel>
    </Container>
  )
}
