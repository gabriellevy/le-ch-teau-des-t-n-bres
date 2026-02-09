import { useState } from "react";
import type {EtatJeu} from "../types";
import {livre} from "../donnees/livre.ts";
import {d6} from "../utils/des.ts";
import type {Evt} from "../types/evt.ts";

export const useGameState = () => {
    const vie: number = (d6() + d6())*4;
    const [state, setState] = useState<EtatJeu>({
        currentEventId: -1,
        vie: vie,
        maxVie: vie,
        inventaire: [],
        xp: 0,
        permanentLifePoints: 0,
        visitedEvents: [],
        map: { nodes: [], edges: [] },
    });

    const [currentEvent, setCurrentEvent] = useState<Evt | null>(livre[0]);

    const handleChoice = (nextEventId: number) => {
        const event = livre.find((e) => e.id === nextEventId);
        setCurrentEvent(event || null);
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
