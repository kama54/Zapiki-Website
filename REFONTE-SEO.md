# ZAPIKI — Refonte premium et SEO (brouillon)

Cette branche contient une proposition de nouvelle vitrine premium.

## Déjà intégré
- Identité officielle ZAPIKI (3 visuels authentiques importés du dépôt Android).
- Accueil premium, sections Direct / films / séries / favoris / compte / lecture.
- Présentation M3U, Xtream, EPG et ExoPlayer/VLC sans attribuer de contenus à ZAPIKI.
- Offres Free et Premium décrites comme prévues et non activées pendant les tests.
- 10 pages statiques localisées : fr, en, es, it, de, nl, pt, ar, ja, ko.
- SEO : titres, descriptions, URLs canoniques, hreflang réciproques, Open Graph, balisage SoftwareApplication.
- FAQ, liens internes, responsive smartphone et TV, RTL arabe et réduction des animations.

## Visuels promotionnels fournis et intégrés à la structure

- 7 visuels fournis par langue (accueil, Direct, catégories, films, séries, favoris, réglages), soit 70 au total.
- WebP optimisés à 820 pixels de large maximum, sans recadrage ni déformation.
- Dossier japonais `jp` converti en `ja`, coréen `kr` en `ko`.
- Galerie déroulante sur mobile, avec ouverture de chaque image en grand.
- Ces créations promotionnelles ne sont PAS présentées comme des captures brutes.

**En attente du seul fichier `assets/zapiki-visuels-webp.zip` (7,1 Mo)**.
Le ZIP doit être déposé sur la branche `design/zapiki-premium-seo-20261108`.

Le script de publication sur la branche `seo/zapiki-locales-sitemap-20261108`
du dépôt GoGoStudio-Website décompresse automatiquement les 70 images et
l'illustration cinéma. Ne pas fusionner avant dépôt des images et vérification.

## Publication
NE PAS fusionner dans main avant validation visuelle, réception des vraies captures et vérifications SEO.
Le site public doit rester sur https://gogostudio.app/zapiki/ sans changer les routes légales existantes :
- confidentialite.html
- conditions.html
- mentions-legales.html
- suppression-compte.html
- contact.html
- signalement.html
- lecteur.html

Le script d'assemblage de GoGoStudio-Website devra inclure les 10 nouvelles pages /zapiki/{lang}/index.html dans son sitemap lorsque le site sera publié.

Les tarifs et fonctions doivent être revérifiés avant mise en production.
