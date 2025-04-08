# Simulateur d'aides financières Soliha

Application web complète en React + Tailwind CSS représentant un simulateur d'aides financières pour l'amélioration ou l'adaptation de l'habitat, destiné à l'association Soliha.

## 🎯 Fonctionnalités

Cette application propose une interface fluide, moderne et pédagogique permettant aux utilisateurs de simuler leurs droits aux aides financières pour :

1. Rénover leur logement
2. Rénover leur copropriété
3. Adapter leur logement
4. Louer un bien immobilier

## 🧱 Structure de l'application

- **Page d'accueil** : 4 cartes cliquables menant aux simulateurs spécifiques
- **Simulateurs** : Formulaires en plusieurs étapes avec calcul personnalisé des aides
- **Résultats** : Affichage détaillé des aides disponibles avec graphiques

## 🛠️ Technologies utilisées

- React (Hooks, Context API)
- Tailwind CSS pour le style
- React Router pour la navigation
- Recharts pour les graphiques
- Lucide React pour les icônes

## 🎨 Charte graphique Soliha

| Élément               | Couleur HEX |
|-----------------------|-------------|
| Bleu foncé            | `#03628a`   |
| Bleu clair            | `#a1d5e2`   |
| Rouge corail (CTA)    | `#ed6f5d`   |
| Fond clair / texte    | `#ffffff`, `#f9f9f9` |

## 📋 Composants réutilisables

- `StepWizard` : Navigation multi-étapes
- `FormStepWrapper` : Bloc de formulaire avec titre, sous-titre, champ(s)
- `ResultCard` : Encart affichant une aide simulée
- `PieChartAidSplit` : Graphique camembert pour visualiser la répartition des aides
- `SolihaButton` : Bouton stylisé selon la charte graphique

## 🚀 Installation et démarrage

1. Clonez ce dépôt
```bash
git clone <url-du-repo>
cd soliha-simulateur
```

2. Installez les dépendances
```bash
npm install
```

3. Lancez l'application en mode développement
```bash
npm start
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## 📱 Responsive Design

L'application est entièrement responsive et s'adapte à tous les appareils :
- Ordinateurs de bureau
- Tablettes
- Smartphones

## 🔧 Build pour la production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers seront générés dans le dossier `build`.

## 📄 Licence

Ce projet est la propriété de Soliha.

---

Développé avec ❤️ pour Soliha - Solidaires pour l'habitat
