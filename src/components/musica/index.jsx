/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { FaPause, FaPlay } from "react-icons/fa";
import { BottomBarWrapper, Loading } from './styles';

export default function Musica() {
  const [musicaRadio, setMusicaRadio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await new Promise((resolve) => {
          $.getJSON('https://xcast.com.br/api-json/ODM3Nisw', (result) => {
            resolve(result);
          });
        });
        setMusicaRadio([data.titulo, data.musica_atual, data.porta, data.ip, data.capa_musica]);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Erro ao obter dados da API:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  const togglePlay = () => {
    const audio = document.getElementById('customAudioPlayer');
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!loading){
    return (
      <BottomBarWrapper>
        <h1>{musicaRadio[1]}</h1>
        <audio id="customAudioPlayer" autoPlay>
          <source src={`http://${musicaRadio[3]}:${musicaRadio[2]}/Length1=-1`} type="audio/mp3" />
          Seu navegador não suporta o elemento de áudio.
        </audio>
        <button onClick={togglePlay} type='button'>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
        <img src={musicaRadio[4]} alt="Capa da Musica" />
      </BottomBarWrapper>
    );
  }
}
