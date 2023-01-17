type DictionaryType = {
    [key: string]: { [key: string]: string };
};

export const dictionary: DictionaryType = {
    header: {
        title: 'Zombie Apocalypse',
        subtitle: 'Nombre de personnes dans votre équipe',
    },
    spinner: {
        text: 'Chargement des données',
    },
    toast: {
        text: ' Vous ne pouvez ajouter que 3 co-équipier(e)s',
    },
    error: {
        text: "Une erreur est survenue. Le.la membre n'existe pas",
        unknownMember: 'Erreur, membre inconnu',
    },
};
