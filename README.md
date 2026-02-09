# RuningForChange 🏃‍♂️

Projet réalisé dans le cadre du "TP Git & Intégration Continue".  
Objectif : mettre en place un workflow Git professionnel, une organisation par issues, branches et pull requests, ainsi qu’une CI simple avec GitHub Actions, tout en développant un site web statique.
Pour ce faire j ai donc choisir un modèle sur figma comunity , mon site nest pas une representation fidele de l exemple que j ai choisi parce que je me suis dit comme je suis seule je vais pas me concentrer sur le front-end

## 🗂️ Structure du projet

RuningForChange/
├── assets/
│ └── images/
├── css/
│ └── style.css
├── js/
│ └── main.js
├── src/
│ ├── index.html
│ └── about.html
├── .gitignore
├── README.md
└── .github/
└── workflows/
└── ci.yml
### Gestion du Projet

Pour la gestion de ce projet, j’ai utilisé le  Git Flow, afin de structurer correctement mon travail de manière organisée.
J’ai commencé par créer toutes les issues GitHub avant de commencer à coder, ce qui m’a permis de mettre en place les features pour chaque fonctionnalités  (structure du projet, header, footer, pages, responsive, correctifs, etc.).
Chaque issue correspondait à une branche spécifique feature créée à partir de la branche develop.
Le développement principal s’est fait sur la branche develop, tandis que la branche main est restée stable et réservée à la version finale du projet.
Pour chaque fonctionnalité :
je créais une branche dédiée,
j’effectuais des commits réguliers avec des messages clairs,
puis je fusionnais la branche dans develop une fois la fonctionnalité terminée.
Cette méthode m’a permis de garder un historique Git lisible, de limiter les erreurs et d avoir toujours accès au version precdente en cas d erreur

## Gestion des conflits Git

Pendant le projet, j’ai rencontré des conflits Git, surtout au moment de fusionner certaines branches de fonctionnalités dans la branche develop. Ces conflits sont arrivés lorsque plusieurs modifications avaient été faites sur les mêmes fichiers, notamment les fichiers HTML et CSS.
Pour résoudre les conflits, j’ai procédé étape par étape :
- repérer les parties en conflit,
- supprimer les lignes de conflit ajoutées par Git,
- vérifier que le site fonctionnait correctement,
- enregistrer la correction avec un commit.
Désole j'ai carrement oublie de faire une capture lors du conflit

## Mise en place de mon CI 

la CI  sert à vérifier automatiquement mon projet à chaque fois que j’envoie du code sur GitHub.
Grâce à la CI, je n’ai pas besoin de vérifier tout à la main à chaque modification.
Concrètement, dès que je fais un push ou une pull request sur les branches develop ou main, la CI se lance toute seule. Elle télécharge le projet et vérifie que les dossiers et fichiers importants sont bien présents.
La CI me permet de :
- m’assurer que le projet reste bien organisé,
- éviter d’oublier des fichiers importants,
- vérifier que la version finale sur main est propre,
- travailler de manière plus professionnelle.
.github/workflows/ci.yml

## problème rencontré

- Problème : images non affichées

cause : mauvais chemin absolu
Solution : utilisation de chemins relatifs corrects

- Problème : texte illisible sur fond sombre

Cause : héritage de styles globaux
Solution : styles spécifiques par page (.home, .about)

- Problème : CSS invalide

cause : bloc imbriqué incorrect
Solution : correction de la syntaxe CSS

- Problème : conflits Git

Cause : modifications concurrentes
Solution : résolution manuelle et commit de fix


## Conclusion

Ce projet m’a permis de mieux comprendre l’utilisation de Git dans un projet réel. J’ai appris à organiser mon travail avec des branches, des issues et des commits clairs. La mise en place de l’intégration continue m’a aussi aidé à comprendre l’importance de l’automatisation.