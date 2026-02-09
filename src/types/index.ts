export type Combat = {
    enemy: string;
    enemyLife: number;
    degatsEnnemi: number;
    degatsJoueur: number;
    reward?: string;
    victoire?: number;
    defaite?: number;
};

export type EtatJeu = {
    currentEventId: number;
    vie: number;
    maxVie: number;
    inventaire: string[];
    xp: number;
    permanentLifePoints: number;
    visitedEvents: number[];
    map: MapData;
};

export type MapData = {
    nodes: { id: number; position: { x: number; y: number } }[];
    edges: { from: number; to: number }[];
};
