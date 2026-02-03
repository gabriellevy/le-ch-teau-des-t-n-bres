import { useState, useEffect } from "react";
import type {Evt, GameState} from "../types";
import {livre} from "../donnees/livre.ts";

export const useGameState = () => {
    const [state, setState] = useState<GameState>({
        currentEventId: 0,
        lifePoints: 24, // Valeur par défaut, à calculer avec les dés
        maxLifePoints: 24,
        inventory: [],
        experiencePoints: 0,
        permanentLifePoints: 0,
        visitedEvents: [],
        map: { nodes: [], edges: [] },
    });

    const [currentEvent, setCurrentEvent] = useState<Evt | null>(null);

    useEffect(() => {
        const event = livre.find((e) => e.id === state.currentEventId);
        setCurrentEvent(event || null);
    }, [state.currentEventId]);

    const handleChoice = (nextEventId: number) => {
        setState((prev) => ({
            ...prev,
            currentEventId: nextEventId,
            visitedEvents: [...prev.visitedEvents, prev.currentEventId],
        }));
    };

    const rollDice = (sides: number = 6): number => {
        return Math.floor(Math.random() * sides) + 1;
    };

    const handleCombat = (enemyLife: number, enemyDamage: number, playerDamage: number) => {
        let newLifePoints = state.lifePoints;
        let enemyCurrentLife = enemyLife;

        while (newLifePoints > 0 && enemyCurrentLife > 0) {
            const playerRoll = rollDice() + rollDice();
            const enemyRoll = rollDice() + rollDice();

            if (playerRoll > 6) {
                enemyCurrentLife -= playerRoll - 6 + playerDamage;
            }
            if (enemyRoll > 6 && enemyCurrentLife > 0) {
                newLifePoints -= enemyRoll - 6 + enemyDamage;
            }
        }

        setState((prev) => ({
            ...prev,
            lifePoints: newLifePoints > 0 ? newLifePoints : 0,
        }));

        return newLifePoints > 0;
    };

    return { state, currentEvent, handleChoice, handleCombat, rollDice };
};
