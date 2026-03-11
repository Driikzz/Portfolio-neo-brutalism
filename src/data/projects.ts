export interface ProjectSection {
  heading: string;
  content: string;
  highlight?: {
    label: string;
    labelColor?: string;
    text: string;
  };
  bullets?: string[];
}

export interface Project {
  slug: string;
  bannerTitle: string;
  bannerColor: string;
  bannerTextColor?: string;
  title: string;
  description: string;
  tags: string[];
  type: string;
  date: string;
  status: string;
  statusColor?: string;
  demoUrl: string;
  codeUrl: string;
  intro: string;
  sections: ProjectSection[];
  challenge: string;
}

export const projects: Project[] = [
  {
    slug: 'neon-market',
    bannerTitle: 'E-COMM',
    bannerColor: '#8C52FF',
    title: 'Neon Market',
    description:
      'Plateforme e-commerce haute performance avec gestion des stocks en temps réel et intégration de paiement sans friction.',
    tags: ['REACT', 'STRIPE', 'NODE'],
    type: 'E-Commerce',
    date: 'Jan 2024',
    status: 'Terminé',
    statusColor: '#22D3EE',
    demoUrl: '#',
    codeUrl: '#',
    intro:
      "Neon Market est une plateforme e-commerce pensée pour la performance. L'objectif : zéro latence côté panier, paiement en moins de trois clics, et un back-office qui ne donne pas envie de fuir. Le tout avec un stack moderne et maintenable.",
    sections: [
      {
        heading: 'Le problème à résoudre',
        content:
          "La plupart des solutions e-commerce du marché souffrent du même mal : elles sont pensées pour les marchands, pas pour les clients. Résultat ? Des tunnels de conversion interminables, des rechargements de page inutiles et une gestion de stock qui vit dans un fichier Excel quelque part.",
        highlight: {
          label: 'PROBLÈME',
          labelColor: '#FF3EA5',
          text: '"Un panier qui se vide au rechargement, c\'est 30 % de conversions perdues. On réglait ça en premier."',
        },
      },
      {
        heading: 'L\'architecture choisie',
        content:
          "React en front pour l'interactivité, Node.js + Express en API, PostgreSQL pour la persistance et Redis pour le cache des stocks. Stripe Checkout côté paiement pour ne pas manipuler de données sensibles. Chaque service est découplé et déployable indépendamment.",
        highlight: {
          label: 'APPROCHE',
          labelColor: '#8C52FF',
          text: '"On a mis le stock en Redis avec un TTL court. Les conflits de concurrence ? Résolus avec des locks Lua-scripts côté Redis. Simple et atomique."',
        },
      },
      {
        heading: 'Résultats mesurés',
        content:
          "Après déploiement sur un panel de 200 utilisateurs test, les métriques ont validé les choix d'architecture.",
        bullets: [
          'Temps de réponse API < 80ms en moyenne',
          'Taux de conversion panier → paiement : +38% vs solution précédente',
          'Zéro conflit de stock sur 1 200 commandes simultanées testées',
          'Score Lighthouse 97/100 en performance',
        ],
      },
    ],
    challenge:
      "Le vrai défi était la cohérence du stock en temps réel avec plusieurs onglets ouverts. La solution : WebSocket côté client pour recevoir les mises à jour d'inventaire sans polling, et une UI qui bloque le bouton \"Acheter\" dès que le stock tombe à zéro — même si tu as la page ouverte depuis 10 minutes.",
  },
  {
    slug: 'analytics-pro',
    bannerTitle: 'DASH',
    bannerColor: '#FF3EA5',
    title: 'Analytics Pro',
    description:
      "Dashboard de visualisation de données pour piloter la croissance de vos réseaux sociaux. Des insights clairs, en temps réel.",
    tags: ['VUE', 'FIREBASE', 'D3.JS'],
    type: 'Dashboard',
    date: 'Mar 2024',
    status: 'En cours',
    statusColor: '#F97316',
    demoUrl: '#',
    codeUrl: '#',
    intro:
      "Analytics Pro transforme des données brutes en décisions actionnables. L'idée de départ : donner aux créateurs et community managers une vue consolidée de leur présence en ligne sans avoir à jongler entre 5 onglets différents.",
    sections: [
      {
        heading: 'Pourquoi D3.js et pas une lib de charts toute faite ?',
        content:
          "Chart.js ou Recharts auraient couvert 80% des besoins, mais on voulait des visualisations custom — notamment un heatmap d'engagement par heure/jour et un graph de corrélation entre posts et followers. Ces vues n'existent pas out-of-the-box.",
        highlight: {
          label: 'CHOIX TECHNIQUE',
          labelColor: '#FF3EA5',
          text: '"D3 c\'est verbeux mais c\'est la seule lib qui te laisse vraiment tout contrôler. On a encapsulé les primitives dans des composants Vue réutilisables."',
        },
      },
      {
        heading: 'La sync temps réel avec Firebase',
        content:
          "Firebase Realtime Database écoute les mises à jour des métriques toutes les 15 minutes via un Cloud Function qui agrège les données des APIs sociales. Le dashboard se met à jour sans rechargement grâce aux listeners onValue de Firebase.",
        bullets: [
          'Connexion simultanée à 4 APIs sociales (Instagram, X, LinkedIn, TikTok)',
          'Agrégation côté serveur pour minimiser les appels côté client',
          'Cache Firebase pour les données historiques (> 24h)',
          'Alertes en temps réel si une métrique dépasse un seuil défini',
        ],
      },
      {
        heading: 'Interface et UX',
        content:
          "Le dashboard est entièrement customisable : drag and drop des widgets, choix des métriques affichées, export CSV/PNG. La sidebar gauche contient les filtres de période et les sélecteurs de compte.",
        highlight: {
          label: 'UX WIN',
          labelColor: '#8C52FF',
          text: '"On a testé avec des vrai community managers. La fonctionnalité la plus demandée post-test : comparer deux périodes côte à côte. Ça a été ajouté en sprint 3."',
        },
      },
    ],
    challenge:
      "Normaliser des formats de données complètement différents selon les API (Twitter retourne des timestamps Unix, Instagram des ISO 8601, TikTok ses propres trucs) sans que le front en sache rien. On a créé un layer de transformation Firebase Function qui normalise tout en un schéma unique avant stockage.",
  },
  {
    slug: 'talkflow',
    bannerTitle: 'CHAT',
    bannerColor: '#22D3EE',
    bannerTextColor: '#1a1a1a',
    title: 'TalkFlow',
    description:
      "Messagerie temps réel chiffrée de bout en bout, partage de fichiers et canaux de groupe. Slack, mais le vôtre.",
    tags: ['SOCKET.IO', 'EXPRESS', 'REDIS'],
    type: 'Application',
    date: 'Jun 2024',
    status: 'Terminé',
    statusColor: '#22D3EE',
    demoUrl: '#',
    codeUrl: '#',
    intro:
      "TalkFlow est une messagerie instantanée auto-hébergeable. On voulait prouver qu'on peut construire un Slack fonctionnel en quelques semaines avec les bons outils — et surtout sans dépendre d'un SaaS tiers pour les données de ses utilisateurs.",
    sections: [
      {
        heading: 'Architecture temps réel avec Socket.IO',
        content:
          "Chaque message passe par un serveur Socket.IO qui broadcast dans la room correspondante. Les messages sont persistés dans PostgreSQL via une job queue (Bull + Redis) pour ne jamais bloquer le thread principal. L'historique est paginé côté API REST.",
        highlight: {
          label: 'ARCHITECTURE',
          labelColor: '#22D3EE',
          text: '"Socket.IO gère le temps réel, l\'API REST gère l\'historique. Les deux partagent la même base Redis pour les sessions. Séparation de responsabilités claire."',
        },
      },
      {
        heading: 'Le chiffrement bout-en-bout',
        content:
          "Implémenté avec la Web Crypto API côté client. La clé de chiffrement est dérivée du mot de passe utilisateur via PBKDF2 et n'est jamais envoyée au serveur. Seuls les participants d'une conversation peuvent déchiffrer les messages.",
        highlight: {
          label: 'SÉCURITÉ',
          labelColor: '#FF3EA5',
          text: '"Le serveur stocke des messages chiffrés qu\'il ne peut pas lire. Même avec accès direct à la base, les données restent illisibles sans la clé client."',
        },
      },
      {
        heading: 'Fonctionnalités clés',
        content:
          "Au-delà du messaging de base, TalkFlow supporte plusieurs fonctionnalités avancées.",
        bullets: [
          'Canaux publics, privés et messages directs',
          'Partage de fichiers jusqu\'à 100MB (stockage S3)',
          'Indicateurs de frappe et de lecture',
          'Recherche full-text dans l\'historique (PostgreSQL tsvector)',
          'Notifications push via Service Worker',
        ],
      },
    ],
    challenge:
      "Gérer la reconnexion proprement. Quand un client perd sa connexion et se reconnecte, il doit recevoir tous les messages manqués sans doublons, dans le bon ordre, même s'il y a eu des messages envoyés pendant l'interruption. Solution : chaque message a un sequence number par room. À la reconnexion, le client envoie son dernier seq connu, le serveur envoie le diff.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getOtherProjects(slug: string): Project[] {
  return projects.filter((p) => p.slug !== slug).slice(0, 2);
}
