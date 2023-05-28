import './Videos.css';

import React, { useState, useEffect } from 'react';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [cIndex, setCIndex] = useState(0);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch('https://api.steinhq.com/v1/storages/6446f022d27cdd09f0f07bcb/recomendacoes');
        const video = await response.json();
        setVideos(video);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchVideo();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [videos]);

    return (
        <section className="videos">
            <h2 id='recomendacoes'>Recomendações</h2>
            <p>
                Dê uma passadinha no nosso youtube e venha conhecer algumas das nossas campanhas de sucesso:
            </p>
            {videos.length > 0 && (
                <iframe width="90%" height="240px" src={videos[cIndex].link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            )}
        </section>
    );
}

export default Videos;