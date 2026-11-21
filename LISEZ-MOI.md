# Site du réseau de partenaires

## Mise en ligne (une fois)
1. Créez un dépôt GitHub public, puis déposez tout le contenu de ce dossier (Add file > Upload files).
2. Settings > Pages : choisissez la branche principale comme source. L’adresse s’affiche au bout de quelques minutes.

## Mettre à jour
Chaque page s’ouvre en mode édition en ajoutant `#edition` à son adresse (ex. `…/calendrier.html#edition`). Vos partenaires, eux, n’ont pas ces formulaires.

- **Calendrier** : générez la ligne, collez-la dans `donnees.js` (liste `reunions`), déposez le PDF dans `rapports/`.
- **Espaces** et **Gouvernance** : ajustez, cliquez sur « Afficher le JSON » / « Afficher le bloc à publier », remplacez dans le fichier HTML le bloc entre `DEBUT-DONNEES` et `FIN-DONNEES`.
- **Finances** : renseignez `lienFinances` dans `donnees.js`. Ne mettez jamais les chiffres dans ce dépôt, il est public.
- Pensez à modifier les dates `majs` dans `donnees.js` pour l’accueil.

Les réunions et les liens de rapports fournis sont des exemples fictifs : remplacez-les.
