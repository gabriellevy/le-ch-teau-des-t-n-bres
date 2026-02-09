import React from "react";
import type {EtatJeu} from "../types";

type InventaireProps = {
    state: EtatJeu;
};

export const Inventaire: React.FC<InventaireProps> = ({ state }) => {
    return (
        <div className="inventaire">
            <h4>VIE: {state.vie}/{state.maxVie}</h4>
            <h4>Points d'expérience: {state.xp}/20</h4>
            <h4>Inventaire:</h4>
            <ul>
                {state.inventaire.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
