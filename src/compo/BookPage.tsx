import React from "react";
import type {Evt} from "../types";

type BookPageProps = {
    event: Evt;
    onChoice: (nextEventId: number) => void;
    onCombat: (enemyLife: number, enemyDamage: number, playerDamage: number) => boolean;
};

export const BookPage: React.FC<BookPageProps> = ({ event, onChoice, onCombat }:Readonly<BookPageProps>) => {
    const handleCombat = () => {
        if (event.combat) {
            const playerWins = onCombat(
                event.combat.enemyLife,
                event.combat.enemyDamage,
                event.combat.playerDamage
            );
            const nextEventId = playerWins ? event.combat.rewardEventId || 0 : event.combat.defeatEventId || 0;
            onChoice(nextEventId);
        }
    };

    return (
        <div className="book-page">
            <h2>{event.titre}</h2>
            <p className="book-description">{event.description}</p>
            {event.image && <img src={event.image} alt={event.titre} />}
            {event.choix && (
                <div className="choices">
                    {event.choix.map((choix) => (
                        <button key={choix.id} onClick={() => onChoice(choix.nextEventId)}>
                            {choix.text}
                        </button>
                    ))}
                </div>
            )}
            {event.combat && (
                <button onClick={handleCombat}>Combattre</button>
            )}
        </div>
    );
};
