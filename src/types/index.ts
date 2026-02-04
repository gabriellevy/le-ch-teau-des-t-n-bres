export type Evt = {
    id: number;
    titre: string;
    description: sousPartie[];
    choix?: Choice[];
    combat?: Combat;
    image?: string;
    isTerminal?: boolean;
};

export enum TypeSousPartie {
    TEXTE = "TEXTE",
    IMAGE = "IMAGE",
}

export type sousPartie = {
    contenu: string,
    type: TypeSousPartie,
    alt?: string,
    className?: string,
};

export type Choice = {
    id: number;
    text: string;
    nextEventId: number;
    requiredItem?: string;
    condition?: (state: GameState) => boolean;
};

export type Combat = {
    enemy: string;
    enemyLife: number;
    enemyDamage: number;
    playerDamage: number;
    reward?: string;
    rewardEventId?: number;
    defeatEventId?: number;
};

export type GameState = {
    currentEventId: number;
    vie: number;
    maxVie: number;
    inventory: string[];
    xp: number;
    permanentLifePoints: number;
    visitedEvents: number[];
    map: MapData;
};

export type MapData = {
    nodes: { id: number; position: { x: number; y: number } }[];
    edges: { from: number; to: number }[];
};
