---
title: "Exemples de workflows"
date: 2024-06-09
draft: false
weight: 4
---

# Exemples de workflows avec n8n

Cette section présente plusieurs exemples concrets de workflows que vous pouvez créer avec n8n. Ces exemples vous aideront à comprendre les possibilités offertes par la plateforme et à vous inspirer pour vos propres automatisations.

## Exemple 1 : Surveillance de prix et notification

Ce workflow surveille le prix d'un produit sur un site web et vous envoie une notification lorsque le prix baisse.

### Composants du workflow :
1. **Schedule Trigger** : Exécution quotidienne
2. **HTTP Request** : Récupération de la page web du produit
3. **HTML Extract** : Extraction du prix du produit
4. **IF** : Vérification si le prix est inférieur à un seuil défini
5. **Slack** : Envoi d'une notification si le prix a baissé

### Étapes de configuration :
1. Configurez le déclencheur Schedule pour s'exécuter une fois par jour
2. Dans le nœud HTTP Request, entrez l'URL de la page du produit
3. Utilisez HTML Extract pour cibler l'élément HTML contenant le prix
4. Configurez le nœud IF pour comparer le prix extrait avec votre seuil
5. Configurez le nœud Slack pour envoyer un message avec les détails du produit et son prix

## Exemple 2 : Synchronisation entre CRM et tableur

Ce workflow synchronise automatiquement les nouveaux contacts de votre CRM vers un tableur Google Sheets.

### Composants du workflow :
1. **Webhook** : Déclenché par un événement du CRM
2. **CRM Node** (ex: HubSpot, Salesforce) : Récupération des détails du contact
3. **Function** : Formatage des données
4. **Google Sheets** : Ajout d'une ligne dans le tableur

### Étapes de configuration :
1. Créez un webhook dans n8n et configurez votre CRM pour l'appeler lors de la création d'un contact
2. Configurez le nœud CRM pour récupérer les détails complets du contact
3. Utilisez un nœud Function pour formater les données selon la structure de votre tableur
4. Configurez le nœud Google Sheets pour ajouter les données dans la feuille appropriée

## Exemple 3 : Automatisation de médias sociaux

Ce workflow publie automatiquement sur plusieurs plateformes de médias sociaux à partir d'un seul formulaire.

### Composants du workflow :
1. **Form Trigger** : Formulaire pour saisir le contenu à publier
2. **Twitter** : Publication sur Twitter
3. **LinkedIn** : Publication sur LinkedIn
4. **Facebook** : Publication sur Facebook
5. **Telegram** : Envoi d'un message sur un canal Telegram

### Étapes de configuration :
1. Créez un formulaire avec des champs pour le texte, les images et les options de publication
2. Configurez les nœuds de médias sociaux avec les credentials appropriés
3. Utilisez des nœuds IF pour déterminer sur quelles plateformes publier selon les options sélectionnées
4. Ajoutez des nœuds de notification pour confirmer les publications réussies

## Exemple 4 : Traitement automatisé de données

Ce workflow récupère des données d'une API, les traite et les stocke dans une base de données.

### Composants du workflow :
1. **Schedule Trigger** : Exécution périodique
2. **HTTP Request** : Appel à une API externe
3. **Function** : Transformation et nettoyage des données
4. **Split In Batches** : Traitement par lots
5. **PostgreSQL/MySQL** : Insertion dans une base de données

### Étapes de configuration :
1. Configurez le déclencheur Schedule selon la fréquence souhaitée
2. Dans le nœud HTTP Request, configurez l'appel API avec les paramètres nécessaires
3. Utilisez un nœud Function pour transformer les données (filtrage, formatage, etc.)
4. Configurez le nœud de base de données pour insérer ou mettre à jour les enregistrements

## Exemple 5 : Automatisation de support client

Ce workflow automatise le traitement des demandes de support reçues par email.

### Composants du workflow :
1. **Email Trigger (IMAP)** : Surveillance d'une boîte mail de support
2. **Text Analysis** : Analyse du contenu de l'email
3. **IF** : Routage selon le type de demande
4. **HTTP Request** : Création d'un ticket dans un système de support
5. **Send Email** : Envoi d'une réponse automatique

### Étapes de configuration :
1. Configurez le déclencheur Email pour surveiller une boîte mail spécifique
2. Utilisez un nœud Function avec des expressions régulières pour analyser le contenu
3. Configurez des branches conditionnelles pour différents types de demandes
4. Paramétrez les intégrations avec votre système de tickets de support
5. Créez des modèles de réponses automatiques selon le type de demande

## Conseils pour adapter ces exemples

- Commencez par copier un exemple qui se rapproche de votre besoin
- Modifiez progressivement les nœuds pour les adapter à vos systèmes
- Testez fréquemment pendant la modification pour identifier rapidement les problèmes
- Documentez votre workflow avec des notes sur chaque nœud
- Utilisez des nœuds "Error Trigger" pour gérer les cas d'échec
