import React from "react";
import type {EtatJeu} from "../types";

type InventaireProps = {
    state: EtatJeu;
};

export const Inventaire: React.FC<InventaireProps> = ({ state }) => {
    return (
        <div className="inventaire">
            <h3>VIE: {state.vie}/{state.maxVie}</h3>
            <h3>Points d'expérience: {state.xp}/20</h3>
            <h3>Inventaire:</h3>
            <ul>
                {state.inventaire.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
