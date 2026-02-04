export type Evt = {
    id: number;
    titre: string;
    description: string;
    choix?: Choice[];
    combat?: Combat;
    image?: string;
    isTerminal?: boolean;
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
    maxLifePoints: number;
    inventory: string[];
    experiencePoints: number;
    permanentLifePoints: number;
    visitedEvents: number[];
    map: MapData;
};

export type MapData = {
    nodes: { id: number; position: { x: number; y: number } }[];
    edges: { from: number; to: number }[];
};
