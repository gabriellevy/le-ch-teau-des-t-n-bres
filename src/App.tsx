import React, { useState } from "react";
import { useGameState } from "./hooks/useGameState";
import "./styles/global.css";
import {CoverPage} from "./compo/CoverPage.tsx";
import {Inventaire} from "./compo/Inventaire.tsx";
import {BookPage} from "./compo/BookPage.tsx";

const App: React.FC = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const { state, currentEvent, handleChoice, handleCombat } = useGameState();

    const handleStartGame = () => {
        setGameStarted(true);
    };

    if (!gameStarted) {
        return <CoverPage onStart={handleStartGame} />;
    }

    if (!currentEvent) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="app">
            <BookPage
                event={currentEvent}
                onChoice={handleChoice}
                onCombat={handleCombat}
            />
            <Inventaire state={state} />
        </div>
    );
};

export default App;
