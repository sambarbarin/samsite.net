---
title: "n8n de A à Z"
date: 2024-06-09
draft: false
description: "Découverte et prise en main de n8n, l'automatisation accessible à tous."
weight: 1
---

# n8n de A à Z

Bienvenue sur cette page dédiée à **n8n**, la plateforme d'automatisation des workflows qui simplifie l'intégration et la gestion de tâches entre vos outils.

## Table des matières

- [Présentation de n8n](#présentation-de-n8n)
- [Installation](#installation)
- [Premiers pas](#premiers-pas)
- [Exemples de workflows](#exemples-de-workflows)
- [Gestion des ressources](#gestion-des-ressources)
- [Limites et bonnes pratiques](#limites-et-bonnes-pratiques)
- [Aller plus loin](#aller-plus-loin)
- [Ressources utiles](#ressources-utiles)

---

## Présentation de n8n

n8n est une plateforme open source d'automatisation des workflows. Elle permet de connecter différents services (API, bases de données, emails, etc.) sans écrire de code complexe.

- Automatisation sans code
- Plus de 200 connecteurs natifs (Slack, Google Sheets, Trello, etc.)
- Possibilité d'ajouter des scripts JS pour des besoins avancés
- Mode Cloud ou auto-hébergement (Docker, VPS, etc.)

---

## Installation

Voici comment déployer n8n rapidement avec Docker :

```bash
docker run -it --rm \
  -p 5678:5678 \
  -e N8N_BASIC_AUTH_ACTIVE=true \
  -e N8N_BASIC_AUTH_USER=admin \
  -e N8N_BASIC_AUTH_PASSWORD=motdepasse \
  n8nio/n8n
