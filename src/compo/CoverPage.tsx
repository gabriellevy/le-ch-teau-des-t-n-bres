import React from "react";
import couverture from "../images/couverture.jpg";

type CoverPageProps = {
    onStart: () => void;
};

export const CoverPage: React.FC<CoverPageProps> = ({ onStart }) => {
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
