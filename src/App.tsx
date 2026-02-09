import React, { useState } from "react";
import { useGameState } from "./hooks/useGameState";
import "./styles/global.css";
import {Couverture} from "./compo/Couverture.tsx";
import {Inventaire} from "./compo/Inventaire.tsx";
import {BookPage} from "./compo/BookPage.tsx";
import {AfficheCombat} from "./compo/AfficheCombat.tsx";

const App: React.FC = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const { state, currentEvent, handleChoice, commencerCombat, tourDeCombat } = useGameState();

    const handleStartGame = () => {
        setGameStarted(true);
    };

    if (!gameStarted) {
        return <Couverture onStart={handleStartGame} />;
    }

    if (!currentEvent) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="app">
            <BookPage
                event={currentEvent}
                onChoice={handleChoice}
                commencerCombat={commencerCombat}
                tourDeCombat={tourDeCombat}
            />
            <AfficheCombat combat={state.combat} />
            <Inventaire state={state} />
        </div>
    );
};

export default App;
