export enum PhaseCombat {
    enCours,
    victoire,
    defaite
}

export type Combat = {
    enemy: string;
    vieEnnemi: number;
    degatsEnnemi: number;
    degatsJoueur: number;
    phaseCombat?: PhaseCombat; // si phaseCombat est undefined, alors le combat n'est pas commencé
    victoire: number;
    defaite: number;
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
    combat: Combat|undefined;
};

export type MapData = {
    nodes: { id: number; position: { x: number; y: number } }[];
    edges: { from: number; to: number }[];
};
