import React from "react";
import couverture from "../images/couverture.jpg"; // Assure-toi que le fichier existe

type CoverPageProps = {
    onStart: () => void; // Fonction appelée au clic
};

export const CoverPage: React.FC<CoverPageProps> = ({ onStart }) => {
    return (
        <div
            className="cover-page"
            onClick={onStart}
            style={{
                backgroundImage: `url(${couverture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="cover-overlay">
                <p className="cover-text">Cliquez pour commencer l'aventure...</p>
            </div>
        </div>
    );
};
