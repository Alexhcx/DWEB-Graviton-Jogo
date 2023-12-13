import React from 'react';
import video from '../assets/videos/black-hole.mp4';
import '../styles/Global.css';

//Componente React chamado BackgroundVideo, escrito em TypeScript usado para exibir um vídeo de fundo em loop.

const BackgroundVideo: React.FC = () => {
  return (
    <video autoPlay muted loop className="backgroundVideo">
      <source src={video} type="video/mp4" />
      Seu navegador não suporta a reprodução de vídeos.
    </video>
  );
};

export default BackgroundVideo;