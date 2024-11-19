import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import './GameList.css';

const GameList = () => {
    const [categories, setCategories] = useState([]);
    const [games, setGames] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [draggedItemIndex, setDraggedItemIndex] = useState(null); // Índice do item sendo arrastado
    const [isDragging, setIsDragging] = useState(false); // Define se o item foi arrastado
    const navigate = useNavigate();

    // Carregar as categorias
    useEffect(() => {
        api.get('/lists')
            .then(response => {
                setCategories(response.data);
                if (response.data.length > 0) {
                    setSelectedCategory(response.data[0].id);
                }
            })
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    // Carregar os jogos da categoria selecionada
    useEffect(() => {
        if (selectedCategory) {
            api.get(`/lists/${selectedCategory}/games`)
                .then(response => setGames(response.data))
                .catch(error => console.error('Error fetching games:', error));
        }
    }, [selectedCategory]);

    // Handler para iniciar o drag
    const handleDragStart = (index) => {
        setDraggedItemIndex(index);
        setIsDragging(true); // Define que o item está sendo arrastado
    };

    // Handler para permitir o drop
    const handleDragOver = (event) => {
        event.preventDefault(); // Permite o drop
    };

    // Handler para concluir o drop
    const handleDrop = (destinationIndex) => {
        if (draggedItemIndex !== null && draggedItemIndex !== destinationIndex) {
            const draggedGame = games[draggedItemIndex];

            // Atualizar a posição visualmente
            const updatedGames = [...games];
            updatedGames.splice(draggedItemIndex, 1); // Remove o item da posição original
            updatedGames.splice(destinationIndex, 0, draggedGame); // Insere o item na nova posição
            setGames(updatedGames);

            // Atualizar no banco de dados somente se houve alteração
            api.post(`/lists/${selectedCategory}/replacement`, {
                sourceIndex: draggedItemIndex,
                destinationIndex: destinationIndex,
            })
                .then(() => {
                    console.log('Order updated in the database');
                })
                .catch(error => console.error('Error updating positions:', error));
        }

        setDraggedItemIndex(null); // Resetar o item arrastado
        setIsDragging(false); // Finaliza o estado de arrasto
    };

    // Handler para clicar no item
    const handleClick = (gameId) => {
        if (!isDragging) {
            navigate(`/games/${gameId}`); // Abre a página de detalhes apenas se não estiver arrastando
        }
    };

    return (
        <div className="container">
            <h1>Game List</h1>
            <select
                className="select-category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>

            <div className="game-list">
                {games.map((game, index) => (
                    <div
                        key={game.id}
                        className={`game-item ${isDragging && index === draggedItemIndex ? 'dragging' : ''}`}
                        draggable
                        onDragStart={() => handleDragStart(index)} // Início do drag
                        onDragOver={handleDragOver} // Permitir drop
                        onDrop={() => handleDrop(index)} // Concluir drop
                        onClick={() => handleClick(game.id)} // Clicar para abrir detalhes
                    >
                        <span className="game-item-year">{game.year}</span>
                        <img src={game.imgUrl} alt={game.title} />
                        <div className="game-item-content">
                            <h3>{game.title}</h3>
                            <p>{game.shortDescription || 'No description available'}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameList;
