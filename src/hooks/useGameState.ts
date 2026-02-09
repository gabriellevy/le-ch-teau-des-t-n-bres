import {useCallback, useState} from "react";
import {type Combat, type EtatJeu, PhaseCombat} from "../types";
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
        combat: undefined,
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

    const commencerCombat = useCallback((combat: Combat) => {
        combat.phaseCombat = PhaseCombat.enCours;
        setState((prev) => ({
            ...prev,
            combat: combat,
        }));
    }, [setState]);

    const tourDeCombat = () => {
        if (!state.combat) {
            console.error("tourDeCombat appelé sans aucun combat démarré !!!);");
            return;
        }

        let nouvelleVie = state.vie;
        let enemyCurrentLife = state.combat.vieEnnemi;

        if (nouvelleVie > 0 && enemyCurrentLife > 0) {
            const playerRoll = d6() + d6();
            const enemyRoll = d6() + d6();

            if (playerRoll > 6) {
                enemyCurrentLife -= playerRoll - 6 + state.combat.degatsJoueur;
            }
            if (enemyRoll > 6 && enemyCurrentLife > 0) {
                nouvelleVie -= enemyRoll - 6 + state.combat.degatsEnnemi;
            }
        }

        // TODO gérer évanouissement
        let nouvellePhase: PhaseCombat = PhaseCombat.enCours;
        if ( nouvelleVie <= 0) {
            nouvellePhase = PhaseCombat.defaite;
        } else if (enemyCurrentLife <= 0 ) {
            nouvellePhase = PhaseCombat.victoire;
        }

        setState((prev) => ({
            ...prev,
            vie: nouvelleVie > 0 ? nouvelleVie : 0,
            combat: {
                enemy: prev.combat?.enemy ?? "ennemi inconnu",
                vieEnnemi: enemyCurrentLife,
                degatsEnnemi: prev.combat?.degatsEnnemi ?? 0,
                degatsJoueur: prev.combat?.degatsJoueur ?? 0,
                victoire: prev.combat?.victoire ?? -1000,
                defaite:prev.combat?.defaite ?? -1000,
                phaseCombat: nouvellePhase
            },
        }));
    };

    return { state, currentEvent, handleChoice, commencerCombat, tourDeCombat };
};
