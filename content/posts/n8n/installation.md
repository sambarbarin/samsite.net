---
title: "Installation"
date: 2024-06-09
draft: false
weight: 2
---

# Installation de n8n

L'installation de n8n peut se faire de plusieurs façons selon vos besoins et votre environnement technique.

## Prérequis

Avant d'installer n8n, assurez-vous d'avoir :

- Node.js (version 14 ou supérieure)
- npm ou yarn
- Éventuellement Docker si vous préférez cette méthode

## Méthodes d'installation

### Avec npm

La méthode la plus simple pour une installation rapide :

```bash
npm install n8n -g
n8n start
```

Une fois installé, n8n sera accessible à l'adresse http://localhost:5678.

### Avec Docker

Pour une installation isolée et facilement déployable :

```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

Cette commande :
- Crée un conteneur nommé "n8n"
- Expose le port 5678
- Persiste les données dans un volume local

### Avec Docker Compose

Pour une configuration plus avancée, vous pouvez utiliser Docker Compose :

```yaml
version: '3'

services:
  n8n:
    image: n8nio/n8n
    restart: always
    ports:
      - "5678:5678"
    volumes:
      - ~/.n8n:/home/node/.n8n
    environment:
      - N8N_PROTOCOL=http
      - N8N_HOST=localhost
      - N8N_PORT=5678
      # Décommentez pour activer l'authentification
      # - N8N_BASIC_AUTH_ACTIVE=true
      # - N8N_BASIC_AUTH_USER=user
      # - N8N_BASIC_AUTH_PASSWORD=password
```

### Installation sur un serveur de production

Pour un environnement de production, il est recommandé :

1. D'utiliser Docker ou Docker Compose
2. De configurer un proxy inverse (Nginx, Apache)
3. D'activer l'authentification
4. De configurer HTTPS

## Vérification de l'installation

Après l'installation, vérifiez que n8n fonctionne correctement en accédant à :
- http://localhost:5678 (installation locale)
- ou l'URL de votre serveur si déployé en production

Vous devriez voir l'interface de n8n s'afficher, prête à être utilisée.
