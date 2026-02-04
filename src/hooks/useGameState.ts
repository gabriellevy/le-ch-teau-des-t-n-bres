import { useState, useEffect } from "react";
import type {Evt, GameState} from "../types";
import {livre} from "../donnees/livre.ts";
import {d6} from "../utils/des.ts";

export const useGameState = () => {
    const vie: number = (d6() + d6())*4;
    const [state, setState] = useState<GameState>({
        currentEventId: 0,
        vie: vie,
        maxLifePoints: vie,
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

    const handleCombat = (enemyLife: number, enemyDamage: number, playerDamage: number) => {
        let nouvelleVie = state.vie;
        let enemyCurrentLife = enemyLife;

        while (nouvelleVie > 0 && enemyCurrentLife > 0) {
            const playerRoll = d6() + d6();
            const enemyRoll = d6() + d6();

            if (playerRoll > 6) {
                enemyCurrentLife -= playerRoll - 6 + playerDamage;
            }
            if (enemyRoll > 6 && enemyCurrentLife > 0) {
                nouvelleVie -= enemyRoll - 6 + enemyDamage;
            }
        }

        setState((prev) => ({
            ...prev,
            vie: nouvelleVie > 0 ? nouvelleVie : 0,
        }));

        return nouvelleVie > 0;
    };

    return { state, currentEvent, handleChoice, handleCombat };
};
