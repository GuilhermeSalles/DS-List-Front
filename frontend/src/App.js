import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameDetails from './pages/GameDetails';
import GameList from './pages/GameList';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/games/:id" element={<GameDetails />} />
                <Route path="/" element={<GameList />} />
            </Routes>
        </Router>
    );
};

export default App;
