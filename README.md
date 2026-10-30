# Questionnaire de personnalité du PJ

Le joueur indique son nom et celui du personnage humain, puis répond aux 36 axes en six chapitres. Il peut confirmer une position centrale. Il valide, relit et télécharge un JSON à transmettre au MJ / Conteur. Le bouton de reprise permet de réimporter ce fichier.

Aucun résultat ni nom de clan n’est présenté. L’archive ne contient ni matrice de pondération ni correspondance avec les clans. Les derniers libellés sont inclus : « Tenir ses engagements / S’adapter aux circonstances », « Extraverti / Introverti » et « Informations essentielles seulement ».

**Dépôt suggéré :** `questionnaire-personnalite-pj`.

## Publication sur GitHub Pages

1. Créez un dépôt GitHub vide (un dépôt distinct pour chaque site).
2. Décompressez cette archive. Ajoutez **son contenu** à la racine du dépôt : `index.html` doit être directement à la racine, avec `assets/` à côté. N’envoyez pas seulement le ZIP et ne placez pas les fichiers dans un dossier supplémentaire.
3. Validez l’ajout sur la branche `main`.
4. Dans **Settings → Pages → Build and deployment**, choisissez **Deploy from a branch**.
5. Sélectionnez **main** et **/(root)**, puis **Save**.
6. Attendez la fin du déploiement ; GitHub indique ensuite l’adresse dans la page Pages.

Le fichier `.nojekyll` est inclus. Aucun npm, build, serveur applicatif ou clé API n’est nécessaire. Conservez toute l’arborescence, en particulier le dossier `assets/`.

Documentation officielle : https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Essai local

Les modules JavaScript et les chargements JSON nécessitent un serveur HTTP : ne double-cliquez pas simplement sur `index.html`. Avec Python installé, ouvrez un terminal à la racine des fichiers et lancez :

```sh
python3 -m http.server 8000
```

Puis ouvrez http://localhost:8000.

## Conservation et changement d’adresse

Les brouillons et dossiers sont conservés dans le navigateur, pour chaque adresse de site. Ils ne sont pas synchronisés entre appareils et ne migrent pas automatiquement depuis le site ChatGPT vers GitHub Pages. Exportez-les avant de changer de site ou d’effacer les données du navigateur, puis réimportez-les à la nouvelle adresse.

## Ressources

Le fond de Chicago est inclus dans `assets/chicago-1940.webp`. Les polices Google sont chargées à distance ; si elles sont indisponibles, des polices de remplacement sont utilisées. Les archives ne contiennent ni identifiants de déploiement, ni clé, ni réponse réelle de joueur.

## Provenance de cette archive

Export du code source correspondant au commit `71f227f61f94029bf7acdfd1af66354b58bf9730`, préparé le 30 octobre 2026. Copie autonome pour GitHub Pages ; les réglages privés de l’hébergement ChatGPT ont été exclus. Aucun dépôt GitHub n’a été créé ni publié par cette préparation.

## Illustration en filigrane

L’illustration symbolique des choix de personnalité est incluse dans `assets/personnalite-filigrane.webp` et appliquée aux panneaux du questionnaire, de l’accueil à la relecture. Un voile crème préserve la lisibilité. Le panorama nocturne de Chicago reste le fond extérieur. Pour ajuster sa présence, modifiez les opacités `.88` et `.90` dans le dernier bloc `.paper` de `style.css` : une opacité plus élevée atténue davantage l’image.
