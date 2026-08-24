# Rosine's AI Academy

Crée une page de vente complète en React pour la formation Blue Print IA Academy par Rosine. Voici toutes les instructions précises à suivre sans rien modifier.

DESIGN SYSTEM

Utilise ces variables CSS globales dans un fichier index.css ou via Tailwind custom config :

--ink: #0a0a0f
--paper: #f5f2eb
--gold: #c9a84c
--gold-light: #e8cc7e
--gold-dim: #7a6230
--muted: #7a7468
--border: rgba(201,168,76,0.25)
--card: #111118

Police principale : DM Sans (Google Fonts) — corps de texte

Police titres : Syne (Google Fonts) — tous les h1, h2, h3, labels, badges

Fond général : #0a0a0f

Couleur texte principal : #f5f2eb

Couleur accent : #c9a84c (or)

Overlay bruit de fond : SVG fractalNoise opacity 0.04 en position fixed sur tout le body

Scroll behavior : smooth

Animations : fadeUp (opacity 0 → 1, translateY 24px → 0) sur les éléments hero au chargement + IntersectionObserver classe .reveal → .visible sur scroll

STRUCTURE DE LA PAGE (ordre exact des sections)

Sticky Bar (fixed bottom)

Hero

Proof Bar

Problem

Modules

Who is it for

Section Vidéos pub (3 vidéos)

Section Affiches pub (6 images)

Testimonials (texte)

Section Preuves captures (6 screenshots)

Pricing

FAQ

Final CTA

Footer

SECTION 1 — STICKY BAR (fixed bottom)

Barre fixe en bas de page, z-index: 100. Apparaît seulement quand scrollY > 400 (classe .show via JS).

Background : rgba(10,10,15,0.95) avec backdrop-filter: blur(12px)

Border top : 1px solid rgba(201,168,76,0.25)

Contenu : texte "Blue Print IA Academy — 9 900 FCFA" à gauche + bouton doré "J'accède maintenant" à droite qui ancre vers #pricing

Bouton : background #c9a84c, texte #0a0a0f, font Syne, uppercase, font-size: 0.78rem, padding 12px 24px, border-radius 2px

SECTION 2 — HERO

min-height: 100vh, padding 100px 0 60px

Effet radial gradient doré en haut à droite (décoratif, pointer-events none)

Contenu dans l'ordre avec animations fadeUp (délais : 0.2s / 0.4s / 0.6s / 0.8s) :

Label :

— Blue Print IA Academy

(ligne dorée à gauche + texte uppercase gold, font Syne 11px, letter-spacing 0.2em)

H1 :

Crée des visuels, vidéos et fiches produits
pro avec l'IA — sans agence,
sans budget fou

("pro avec l'IA" en couleur gold #c9a84c, font Syne, font-weight 800, clamp(2.4rem, 6vw, 4rem))

Sous-titre :

La formation complète pour les e-commerçants africains qui veulent utiliser l'intelligence artificielle pour booster leurs ventes — vidéos, affiches pub, fiches produits, pages produits clés en main.

(color #a09a8e, font-size 1.1rem, max-width 560px)

CTA group :

Bouton principal doré : "Accéder à la formation →" qui ancre vers #pricing

Prix à côté : "9 900 FCFA" (gold, Syne, font-weight 800, font-size 1.4rem)

Note sous le bouton : "✓ Accès immédiat · Wave & Orange Money acceptés" (color muted, font-size 0.78rem)

Bouton hover : slide background #e8cc7e de gauche à droite (::before transform translateX)

SECTION 3 — PROOF BAR

Border top + bottom : 1px solid rgba(255,255,255,0.06), padding 32px 0

4 items en flex row (wrap sur mobile), chacun avec icône SVG dorée + texte gris :

Icône users : "+200 e-commerçants formés"

Icône étoile : "4 modules pratiques complets"

Icône horloge : "Accès à vie · Mises à jour incluses"

Icône carte : "Wave · Orange Money · MTN Money"

SECTION 4 — PROBLEM

Background : linear-gradient(180deg, transparent, rgba(201,168,76,0.03) 50%, transparent)

Badge : "Le vrai problème" Ligne dorée 60px sous le badge Texte intro (font-size 1.3rem, color #c8c2b8, max-width 600px) :

Tu as une boutique en ligne, des produits qui méritent d'être vus. Mais les visuels, les vidéos, les descriptions — ça prend un temps fou ou ça coûte une fortune à sous-traiter.

(les mots "les visuels, les vidéos, les descriptions" en color: #f5f2eb font-weight 500)

Liste de 5 items (border 1px rgba(255,255,255,0.07), padding 20px 24px, background rgba(255,255,255,0.02), hover border-color rgba(201,168,76,0.2)) avec ✕ rouge devant chaque item :

✕ Tu passes des heures à rédiger des fiches produits qui ne convertissent pas
✕ Tes visuels publicitaires manquent de pro et tu ne peux pas payer un graphiste chaque fois
✕ Tu ne sais pas créer des vidéos produits attractives sans apparaître à la caméra
✕ Ta page produit ne donne pas envie d'acheter — tu perds des ventes chaque jour
✕ Les agences demandent 50 000 FCFA+ pour ce que l'IA peut faire en 10 minutes

SECTION 5 — MODULES

Badge : "Ce que tu vas maîtriser" H2 : "4 modules. Des résultats concrets." ("Des résultats concrets." en gold)

Grid 2x2 (1 colonne sur mobile), background rgba(201,168,76,0.1), gap 2px, border 1px solid rgba(201,168,76,0.25). Chaque card : background #0a0a0f, padding 36px 32px. Hover : background #0f0f18. Barre verticale dorée 3px à gauche au hover (::before height 0 → 100%).

Module 01 — Création de vidéos produits avec l'IA Tag : HeyGen · CapCut · Runway Description : Génère des vidéos produits professionnelles sans caméra, sans monteur. De l'avatar IA au voiceover, jusqu'au rendu final prêt à publier.

Module 02 — Affiches publicitaires qui vendent Tag : Canva AI · Adobe Firefly · DALL-E Description : Crée des visuels pub percutants pour Facebook, TikTok et Instagram avec l'IA. Fini le graphiste à chaque promo.

Module 03 — Fiches produits ultra-convaincantes Tag : ChatGPT · Claude · Prompts inclus Description : Rédige en quelques minutes des descriptions qui rassurent, séduisent et poussent à l'achat. Avec les bons prompts adaptés à l'Afrique.

Module 04 — Page produit complète et convertissante Tag : Structure · Copywriting · Templates Description : Structure ta page produit comme un pro du e-commerce : hiérarchie visuelle, copywriting, preuves sociales et CTA optimisés.

SECTION 6 — POUR QUI

Badge : "Pour qui ?" H2 : "Cette formation est faite pour toi" ("faite pour toi" en gold)

Grid 2 colonnes (1 sur mobile). Deux cards côte à côte :

Card gauche — OUI (border rgba(201,168,76,0.25), background rgba(201,168,76,0.04)) : Titre gold uppercase : "✓ C'est pour toi si..." Liste avec ✓ gold devant chaque item :

Tu vends des produits en ligne en Afrique francophone

Tu veux des visuels pro sans dépenser 50 000 FCFA+ par mois

Tu es débutant avec l'IA mais motivé à apprendre

Tu veux aller vite et avoir des résultats dès la semaine 1

Tu veux rester compétitif face aux grandes boutiques

Card droite — NON (border rgba(255,255,255,0.05)) : Titre muted uppercase : "✕ Ce n'est pas pour toi si..." Liste avec ✕ gris devant chaque item :

Tu cherches une formation théorique sans pratique

Tu n'as aucun produit ou boutique en ligne

Tu veux des résultats sans faire aucun effort

Tu n'es pas prêt à investir 10 min par jour

SECTION 7 — VIDÉOS PUBLICITAIRES ⬅ UPLOAD ZONE

Badge : "La formation en action" H2 : "Vois par toi-même ce que l'IA produit" ("ce que l'IA produit" en gold) Sous-titre (color muted) : "Des vidéos produits 100% générées avec les outils enseignés dans la formation."

Grid 3 colonnes (1 colonne sur mobile, 2 sur tablette), gap 20px.

Chaque card vidéo :

Background #111118

Border 1px solid rgba(255,255,255,0.07)

Border-radius 6px

Overflow hidden

Hover : border-color rgba(201,168,76,0.3), légère élévation (box-shadow)

Structure interne de chaque card vidéo :

[Zone vidéo — aspect-ratio 9/16 ou 16/9 selon le contenu]
  <video controls preload="metadata" style="width:100%; height:100%; object-fit:cover;">
    <source src="/videos/video-1.mp4" type="video/mp4" />
  </video>

[Footer de la card]
  Label : "Vidéo produit IA · Module 01"
  Sous-label muted : "Créé avec HeyGen + CapCut"

Les 3 cards vidéo doivent avoir les sources :

/videos/video-1.mp4 — label "Vidéo produit IA · Module 01"

/videos/video-2.mp4 — label "Affiche animée pub · Module 02"

/videos/video-3.mp4 — label "Présentation page produit · Module 04"

Place les fichiers vidéo dans public/videos/ dans le projet Lovable.

SECTION 8 — AFFICHES PUBLICITAIRES ⬅ UPLOAD ZONE

Badge : "Résultats visuels" H2 : "Des affiches pub créées en 5 minutes" ("créées en 5 minutes" en gold) Sous-titre (color muted) : "Toutes ces affiches ont été générées avec les outils du Module 02 — sans graphiste, sans agence."

Grid 3 colonnes x 2 lignes = 6 images (2 colonnes sur mobile). Gap : 12px.

Chaque card image :

Border-radius 4px

Overflow hidden

Aspect-ratio 1/1 (carré) ou 4/5 (portrait)

Hover : scale(1.02), légère transition 0.3s

Border 1px solid rgba(255,255,255,0.06)

Structure de chaque card :

<img src="/images/affiche-1.jpg" alt="Affiche publicitaire IA 1" style="width:100%; height:100%; object-fit:cover;" />

Les 6 sources d'images :

/images/affiche-1.jpg

/images/affiche-2.jpg

/images/affiche-3.jpg

/images/affiche-4.jpg

/images/affiche-5.jpg

/images/affiche-6.jpg

Place les fichiers dans public/images/ dans le projet Lovable.

Note en bas de section (font-size 0.78rem, color muted, text-align center, margin-top 20px) : "💡 Tu apprendras à créer exactement ce type de visuels dans le Module 02"

SECTION 9 — TESTIMONIALS TEXTE

Badge : "Ils témoignent" H2 : "Ce qu'ils disent après la formation" ("la formation" en gold)

Grid 2 colonnes (1 sur mobile). 4 cards témoignages.

Chaque card :

Background #111118

Border 1px solid rgba(201,168,76,0.25)

Border-radius 4px

Padding 32px 28px

Guillemet décoratif " en font-size 5rem, font Syne, color gold opacity 0.15, position absolute top left

Témoignage 1 : Texte : "Avant je payais un graphiste 15 000 FCFA par affiche. Maintenant je crée mes visuels en 5 minutes avec l'IA. Cette formation m'a rentabilisée dès la première semaine." Initiales avatar : AM (gradient gold) Nom : Awa M. Rôle : Boutique mode — Dakar Étoiles : ★★★★★

Témoignage 2 : Texte : "Mes fiches produits étaient nulles avant. Après le module 3, mon taux de conversion a augmenté. Les clients me disent que la description leur a donné envie d'acheter." Initiales avatar : KD Nom : Kofi D. Rôle : E-commerce cosmétiques — Abidjan Étoiles : ★★★★★

Témoignage 3 : Texte : "Je ne savais pas utiliser l'IA du tout. Rosine explique vraiment simplement. J'ai fait ma première vidéo produit en 2 heures. Mes followers ont adoré le rendu." Initiales avatar : FN Nom : Fatou N. Rôle : Boutique bijoux — Douala Étoiles : ★★★★★

Témoignage 4 : Texte : "La partie page produit complète m'a vraiment aidé. J'ai refait toutes mes pages en appliquant la méthode et mes ventes ont augmenté ce mois-ci. Je recommande à 100%." Initiales avatar : BS Nom : Brice S. Rôle : Drop shipping — Lomé Étoiles : ★★★★★

SECTION 10 — PREUVES CAPTURES ⬅ UPLOAD ZONE

Badge : "Ils l'ont fait" H2 : "Preuves réelles de résultats" ("Preuves réelles" en gold) Sous-titre (color muted) : "Des captures d'écran envoyées par des apprenants après avoir appliqué les modules. Non retouchées."

Grid 3 colonnes x 2 lignes = 6 captures (2 colonnes sur mobile). Gap : 16px.

Chaque card capture :

Background #111118

Border 1px solid rgba(255,255,255,0.07)

Border-radius 6px

Overflow hidden

Aspect-ratio 9/16 (format mobile screenshot) — ajustable

Hover : border-color rgba(201,168,76,0.4), box-shadow 0 0 20px rgba(201,168,76,0.08)

Transition 0.3s

Structure de chaque card :

<img src="/images/preuve-1.jpg" alt="Preuve résultat apprenant 1" style="width:100%; height:100%; object-fit:cover; object-position:top;" />

Les 6 sources :

/images/preuve-1.jpg

/images/preuve-2.jpg

/images/preuve-3.jpg

/images/preuve-4.jpg

/images/preuve-5.jpg

/images/preuve-6.jpg

Place les fichiers dans public/images/ dans le projet Lovable.

Badge de confiance sous la grille (centré, margin-top 24px) :

🔒 Captures partagées avec accord des apprenants · Résultats non garantis et variables selon l'effort

(font-size 0.75rem, color muted, border 1px solid rgba(255,255,255,0.06), padding 10px 20px, border-radius 2px)

SECTION 11 — PRICING

Badge : "Tarif" H2 : "Un seul investissement. Des résultats durables." ("Des résultats durables." en gold)

Card centrée max-width 480px, margin auto :

Border 1px solid rgba(201,168,76,0.25)

Padding 56px 48px

Background gradient linear-gradient(135deg, rgba(201,168,76,0.04), transparent)

Effet border glow subtil via ::before pseudo-element

Contenu de la card dans l'ordre :

Label uppercase gold tiny : "Blue Print IA Academy — Accès complet"

Prix : "9 900 FCFA" (Syne, font-weight 800, font-size 3.5rem, "FCFA" en muted plus petit)

Sous-prix : "Paiement unique · Accès à vie" (color muted)

Bouton plein largeur gold : "Je veux accéder maintenant →" — href vers lien de paiement (mettre href="LIEN_PAIEMENT" comme placeholder)

Liste 7 items avec ✓ dans cercle gold :

Module 1 — Création vidéos produits IA

Module 2 — Affiches publicitaires IA

Module 3 — Fiches produits ultra-convaincantes

Module 4 — Page produit complète et convertissante

Tous les prompts utilisés dans la formation

Accès à vie + mises à jour gratuites

Support communauté WhatsApp

Badges paiement en bas : Wave · Orange Money · MTN Money (style pill, background rgba(255,255,255,0.05))

SECTION 12 — FAQ

Badge : "FAQ" H2 : "Questions fréquentes"

Max-width 620px centré. 5 accordéons (border-bottom 1px solid rgba(255,255,255,0.07), padding 24px 0).

Chaque item a une question cliquable avec icône + qui rotate 45° à l'ouverture. Un seul item ouvert à la fois.

Q1 : Je suis débutant avec l'IA, est-ce que je peux suivre ? R : Oui, la formation est conçue pour les débutants complets. Chaque outil est expliqué étape par étape avec des exemples concrets adaptés au contexte africain.

Q2 : Est-ce que les outils utilisés sont gratuits ? R : La majorité des outils enseignés ont une version gratuite suffisante pour démarrer. Certains ont des plans payants optionnels pour plus de volume, mais tu peux obtenir de vrais résultats sans débourser plus.

Q3 : Combien de temps faut-il pour voir les premiers résultats ? R : Dès le premier module appliqué, tu peux créer ta première vidéo ou affiche produit. La plupart des apprenants voient des résultats concrets en moins d'une semaine.

Q4 : Comment j'accède à la formation après paiement ? R : Après confirmation du paiement, tu reçois instantanément un lien d'accès par WhatsApp ou email. L'accès est immédiat, 24h/24.

Q5 : Y a-t-il un remboursement possible ? R : Oui, si tu appliques les méthodes et que tu n'obtiens aucun résultat dans les 7 jours, on examine ton cas et on trouve une solution ensemble. On veut que tu réussisses.

SECTION 13 — FINAL CTA

Text-align center. Effet radial gradient doré centré (décoratif).

Badge : "Dernière chance" Ligne dorée 60px centrée H2 (max-width 560px, margin auto) :

L'IA ne va pas attendre que tu sois prêt. Tes concurrents, eux, avancent.

("Tes concurrents, eux, avancent." en gold)

Paragraphe muted (max-width 480px, margin auto) :

Pour 9 900 FCFA — soit moins qu'une affiche sous-traitée — tu accèdes à 4 modules complets qui vont transformer ta façon de vendre en ligne.

Bouton gold centré : "Accéder à Blue Print IA Academy →" — ancre vers #pricing

Note sous le bouton : "✓ Wave · Orange Money · MTN Money — Accès immédiat après paiement"

SECTION 14 — FOOTER

Border-top 1px solid rgba(255,255,255,0.06), padding 32px 0, text-align center.

Texte color #4a4840, font-size 0.78rem :

© 2025 Blue Print IA Academy by Rosine — Tous droits réservés

COMPORTEMENTS JS

Sticky bar : apparaît si window.scrollY > 400, disparaît sinon. Transition transform: translateY(100%) → translateY(0).

Reveal on scroll : IntersectionObserver sur tous les éléments .reveal. Quand visible, ajoute la classe .visible qui trigger opacity: 1 + transform: translateY(0). Threshold : 0.1.

FAQ accordéon : clic sur une question toggle sa classe .open. Ferme tous les autres items avant d'ouvrir le cliqué. L'icône + pivote 45° via CSS transform: rotate(45deg) sur .open .icon. La réponse s'ouvre via max-height: 0 → max-height: 200px avec transition 0.4s.

RESPONSIVE

Mobile first

Toutes les grids 2 colonnes passent en 1 colonne sous 600px

La grille 3 colonnes (vidéos, affiches, captures) passe en 1 colonne sous 600px et 2 colonnes entre 600px et 900px

Le sticky bar stack verticalement sur mobile (flex-direction column)

Le prix dans le hero reste sur une seule ligne (flex wrap)

Padding des sections : 80px desktop → 48px mobile

NOTES FINALES POUR LOVABLE

Utilise React + Tailwind CSS avec config custom pour les variables de couleur

Les images et vidéos sont à uploader dans le dossier public/ via l'interface Lovable

Le lien du bouton d'achat est un placeholder LIEN_PAIEMENT à remplacer par le vrai lien Wave/Orange Money

Ne pas ajouter de navigation header — la page est un one-page sans menu

Ne pas ajouter de cookies banner ou analytics non demandés

Respecter exactement l'ordre des sections défini ci-dessus

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://gold-boost-creations.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1f325597-a5dc-4cd3-96ee-fd8a3324345f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
