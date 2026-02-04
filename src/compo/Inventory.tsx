import React from "react";
import type {GameState} from "../types";

type InventoryProps = {
    state: GameState;
};

export const Inventory: React.FC<InventoryProps> = ({ state }) => {
    return (
        <div className="inventory">
            <h3>VIE: {state.vie}/{state.maxVie}</h3>
            <h3>Points d'expérience: {state.xp}/20</h3>
            <h3>Inventaire:</h3>
            <ul>
                {state.inventory.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
