import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import './GameDetails.css';

const GameDetails = () => {
    const { id } = useParams(); // Obtém o ID do jogo da URL
    const [game, setGame] = useState(null); // Estado para armazenar o jogo

    useEffect(() => {
        // Busca os detalhes do jogo pela API
        api.get(`/games/${id}`)
            .then(response => setGame(response.data))
            .catch(error => console.error('Error fetching game details:', error));
    }, [id]);

    if (!game) return <p>Loading...</p>; // Mostra "loading" enquanto carrega


    // Função para renderizar estrelas com preenchimento proporcional
    const renderStars = (score) => {
        const maxStars = 5; // Total de estrelas
        const stars = [];

        for (let i = 0; i < maxStars; i++) {
            const fill = Math.max(0, Math.min(1, score - i)); // Calcula o preenchimento de cada estrela
            stars.push(
                <div key={i} className="star-wrapper">
                    <div className="star-empty">★</div>
                    <div className="star-fill" style={{ width: `${fill * 100}%` }}>★</div>
                </div>
            );
        }

        return <div className="game-stars">{stars}</div>;
    };
    return (
        <div className="game-details">
            <h1>{game.title}</h1>
            <div className="game-score">
                <div className="game-stars">{game.score} {renderStars(game.score)}</div>
            </div>
            <img src={game.imgUrl} alt={game.title} />
            <p className="game-genre"><span>Gênero:</span> {game.genre}</p>
            <p className="game-platforms">
                <span>Plataformas: </span> {Array.isArray(game.platforms) ? game.platforms.join(', ') : game.platforms}
            </p>
            <p className="game-description">{game.shortDescription || 'No description available.'}</p>
        </div>
    );
};

export default GameDetails;
