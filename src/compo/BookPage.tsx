import React from "react";
import {type Evt, TypeSousPartie} from "../types/evt.ts";
import {type Combat, PhaseCombat} from "../types";

type BookPageProps = {
    event: Evt;
    onChoice: (nextEventId: number) => void;
    tourDeCombat: () => void;
    commencerCombat: (combat: Combat) => void;
};

export const BookPage: React.FC<BookPageProps> = ({ event, onChoice, tourDeCombat, commencerCombat }:Readonly<BookPageProps>) => {
    const handleCombat = () => {
        if (event.combat) {
            tourDeCombat();
            switch (event.combat.phaseCombat) { // TODO event.combat n'a pas les bonnes valeurs pour afire fonctionner ça => state pas encore setté
                // TODO : faire ça dans un useEffect ??
                case PhaseCombat.defaite: onChoice(event.combat.defaite); break;
                case PhaseCombat.victoire: onChoice(event.combat.victoire); break;
                default: break;
            }
        }
    };

    if (event.combat && event.combat.phaseCombat === undefined) {
        commencerCombat(event.combat);
    }

    return (
        <div className="book-page">
            <h2>{event.titre}</h2>
            <div className="book-description">
                {event.description.map((sousPartie, index) => {
                    switch (sousPartie.type) {
                        case TypeSousPartie.TEXTE:
                            return <p key={index}>{sousPartie.contenu}</p>;
                        case TypeSousPartie.TITRE:
                            return <h2>{sousPartie.contenu}</h2>;
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
