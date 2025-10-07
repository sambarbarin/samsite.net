---
title: "Premiers pas"
date: 2024-06-09
draft: false
weight: 3
---

# Premiers pas avec n8n

Après avoir installé n8n, vous êtes prêt à créer votre premier workflow. Cette section vous guidera à travers les étapes fondamentales pour bien démarrer avec n8n.

## Accéder à l'interface

1. Ouvrez votre navigateur et accédez à http://localhost:5678 (ou l'URL où vous avez déployé n8n)
2. Si c'est votre première connexion, vous devrez peut-être créer un compte utilisateur
3. Une fois connecté, vous verrez le tableau de bord principal de n8n

## Comprendre l'interface

L'interface de n8n est divisée en plusieurs zones :

- **Barre latérale gauche** : Accès aux workflows, credentials, et paramètres
- **Zone de travail centrale** : Où vous construisez vos workflows
- **Panneau de nœuds** : Liste de tous les nœuds disponibles (intégrations)
- **Panneau d'exécution** : Affiche les résultats d'exécution et les journaux

## Créer votre premier workflow

### Étape 1 : Créer un nouveau workflow

1. Cliquez sur "Workflows" dans la barre latérale
2. Cliquez sur le bouton "+ Nouveau" pour créer un workflow
3. Donnez un nom à votre workflow (par exemple "Mon premier workflow")

### Étape 2 : Ajouter un nœud déclencheur

Tout workflow commence par un déclencheur qui détermine quand le workflow s'exécute :

1. Cliquez sur le bouton "+" dans la zone de travail
2. Recherchez un déclencheur, par exemple "Manual" pour un déclenchement manuel
3. Cliquez sur le nœud pour l'ajouter à votre workflow

### Étape 3 : Ajouter des nœuds d'action

1. Cliquez sur le bouton "+" après le nœud déclencheur
2. Recherchez et sélectionnez un nœud d'action (par exemple "HTTP Request" pour faire une requête web)
3. Configurez le nœud en remplissant les champs requis

### Étape 4 : Connecter les nœuds

1. Cliquez et maintenez sur le point de sortie d'un nœud
2. Faites glisser vers le point d'entrée du nœud suivant
3. Relâchez pour créer une connexion

### Étape 5 : Tester votre workflow

1. Cliquez sur le bouton "Exécuter" en haut à droite
2. Observez l'exécution du workflow et les données qui transitent entre les nœuds
3. Consultez les résultats dans le panneau d'exécution

## Configurer des credentials

Pour connecter n8n à des services externes, vous devez configurer des credentials :

1. Cliquez sur "Credentials" dans la barre latérale
2. Cliquez sur "Créer"
3. Sélectionnez le type de credential (par exemple "Slack API")
4. Remplissez les informations requises (clés API, tokens, etc.)
5. Enregistrez vos credentials

## Activer votre workflow

Une fois que votre workflow fonctionne comme prévu :

1. Cliquez sur le bouton "Activer" en haut à droite
2. Choisissez les options d'activation (par exemple, intervalle d'exécution)
3. Confirmez l'activation

Votre workflow est maintenant actif et s'exécutera selon le déclencheur configuré.

## Bonnes pratiques pour débuter

- Commencez par des workflows simples
- Utilisez la fonction "Debug" pour voir les données à chaque étape
- Consultez les exemples de workflows dans la documentation
- Explorez les différents nœuds disponibles pour comprendre leurs capacités
- N'hésitez pas à utiliser les nœuds "Function" pour transformer vos données
