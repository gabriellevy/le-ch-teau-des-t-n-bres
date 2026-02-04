import type {Combat, GameState} from "./index.ts";

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
    TITRE = "TITRE",
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