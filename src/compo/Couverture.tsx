import React from "react";
import couverture from "../images/couverture.jpg";

type CouvertureProps = {
    onStart: () => void;
};

export const Couverture: React.FC<CouvertureProps> = ({ onStart }) => {
    return (
        <div className="cover-page-container">
            <img
                src={couverture}
                alt="Le Château des Ténèbres"
                className="cover-image"
                onClick={onStart}
            />
            <div className="cover-overlay">
                <p className="cover-text">Cliquez pour commencer l'aventure...</p>
            </div>
        </div>
    );
};
