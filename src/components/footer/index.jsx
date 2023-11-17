/* eslint-disable react/self-closing-comp */
import React, { useEffect } from 'react'
import { Container, Painel } from './styles'

// AIzaSyCysZeFkll1KmpVyx8gSqMzgthVjy00Sk8


function MapContainer() {
  useEffect(() => {
    // A função initMap será chamada quando o script for carregado
    window.initMap = () => {
      // Código de inicialização do mapa
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -22.769054309650794, lng: -47.32870981845047 },
        zoom: 14,
      });

      // Adicione um marcador
      // eslint-disable-next-line no-new
      new window.google.maps.Marker({
        position: { lat: -22.769054309650794, lng: -47.32870981845047 },
        map,
        title: 'Localização do Site',
      });
    };

    // Carregue o script da API do Google Maps dinamicamente
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCysZeFkll1KmpVyx8gSqMzgthVjy00Sk8&callback=initMap&libraries=maps,marker&v=beta`;
    script.defer = true;
    script.async = true;

    document.body.appendChild(script);

    // Remova o script quando o componente for desmontado
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ height: '200px' }}></div>;
};



export default function Footer() {
  return (
    <Container>
      <Painel>
        <MapContainer id='map'/>
           <div>
            <h1>Deus Está Aqui</h1>
            <div id='texto'>
              <p>A distância total ao redor será de nove quilômetros.
              E daquele momento em diante, o nome da cidade será:
              O Senhor ESTÁ AQUI</p>
         </div>
         </div>
      </Painel>
      <p id='creditos'>Todos os Direitos Reservados – Rádio Deus Está Aqui – 2023</p>
    </Container>
  )
}
