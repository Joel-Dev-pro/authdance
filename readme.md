# 🎭 AUTHENTIK DANCE - Site Web Vitrine

Site web professionnel, moderne et responsive pour le groupe de danse Authentik Dance.

## 📋 Table des matières

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Structure du projet](#structure-du-projet)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Personnalisation](#personnalisation)
- [Pages](#pages)
- [Caractéristiques techniques](#caractéristiques-techniques)

## 🎨 Aperçu

Authentik Dance est un site vitrine élégant et dynamique conçu pour présenter un groupe de danse professionnel. Le design combine des couleurs vibrantes (rose et bleu) avec une typographie moderne et des animations fluides qui évoquent le mouvement de la danse.

### Identité visuelle
- **Couleurs principales** : Rose (#FF1493) et Bleu (#00D4FF)
- **Typographie** : Playfair Display (titres) + DM Sans (corps de texte)
- **Style** : Moderne, artistique, énergétique

## ✨ Fonctionnalités

- ✅ Design 100% responsive (mobile, tablette, desktop)
- ✅ Animations au scroll élégantes
- ✅ Navigation fixe avec menu burger mobile
- ✅ Formulaire de contact avec validation
- ✅ Section galerie interactive
- ✅ Pages multiples optimisées
- ✅ Intégration réseaux sociaux
- ✅ Performance optimisée
- ✅ Code propre et commenté

## 📁 Structure du projet

```
authentik-dance/
│
├── index.html              # Page d'accueil
├── about.html              # Page À Propos
├── prestations.html        # Page Prestations
├── suivre.html             # Page Suivre (réseaux sociaux)
├── contact.html            # Page Contact
├── README.md               # Documentation
│
├── css/
│   └── style.css          # Styles complets du site
│
├── js/
│   └── script.js          # JavaScript interactif
│
├── images/                # Dossier pour les images (à remplir)
│
└── fonts/                 # Dossier pour les polices personnalisées (optionnel)
```

## 🛠️ Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Design moderne avec Flexbox et Grid
- **JavaScript (Vanilla)** - Interactions et animations
- **Google Fonts** - Playfair Display & DM Sans

**Aucune dépendance externe requise !**

## 🚀 Installation

1. **Téléchargez tous les fichiers**
2. **Conservez la structure des dossiers**
3. **Ouvrez `index.html` dans votre navigateur**

C'est tout ! Le site est prêt à l'emploi.

### Pour le déploiement en ligne

Vous pouvez héberger ce site sur :
- GitHub Pages (gratuit)
- Netlify (gratuit)
- Vercel (gratuit)
- Votre hébergeur web traditionnel

## 🎨 Personnalisation

### Changer les couleurs

Dans `css/style.css`, modifiez les variables CSS :

```css
:root {
    --color-pink: #FF1493;      /* Couleur principale rose */
    --color-blue: #00D4FF;      /* Couleur secondaire bleue */
    --color-purple: #9D00FF;    /* Couleur accent violet */
    /* ... */
}
```

### Ajouter des images

1. Placez vos images dans le dossier `images/`
2. Remplacez les placeholders dans les fichiers HTML
3. Pour le hero : ajoutez une image de fond dans `.hero-bg`
4. Pour la galerie : remplacez les `.gallery-placeholder`

Exemple pour le hero :

```css
.hero-bg {
    background-image: url('../images/hero-image.jpg');
    background-size: cover;
    background-position: center;
}
```

### Modifier les textes

Tous les textes sont directement modifiables dans les fichiers HTML. Recherchez et remplacez selon vos besoins.

### Ajouter des liens réseaux sociaux

Dans tous les fichiers HTML, remplacez les `#` par vos vrais liens :

```html
<a href="https://instagram.com/votrecompte" target="_blank">Instagram</a>
```

## 📄 Pages

### 1. **Accueil** (`index.html`)
- Hero section plein écran avec animations
- Présentation du groupe
- Aperçu des prestations
- Galerie photos
- Call-to-action réseaux sociaux

### 2. **À Propos** (`about.html`)
- Histoire du groupe
- Vision et mission artistique
- Valeurs (Authenticité, Passion, Créativité, Professionnalisme)
- Call-to-action

### 3. **Prestations** (`prestations.html`)
- Shows de danse
- Animations événementielles
- Performances scéniques
- Collaborations artistiques
- Processus de travail
- FAQ

### 4. **Suivre** (`suivre.html`)
- Liens vers Instagram, Facebook, TikTok
- Description de chaque plateforme
- Formulaire newsletter
- Avantages de la communauté

### 5. **Contact** (`contact.html`)
- Formulaire de contact complet avec validation
- Informations sur les raisons de contact
- Liens réseaux sociaux
- FAQ

## 🔧 Caractéristiques techniques

### Responsive Design

Le site s'adapte automatiquement à toutes les tailles d'écran :

- **Mobile** : < 640px (menu burger, colonnes simples)
- **Tablette** : 640px - 968px (colonnes adaptées)
- **Desktop** : > 968px (expérience complète)

### Animations

- Animations au scroll (Intersection Observer)
- Transitions fluides
- Effets hover
- Parallax subtil sur le hero

### Performance

- Code optimisé et léger
- Images responsive
- Chargement rapide
- Pas de dépendances lourdes

### Accessibilité

- Navigation au clavier
- Attributs ARIA
- Contraste des couleurs
- Structure sémantique

## 📧 Formulaire de contact

Le formulaire de contact inclut :

- Validation côté client
- Messages d'erreur clairs
- Confirmation de soumission
- Champs requis indiqués

**Note** : Le formulaire est actuellement côté client uniquement. Pour un formulaire fonctionnel, vous devrez :

1. Ajouter un backend (PHP, Node.js, etc.)
2. Ou utiliser un service comme Formspree, EmailJS, Netlify Forms

Exemple avec Formspree :

```html
<form action="https://formspree.io/f/votre-id" method="POST">
    <!-- Vos champs de formulaire -->
</form>
```

## 🎯 Optimisations SEO

Le site inclut déjà :

- Meta descriptions sur chaque page
- Structure HTML sémantique
- Balises alt (à compléter avec vos images)
- URLs propres et descriptives

Pour améliorer le SEO :

1. Ajoutez des balises alt à toutes les images
2. Créez un fichier `sitemap.xml`
3. Ajoutez un fichier `robots.txt`
4. Optimisez la vitesse de chargement des images

## 🌐 Support navigateurs

Le site fonctionne sur :

- ✅ Chrome (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Safari (dernières versions)
- ✅ Edge (dernières versions)
- ✅ Navigateurs mobiles

## 📱 Progressive Web App (Optionnel)

Pour transformer le site en PWA, ajoutez :

1. Un fichier `manifest.json`
2. Un service worker
3. Des icônes pour différentes tailles

## 🎉 Fonctionnalités futures possibles

- [ ] Système de réservation en ligne
- [ ] Galerie vidéo avec lecteur intégré
- [ ] Blog pour les actualités
- [ ] Témoignages clients
- [ ] Calendrier d'événements
- [ ] Boutique en ligne (merchandising)
- [ ] Espace membre

## 💡 Conseils d'utilisation

1. **Images** : Utilisez des images optimisées (WebP si possible)
2. **Contenu** : Mettez à jour régulièrement vos événements
3. **Réseaux sociaux** : Intégrez vos flux Instagram/TikTok
4. **Analytics** : Ajoutez Google Analytics pour suivre les visiteurs
5. **Backups** : Sauvegardez régulièrement votre site

## 🆘 Support

Pour toute question ou personnalisation, n'hésitez pas à :

1. Consulter les commentaires dans le code
2. Utiliser les outils de développement du navigateur (F12)
3. Tester sur différents appareils

## 📜 Licence

Ce projet a été créé pour Authentik Dance.

## 🙏 Crédits

- **Design & Développement** : Création sur mesure
- **Polices** : Google Fonts (Playfair Display, DM Sans)
- **Icônes** : SVG personnalisés

---

**Authentik Dance** - L'authenticité du mouvement 💃🕺

*Site créé avec passion pour mettre en valeur l'art de la danse*