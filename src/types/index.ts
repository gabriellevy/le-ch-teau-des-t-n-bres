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
