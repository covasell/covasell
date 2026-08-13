# CovaSell — Design System & Charte graphique
Direction retenue : **B — « Ligne directe »** (validée)

Ce document accompagne le prototype de code (`/app`, `/components`, `/lib`). Il sert de référence unique pour le développeur qui reprend le travail : couleurs, typographies, composants, comportements, et parcours UX. Les valeurs de couleurs/espacements/rayons sont dupliquées dans `lib/tokens.ts` et `tailwind.config.ts` — ce document explique le *pourquoi*, le code contient le *quoi*.

---

## 1. Positionnement visuel

CovaSell n'est pas présenté comme un créateur de boutique, mais comme le commercial digital du commerçant. La direction B traduit ça par une **signature conversationnelle discrète** appliquée à toute l'interface (pas seulement à l'assistant) : un coin légèrement plus marqué sur les cartes, boutons et bulles — écho subtil d'une bulle de conversation, sans jamais dessiner de vraie bulle avec « queue ». L'objectif : que l'utilisateur *ressente* le côté conversationnel sans jamais le voir comme un gadget ou un clone de messagerie.

Trois garde-fous imposés et respectés dans ce document :
- **Éviter la ressemblance avec WhatsApp** : le vert WhatsApp (#25D366, vif et saturé) est explicitement exclu. La couleur primaire est un sarcelle profond et désaturé, plus proche d'une identité "fintech premium" que d'une messagerie.
- **Rester léger/performant** : pas d'animations lourdes, pas d'images non optimisées, palette limitée, une seule famille de police + une police de secours système.
- **Dashboard extrêmement simple** : hiérarchie visuelle forte, peu de choix par écran, gros éléments tactiles, aucun jargon technique dans l'interface.

---

## 2. Palette de couleurs

| Rôle | Nom | HEX | RGB | Usage |
|---|---|---|---|---|
| Primaire | Teal 900 | `#082F2B` | 8,47,43 | Fonds d'en-tête, texte sur fond clair à fort contraste, dashboard |
| Primaire clair | Teal 700 | `#0B6E64` | 11,110,100 | Boutons secondaires, liens actifs, bulles utilisateur |
| Primaire hover | Teal 600 | `#0E8377` | 14,131,119 | États hover/focus des éléments teal |
| Primaire pâle | Teal 100 | `#E4F3F0` | 228,243,240 | Fonds de badges/chips discrets |
| Accent (CTA) | Coral 500 | `#FF6B4A` | 255,107,74 | Boutons d'action principale, FAB assistant, éléments à ne pas manquer |
| Accent hover | Coral 600 | `#F0532F` | 240,83,47 | États hover/pressed du corail |
| Fond | Background | `#F7F9F8` | 247,249,248 | Fond général des écrans |
| Surface | White | `#FFFFFF` | 255,255,255 | Cartes, champs, modales |
| Texte principal | Text 900 | `#101418` | 16,20,24 | Titres, texte principal |
| Texte secondaire | Text 600 | `#5B6570` | 91,101,112 | Sous-textes, métadonnées |
| Texte tertiaire | Text 400 | `#8B95A0` | 139,149,160 | Placeholders, icônes inactives |
| Bordure | Border | `#E4E8E7` | 228,232,231 | Séparateurs, contours de carte |
| Succès | Success | `#2F9E62` | 47,158,98 | Livré, paiement confirmé |
| Attention | Warning | `#F5A623` | 245,166,35 | En attente, stock faible |
| Erreur | Error | `#E23F3F` | 226,63,63 | Échec, refus, champ invalide |
| Info | Info | `#3E8EF7` | 62,142,247 | Liens, informations neutres |

**Pourquoi ce choix** : le sarcelle profond communique confiance et sérieux (proche des codes "infrastructure de paiement/commerce" plutôt que "réseau social"), tout en restant chaleureux par contraste avec le corail — qui porte toute l'énergie commerciale (CTA, prix mis en avant, nouveauté) sans jamais devenir criard puisqu'il est utilisé avec parcimonie.

---

## 3. Typographie

- **Display / titres** : *General Sans* (fallback : `Inter, ui-sans-serif, system-ui`), graisses 600–700. Rond mais affirmé — porte le ton "commercial humain" sans tomber dans le puéril.
- **Texte courant / UI** : *Inter*, graisses 400–600. Excellente lisibilité à petite taille, très bien optimisée pour le web (variable font, poids de fichier réduit — important pour le mobile-first/bas débit).
- Pas de troisième police. Un seul poids d'italique (jamais utilisé dans l'UI, réservé à des cas éditoriaux rares).

| Usage | Police | Taille | Graisse |
|---|---|---|---|
| Titre écran (H1) | General Sans | 22–24px | 700 |
| Titre section (H2) | General Sans | 16–18px | 600 |
| Corps de texte | Inter | 14–15px | 400 |
| Petit texte / méta | Inter | 12–13px | 500 |
| Boutons | Inter | 14px | 600 |
| Labels / badges | Inter | 10–11px | 700, letter-spacing léger sur les labels en capitales |

Note développeur : charger les deux polices via `next/font` (pas de `<link>` Google Fonts classique) pour bénéficier de l'auto-hébergement et éviter tout appel réseau bloquant au chargement — cohérent avec l'exigence de performance mobile.

---

## 4. Style visuel — règles structurelles

- **Rayon signature** : `18px 18px 18px 6px` (coin bas-gauche plus net) sur cartes, boutons pleins, bulles, modales. C'est LA signature visuelle du produit — à appliquer avec constance, jamais improvisée différemment d'un composant à l'autre.
- **Rayon standard** (petits éléments : chips, badges, champs) : même logique mais rayons réduits `12px 12px 12px 4px`.
- **Ombres** : deux niveaux seulement.
  - `shadow-sm` : `0 1px 2px rgba(16,20,24,0.06)` — cartes au repos.
  - `shadow-md` : `0 4px 16px rgba(8,47,43,0.10)` — éléments flottants (FAB assistant, modales, dropdown).
  - Jamais d'ombre plus lourde : le produit reste plat et rapide à rendre.
- **Espacements** : grille de base 4px. Espacements standards : 8 / 12 / 16 / 20 / 24 / 32px. Padding de carte : 12–16px. Marge entre sections : 20–24px.
- **Icônes** : trait fin (style outline, 1.5–2px stroke), jamais de style "glyphe rempli" sauf pour les statuts (succès/erreur) où le remplissage aide la reconnaissance rapide.
- **Photos produit** : format carré ou 4:5, fond neutre clair uniformisé si possible (conseil aux commerçants lors du CovaSell Setup), compression systématique côté backend (cf. Document B) — jamais d'image affichée sans redimensionnement.
- **Boutons** : pleins (fond corail ou teal) pour l'action principale d'un écran ; contour (`border`, fond transparent) pour les actions secondaires ; texte seul pour les actions tertiaires (ex. "Voir tout").

---

## 5. Design System — composants

Chaque composant ci-dessous existe en code dans `/components`. Comportement, variantes et états résumés :

### Button (`components/ui/Button.tsx`)
- Variantes : `primary` (corail plein), `secondary` (teal plein), `outline` (contour teal), `ghost` (texte seul).
- Tailles : `sm` (32px), `md` (44px, taille tactile recommandée mobile), `lg` (52px, CTA de checkout).
- États : default, hover, pressed (léger scale 0.98, pas d'animation lourde), disabled (opacité 40%), loading (spinner inline, texte conservé pour éviter un saut de layout).

### Input / Select (`components/ui/Input.tsx`)
- Fond blanc, bordure `border`, rayon standard, focus = bordure teal 700 + léger halo.
- Label au-dessus (jamais en placeholder seul — accessibilité et clarté pour utilisateurs peu technophiles).
- État erreur : bordure `error` + message sous le champ.

### Badge / StatusPill (`components/ui/Badge.tsx`, `components/ui/StatusPill.tsx`)
- Badge produit : "Nouveau", "Populaire" — fond corail, texte blanc, petit et discret (coin de carte).
- StatusPill commande : 5 statuts du Document A, chaque statut a une paire fond pâle / texte plein cohérente avec la palette (Nouvelle = corail pâle, Confirmée = info pâle, En livraison = warning pâle, Livrée = success pâle, Échec/Annulée = error pâle).

### ProductCard (`components/shop/ProductCard.tsx`)
- Image (ratio carré), badge optionnel, nom (2 lignes max, troncature), prix en gras teal-900.
- État "indisponible" : image assombrie + étiquette "Indisponible" superposée, prix conservé mais grisé.
- Responsive : 2 colonnes en mobile, jusqu'à 4 en desktop (grille CSS, pas de JS de layout).

### CategoryChip (`components/shop/CategoryChips.tsx`)
- Défilement horizontal, chip actif = fond teal-700/texte blanc, chip inactif = fond blanc/bordure/texte gris.

### Navbar boutique / BottomNav (`components/shop/ShopHeader.tsx`, `BottomNav.tsx`)
- Header : fond teal-900, logo/nom boutique, icône panier avec badge de quantité.
- Navigation basse (mobile) : 4 entrées (Boutique, Catalogue, Assistant, Panier), icône + label, item actif en teal-700.

### AssistantPanel / ChatBubble (`components/assistant/`)
- Bulle bot : fond blanc, bordure fine, alignée à gauche.
- Bulle utilisateur : fond teal-700, texte blanc, alignée à droite.
- Résultats produits : rangée de mini-cards défilante horizontalement, insérée directement dans le flux de conversation (jamais dans une modale séparée — garder l'assistant fluide).
- Cas prévus : aucun résultat (message + suggestion de reformuler ou contacter WhatsApp), question hors périmètre (message explicite + bouton WhatsApp), produit indisponible (affiché grisé avec mention), besoin humain (bouton WhatsApp mis en avant, jamais caché).

### Cart / Checkout (`components/shop` + pages dédiées)
- Panier : liste produits avec quantité modifiable (+/-), sous-total, total, CTA plein largeur "Commander".
- Checkout : formulaire en une seule colonne, étapes visibles mais sur un seul écran scrollable (pas de wizard multi-écrans pour un MVP volontairement simple) — nom, téléphone, adresse, choix du mode de paiement en cartes sélectionnables (radio visuel, pas un simple `<select>`) pour bien distinguer MTN / Moov / Celtiis Cash / paiement à la livraison.

### OrderStatus / Dashboard (`components/dashboard/`)
- KpiCard : chiffre en avant (gros, gras, teal-900 ou corail si ça demande attention), label discret au-dessus.
- OrderRow : ligne compacte (référence, méta, StatusPill), toute la ligne cliquable (zone tactile large, pas juste un petit lien).
- Sidebar (desktop back-office) / navigation basse simplifiée (mobile dashboard) — le commerçant utilisant son dashboard sur mobile en priorité, la version mobile du dashboard réutilise le même BottomNav que la boutique, avec des icônes différentes.

### Modal / Toast / EmptyState / LoadingState (`components/ui/`)
- Modal : overlay sombre semi-transparent, carte centrée, rayon signature, fermeture par croix ou clic extérieur.
- Toast : notification discrète en bas d'écran, auto-disparition après quelques secondes, une seule à la fois (pas d'empilement).
- EmptyState : icône simple + phrase courte + action suggérée (ex. panier vide → "Découvrir la boutique").
- LoadingState : squelettes (skeleton) plutôt que spinners plein écran pour les listes — perçu comme plus rapide, cohérent avec l'exigence de performance perçue.

---

## 6. Architecture UX — pages et navigation

### 6.1 Boutique client (`app/(shop)/[storeSlug]/...`)
```
/[storeSlug]                    → Accueil boutique
/[storeSlug]/catalogue          → Catalogue avec filtres
/[storeSlug]/produit/[id]       → Fiche produit
/[storeSlug]/panier             → Panier
/[storeSlug]/checkout           → Formulaire de commande
/[storeSlug]/confirmation/[id]  → Confirmation post-commande
/[storeSlug]/assistant          → Assistant commercial (plein écran mobile)
```
Navigation : barre basse fixe (Boutique / Catalogue / Assistant / Panier) sur toutes les pages boutique. Le bouton WhatsApp reste visible en permanence (en-tête ou flottant) — jamais à plus d'un geste, conformément au Document A (« ne jamais forcer l'abandon de WhatsApp »).

### 6.2 Dashboard commerçant (`app/(dashboard)/dashboard/...`)
```
/dashboard             → Vue d'ensemble (KPIs + commandes récentes)
/dashboard/produits     → Gestion catalogue
/dashboard/commandes    → Gestion commandes (liste + détail)
```
Navigation : identique en logique à la boutique (barre basse mobile), sidebar en desktop. Volontairement 3 entrées seulement au MVP (pas de menu à tiroirs) — cohérent avec l'exigence « extrêmement simple, même pour un non-technophile ».

### 6.3 Points de convergence
Le bouton assistant (FAB corail) est présent sur toutes les pages boutique — jamais uniquement accessible depuis un menu caché. C'est le composant le plus visible de l'interface après le CTA d'achat, cohérent avec son rôle central dans le positionnement produit.

---

## 7. Guide développeur — reprise du travail

- **Structure** : `/lib/tokens.ts` centralise toutes les valeurs de design (couleurs, rayons, ombres) — à ne jamais dupliquer en dur dans un composant. `tailwind.config.ts` les reprend pour générer les classes utilitaires.
- **Données** : `/lib/mock-data.ts` contient une boutique, un catalogue, des commandes fictives. Aucune connexion base de données/paiement à ce stade (volontaire, cf. Document A/B — le prototype est une base UI/UX, pas un back-end fonctionnel).
- **Composants** : tous dans `/components`, organisés par domaine (`ui/`, `shop/`, `assistant/`, `dashboard/`) — jamais de logique métier réelle dans un composant `ui/`, qui doit rester générique et réutilisable.
- **Pages** : App Router Next.js, un fichier par route. Les pages assemblent les composants et branchent les données mock — c'est là que la vraie logique (API, base de données) devra être branchée en remplacement des mocks.
- **Responsive** : mobile-first par défaut dans tout le CSS (Tailwind sans préfixe = mobile, `md:`/`lg:` pour les adaptations desktop) — ne jamais inverser cette logique en ajoutant du code "desktop d'abord".

### Points laissés volontairement ouverts (à trancher avec CovaLabs avant développement final)
Le Document A/B ne précisent pas ces éléments — le prototype fait des choix d'affichage raisonnables mais **non figés**, à valider :
- Format exact des zones/frais de livraison affichés au client avant paiement (liste de zones ? saisie libre d'adresse ? carte ?).
- Comportement précis de l'assistant en cas de query ambiguë (proposer plusieurs interprétations ? demander une précision ?) — le prototype montre une réponse simple à une requête déjà précise.
- Contenu exact du message d'erreur de paiement échoué (rejouer immédiatement ? proposer directement le paiement à la livraison ?).
- Authentification commerçant : email ou téléphone comme identifiant principal (Document B ne tranche pas) — la V2 inclut un écran de connexion par email à titre d'hypothèse, à confirmer.
- Comment le client sans compte retrouve sa commande pour le "Suivi" (lien direct envoyé par notification ? recherche par téléphone+numéro ?) — la V2 simule ce lien via la dernière commande mock, à concevoir réellement côté backend.

---

## 8. Addendum V2 — évolutions par rapport au prototype V1

Cette section documente ce qui a changé depuis la V1 (voir aussi l'analyse fournie en préambule de la livraison V2). Le reste de ce document (palette, typographie, composants de base) reste valable sans changement.

- **Séparation client/commerçant (P0.1)** : navigation client réduite à Boutique / Assistant / Panier / Suivi (le catalogue reste accessible via le hero et la recherche, pas dans la barre du bas). Navigation commerçant étendue à 4 entrées (Vue d'ensemble / Commandes / Produits / Analytics), avec un bandeau "Espace commerçant" en desktop pour signaler explicitement un espace professionnel distinct.
- **Hero boutique renforcé (P0.2/P1.5)** : le CTA assistant ("Trouver un produit") est désormais la première action visible à l'écran, avant même le catalogue. Le FAB assistant reste présent sur les autres écrans (catalogue, fiche produit) mais n'est plus dupliqué sur l'accueil pour ne pas concurrencer le CTA du hero.
- **"CovaSell vous recommande" (P1.1)** : nouveau composant `RecommendationCard`, alimenté par `mockRecommendations`. Toujours formulé comme une lecture de données (visites/commandes/stock), jamais comme une prédiction autonome — voir le commentaire dans `AssistantPanel.tsx` et le même principe appliqué ici.
- **Dashboard restructuré (P1.2)** : trois sections visuellement séparées — "Ce qui s'est passé" (KPIs), "Pourquoi" (meilleur produit + lien vers Analytics), "Ce qu'il faut faire" (recommandations). La conversion a sa propre carte mise en avant plutôt que d'être un KPI parmi d'autres (P1.4).
- **Nouveaux écrans** : Connexion commerçant, Analytics (produits performants / à améliorer), formulaire produit (ajout/modification), Suivi de commande (distinct de la confirmation).
- **États paiement (P2.4)** : nouveau composant `PaymentStatusBadge` (succès / en attente / échec), utilisé dans le suivi de commande. Les autres états vides (panier, recherche sans résultat, produit indisponible) étaient déjà couverts en V1 et inchangés.

