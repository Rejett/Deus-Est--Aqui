import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSpring } from 'react-spring';
import { Container, Painel } from './styled'
import logoWME from '../../assets/wme_logo.png'
import logoAKK from '../../assets/logoAKK.jpeg'
import logoPizza from '../../assets/logoPizza.jpeg'
import logoTanque from '../../assets/LogoTanques.png'

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
          <img className="card-img-top" src={logoWME} alt="Imagem de capa do card" />
          <div className="card-body">
            <h1>WME Studio</h1>
            <p className="card-text">A WME Studio sendo uma empresa parceira e criadora do site, possui uma gama de variedade de prestações de serviço na area de desing, imagem, audiovisual, Programação de sites e aplicativos mobile</p>
            <button type='button'><a href="https://wa.me/+5519995792413" target="_blank" rel="noreferrer">Acesse Aqui</a></button>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={logoAKK} alt="Imagem de capa do card" />
          <div className="card-body">
            <h1>AKK -Curso de Inglês-</h1>
            <p className="card-text">Juntamente de um Porfessor qualificado no qual mora no exterior a muitos anos e com experiência qualificada! com uma nova metodologia de Ensino você terá acesso a um dos melhores cursos de inglês do mundo todo</p>
            <button type='button'><a href="https://wa.me/+5519978070404" target="_blank" rel="noreferrer">Acesse Aqui</a></button>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={logoPizza} alt="Imagem de capa do card" />
          <div className="card-body">
          <h1>Bueno`s Pizza Quadrada</h1>
            <p className="card-text">Você que mora na região de Americana venha conhecer a Pizzaria Bueno`s com sua inovação de pizza em formato Quadrado, ela se destaca por sua massa de extrema qualidade e sabor, com recheios e produtos de qualidade, tudo do bom e do melhor para você e sua família!</p>
            <button type='button'><a href="https://wa.me/+5519993693369" target="_blank" rel="noreferrer">Acesse Aqui</a></button>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={logoTanque} alt="Imagem de capa do card" />
          <div className="card-body">
          <h1>AmeriTanques</h1>
            <p className="card-text">VocÊ que tranabalha com caminhões está precisando de uma lavagem? de uma passada na AmeriTaques lavagem interna e externa de qualidade com profissionais eficientes e de confiança o seu caminhão terá um tratamento VIP com tudo do bom e do melhor para seu Caminhão!</p>
            <button type='button'><a href="https://wa.me/+5519983080086" target="_blank" rel="noreferrer">Acesse Aqui</a></button>
          </div>
        </div>
      </Painel>
    </Container>
  )
}
