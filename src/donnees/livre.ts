import type {Evt} from "../types";

export const livre: Evt[] = [
    {
        id: 0,
        title: "Introduction",
        description: `
      Écoutez-moi bien — je veux faire un sortilège. Et ne vous agitez pas, surtout! Vous savez comme toute agitation m'est désagréable.
      Je suis Merlin. Je vais vous expliquer la mission : sauver la reine Guenièvre, enlevée par le sorcier Ansalom.
    `,
        choices: [
            { id: 1, text: "Commencer l'aventure", nextEventId: 25 },
        ],
    },
    {
        id: 25,
        title: "La mission de Pip",
        description: `
      Jake le Teigneux surgit devant vous sur la place du marché. Il veut vous battre.
      Vous n'avez pas le choix : vous devez vous défendre.
    `,
        combat: {
            enemy: "Jake le Teigneux",
            enemyLife: 20,
            enemyDamage: 2,
            playerDamage: 2,
        },
    },
    {
        id: 1,
        title: "Défaite contre Jake",
        description: `
      Jake vous a mis à terre. Vous perdez 10 points de vie, mais vous survivrez.
      John le Fermier va bientôt revenir...
    `,
        choices: [
            { id: 1, text: "Continuer", nextEventId: 3 },
        ],
    },
    {
        id: 2,
        title: "Victoire contre Jake",
        description: `
      Jake s'enfuit en reniflant. Vous avez gagné, mais vous êtes blessé.
      John le Fermier va bientôt revenir...
    `,
        choices: [
            { id: 1, text: "Continuer", nextEventId: 3 },
        ],
    },
    {
        id: 3,
        title: "Retour à la ferme",
        description: `
      Vous retournez à la ferme avec John. La vie continue, mais une aventure vous attend...
    `,
        choices: [
            { id: 1, text: "Aller à Camelot", nextEventId: 59 },
        ],
    },
    // Ajoute les autres événements ici...
];
