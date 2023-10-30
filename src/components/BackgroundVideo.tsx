import React from 'react';
import video from '../assets/videos/black-hole.mp4';
import styles from '../styles/BackgroundVideo.module.css';

const BackgroundVideo: React.FC = () => {
  return (
    <video autoPlay muted loop className={styles.backgroundVideo}>
      <source src={video} type="video/mp4" />
      Seu navegador não suporta a reprodução de vídeos.
    </video>
  );
};

export default BackgroundVideo;