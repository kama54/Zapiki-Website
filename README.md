# ZAPIKI — site officiel

Site public statique du lecteur indépendant ZAPIKI.
https://kama54.github.io/Zapiki-Website/

## Langues
Les dix langues de l'application sont disponibles : **fr, en, es, it, de, nl, pt, ar, ja, ko**.
Le sélecteur de langue est visible sur toutes les pages.
La langue est conservée localement et peut être imposée via `?lang=xx`, notamment depuis l'application Android.
La version française reste lisible sans JavaScript ; les autres langues sont chargées depuis `locales/*.js`.

## Pages / chemins stables
- Accueil : `index.html`
- Lecteur indépendant : `lecteur.html`
- Politique de confidentialité : `confidentialite.html`
- Conditions d'utilisation et abonnement Free/Premium : `conditions.html`
- Mentions légales : `mentions-legales.html`
- Contact : `contact.html`
- Signalement de droits : `signalement.html`
- Suppression du compte : `suppression-compte.html` (formulaire Supabase maintenu actif dans toutes les langues)

## Cohérence Free / Premium — état actuel
- Offre Free : 15 minutes de lecture par jour et par compte ;
- Offre Premium : abonnement annuel Google Play, tarif annoncé de 9,99 €/an en France, prix local et conditions contractuelles confirmés dans Google Play avant achat ;
- Trois écrans simultanés maximum par compte ;
- Aucun contenu ni abonnement IPTV n'est fourni ;
- Compte Google, favoris synchronisés, historique récent et suppression des données du compte sont décrits ;
- L'application ZAPIKI est officiellement publiée sur Google Play (confirmé le 23 novembre 2026). Les achats Premium sont gérés via Google Play ;

## Contrôles permanents après la publication
- Conserver l'identité de l'éditeur et ses coordonnées exactes et à jour sur les pages légales ;
- Valider la conformité du prix, renouvellement, rétractation/remboursements selon les marchés ;
- Vérifier le texte des politiques de confidentialité et la déclaration Google Play « Sécurité des données » contre le code réel ;
- Valider le fonctionnement de la suppression de compte et des liens OAuth sur le domaine GitHub Pages ;
- Faire relire les neuf traductions par des locuteurs natifs ;
- Tester l'affichage sur téléphone, tablette et navigateur TV, notamment en arabe (RTL).
- Les mentions légales et politiques sont des projets éditoriaux, **pas un avis juridique**.

## Publication
GitHub Pages : `Settings > Pages > Deploy from a branch > main / (root)`.
Le dépôt Android `kama54/Zapiki-android` reste distinct du dépôt du site vitrine.
Aucun secret ou compte de service ne doit figurer dans le dépôt du site.

## Mise en ligne publique Google Play — 23 novembre 2026

La publication est confirmée. Les onze pages d'accueil (racine et dix langues) mettent Google Play en avant, annoncent une disponibilité publique et utilisent `https://schema.org/InStock` dans les données structurées. Les anciens messages de lancement prévu et d'accès testeurs ont été retirés. `/download/` privilégie désormais Google Play pour les appareils compatibles, tout en conservant les APK Universal, ARM32 et ARM64 pour les installations sans Play Store. Les informations commerciales et légales traduites ont été harmonisées. Le domaine public est construit depuis `kama54/GoGoStudio-Website` : déclencher son workflow de publication après cette modification.
