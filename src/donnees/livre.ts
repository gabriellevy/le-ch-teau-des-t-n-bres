import type {Evt} from "../types";

export const livre: Evt[] = [
    {
        id: 0,
        title: "Introduction",
        description: `
      Ecoutez-moi bien —je veux faire un sortilège. Et ne vous agitez pas, surtout ! Vous savez comme toute agitation m'est désagréable. Non, vous ne le savez pas. Eh bien, vous l'apprendrez. Pour ça, oui. Les gens de mon âge n'aiment pas l'agitation. Je suis tellement plus vieux que vous. De plus, je suis mort. Mort des centaines d'années avant votre naissance. Mais un petit détail comme celui-là est sans importance. Ainsi sont les magiciens. Revenons à mon sortilège. Vous ne pouvez pas me voir, bien entendu. Ni m'entendre. Mais vous pouvez lire ce que j'écris. Aucun doute là-dessus. Etes- vous nerveux ? On le serait à moins. C'est un sortilege très puissant, un sortilège auquel je n'ai pas souvent recours. Cela prend trop de temps. Pour certains d'entre eux, il suffit de marmonner un mot. Pour d'autres, d'agiter une baguette magique. Mais celui-ci impose d'écrire tout un livre. Le livre que v ous tenez en main. Un livre entier pour un unique sortilège ! J'ai presque dépassé l'âge d'user de sortilèges aussi longs, mais le Roi insiste. Car on ne peut laisser plus longtemps Ansalom agir ainsi à sa guise. il va falloir que vous m'aidiez, figurez-vous. Vous ne pouvez pas vous contenter de lire simplement ce livre. Surtout si vous devez devenir un grand magicien comme moi et passer votre vie à recevoir des ordres du Roi. Non, vous devez y mettre du vôtre. Je ne dispose pas de corps dans votre époque, voilà l'ennui. J'ai donc besoin d'un assistant pour m'apporter divers objets. Vous allez être mon assistant, ou plutôt mon apprenti.
      
      Ecoutez-moi, et ne bougez pas ainsi. Il faut que vous vous procuriez une plume et du parchemin. Une plume d'oie, pour être précis, car les plumes de paon font prétentieux. Laissons ce genre d'extravagances aux sorciers comme Ansalom. Une plume d'oie, voilà. Et un canif pour la tailler. Et des poudres et de l'eau pour préparer l'encre. Si vous ne pouvez pas trouver de plume d'oie, un crayon et une feuille de papier feront l'affaire.
      
      Il vous faut également deux dés. Ou un seul si vous ne pouvez pas mettre la main sur deux. Un seul suffira bien, oui, mais deux seraient préférables si possible. Des dés ordinaires, entendons-nous. A six faces, marquées de petits points. Vous devez pouvoir en dénicher quelque part. Allez-donc chercher tout ceci et, à nous deux, nous lancerons le sortilège. Vous voilà de retour. Parfait. Je ferais peut-être bien de vous mettre au courant du sortilège en question maintenant que vous êtes mon apprenti. D'autant que je vais le pratiquer sur vous. Ne vous affolez pas. C'est un de ces sortilèges qu'il faut jeter sur quelqu'un. Sinon, rien ne se passe. Rien du tout. Et voilà perdu le sortilège le plus bénéfique ! Je vais vous expliquer quel est son effet. Le sortilège vous emporte loin du monde où vous vous trouvez, vous enlève à votre époque. Enfin, il prélève une part essentielle de vous, votre part intérieure. Il laisse votre corps intact si bien que vos amis, par exemple, ne savent pas que vous êtes parti. Mais pourtant, vous êtes absent. C'est la vérité. Votre esprit a quitté votre époque pour se retrouver dans la mienne. Et là, je le glisse aussitôt dans un autre corps, un corps trié sur le volet, le corps d'un être jeune, tout à fait comme vous, mais plus séduisant. Et plus fort. Je ne peux pas vous rendre plus intelligent mais, sur ce point, il faudra vous faire une raison.
    
      Une fois que vous vous trouverez dans cet autre corps, vous vous y sentirez à l'aise et vous pourrez vous en servir comme vous vous serviez du vôtre. Vous aurez aussi la faculté d'assister aux événements qui se passaient à mon époque. Je crois que je pourrai même m'arranger pour vous faire rencontrer le roi Arthur. Arthur Pendragon, fils de Uther. Un homme charmant s'il n'était pas aussi autoritaire. (Plus jeune que moi, mais c'est le cas de tout le monde). Vous rencontrerez aussi des chevaliers et vous connaîtrez bien des aventures. Il se peut même que vous me rencontriez, moi, si je ne suis pas Trop occupé.
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
