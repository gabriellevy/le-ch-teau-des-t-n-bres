import React from "react";
import type {Combat} from "../types";

type AfficheCombatProps = {
    combat: Combat|undefined;
};

/**
 * affichage du combat en cours (si il y en a un)
 */
export const AfficheCombat: React.FC<AfficheCombatProps> = ({ combat }: Readonly<AfficheCombatProps>) => {
    // TODO ajouter les lancers de dés et déccrire l'effet à chaque lancer
    if (combat != undefined) {
        return (
            <div className="inventaire">
                <h4>{combat.enemy}</h4>
                <h4>Vie : {combat.vieEnnemi}</h4>
            </div>
        );
    }
    return undefined;
};
