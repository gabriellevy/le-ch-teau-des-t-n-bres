import React from "react";
import {type Evt, TypeSousPartie} from "../types/evt.ts";

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
            <div className="book-description">
                {event.description.map((sousPartie, index) => {
                    switch (sousPartie.type) {
                        case TypeSousPartie.TEXTE:
                            return <p key={index}>{sousPartie.contenu}</p>;
                        case TypeSousPartie.TITRE:
                            return <h4>{sousPartie.contenu}</h4>;
                        case TypeSousPartie.IMAGE:
                            return (
                                <img
                                    key={index}
                                    src={sousPartie.contenu}
                                    alt={sousPartie.alt}
                                    className={sousPartie.className}
                                />
                            );
                        default:
                            return null;
                    }
                })}
            </div>
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
