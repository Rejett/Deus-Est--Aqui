import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSpring } from 'react-spring';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useInView } from 'react-intersection-observer';
import {
  Container,
  Texto,
  Image,
  TextoPod,
  Botao,
  LinhaCentro,
  FundoLaranja,
  NuvemSuperior,
  NuvemInferior
} from './styles';
import parceria from '../../assets/parceria.png';
import logo from '../../assets/radiologo.PNG';
import nuvem from '../../assets/nuvem.png';
import montanha from '../../assets/montanha.png';

export default function Body() {
  const [refSup, inViewSup] = useInView({
    triggerOnce: true, // Garante que a animação só ocorra uma vez
  });
  const [refMid, inViewMid] = useInView({
    triggerOnce: true, // Garante que a animação só ocorra uma vez
  });

  const [refBot, inViewBot] = useInView({
    triggerOnce: true, // Garante que a animação só ocorra uma vez
  });

  const propsSup = useSpring({
    opacity: inViewSup ? 1 : 0,
    config: { duration: 1000 }, // Define a duração da transição
    delay: inViewSup ? 0 : 5000, // Aplica um atraso na transição se inViewSup for falso
  });

  const propsMid = useSpring({
    opacity: inViewMid ? 1 : 0,
    config: { duration: 1000 },
    delay: inViewMid ? 0 : 5000,
  });

  const propsBot = useSpring({
    opacity: inViewBot ? 1 : 0,
    config: { duration: 1000 },
    delay: inViewBot ? 0 : 5000,
  });

  return (
      <Container>
        <h1>Sobre a Rádio</h1>
        <NuvemSuperior src={nuvem} alt="nuvem" id="nuvem-superior" style={propsSup} ref={refSup}/>
        <Texto style={propsSup} ref={refSup}>
          <div id="texto-sobre">
            <p>
              A Rádio Deus Está Aqui é uma Webradio Gospel, com o objetivo de
              entregar a palavra do Senhor de forma online. Trabalhamos com
              qualidade e amor para desenvolver uma plataforma web de alta
              performance.
            </p>
          </div>
          <Image src={logo} alt="LogoMarca" />
        </Texto>
        <NuvemInferior src={nuvem} alt="nuvem" id="nuvem-inferior"  style={propsSup} ref={refSup}/>
        <LinhaCentro />
        <TextoPod style={propsMid} ref={refMid}>
          <div id="texto-sobre">
            <p>
              Além disso, oferecemos a opção de podcast, permitindo que você
              aprenda sobre diversas áreas. Nossa meta é ajudar cada vez mais as
              pessoas a se aproximarem da palavra de Deus.
            </p>
          </div>
          <iframe
            width="840"
            height="440"
            src="https://www.youtube.com/embed/6XGp5dlrZv0?si=CYOEZSHMha1KeCFu"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={propsMid} ref={refMid}
          />
          <Botao style={propsMid} ref={refMid}>
            <a
              href="https://www.youtube.com/@deusestaaqui2449"
              target="_blank"
              rel="noreferrer"
            >
              Acesse Aqui
            </a>
          </Botao>
        </TextoPod>
        <div id="grupoMontanha">
          <img src={nuvem} alt="nuvem" id="nuvemMontanhaDireita" />
          <img src={montanha} alt="montanha" id="montanha" />
          <img src={nuvem} alt="nuvem" id="nuvemMontanhaEsquerda" />
        </div>
        <FundoLaranja>
          <h1>Atenção !</h1>
          <Texto style={propsBot} ref={refBot}>
            <Image src={parceria} alt="parceria" style={propsBot} ref={refBot}/>
            <div id="texto-sobre">
              <p>
                A Rádio Deus Está Aqui desenvolvendo formas inovadoras de
                divulgação para parceiros através da internet.
              </p>
              <p>
                Se você está interessado em dar visibilidade para sua empresa,
                essa é a sua chance de alavancar seus negócios
              </p>
            </div>
          </Texto>
          <TextoPod style={propsBot} ref={refBot}>
            <div id="texto-sobre">
              <p>
                Oferecemos uma variedade de opções, incluindo a participação em
                nosso podcast, onde sua empresa pode ser apresentada e discutida
                ao vivo. Você pode ter inserções em nossa programação da WebRadio
                e muito mais
              </p>
            </div>
          </TextoPod>
        </FundoLaranja>
      </Container>
  );
}
