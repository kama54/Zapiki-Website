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
- Offre Free : 15 min/jour UTC **prévue** mais non encore imposée pendant les essais ;
- Offre Premium : abonnement annuel Google Play, prix cible 9,99 € en Europe, prix local et conditions contractuelles affichés par Google Play ;
- Trois écrans simultanés maximum par compte ;
- Aucun contenu ni abonnement IPTV n'est fourni ;
- Compte Google, favoris synchronisés, historique récent et suppression des données du compte sont décrits ;
- Les achats Google Play ne sont pas encore ouverts tant que la validation serveur n'est pas entièrement opérationnelle.

## Avant la commercialisation — vérifications obligatoires
- **Compléter les mentions légales de l'éditeur** : identité juridique exacte, adresse de contact professionnelle et éventuel SIRET/immatriculation lorsque requis ; ne pas inventer ces informations.
- Valider la conformité du prix, renouvellement, rétractation/remboursements selon les marchés ;
- Vérifier le texte des politiques de confidentialité et la déclaration Google Play « Sécurité des données » contre le code réel ;
- Valider le fonctionnement de la suppression de compte et des liens OAuth sur le domaine GitHub Pages ;
- Relire les neuf traductions avec un locuteur natif avant lancement mondial ;
- Tester l'affichage sur téléphone, tablette et navigateur TV, notamment en arabe (RTL).
- Les mentions légales et politiques sont des projets éditoriaux, **pas un avis juridique**.

## Publication
GitHub Pages : `Settings > Pages > Deploy from a branch > main / (root)`.
Le dépôt Android `kama54/Zapiki-android` reste privé ; seul le site vitrine est public.
Aucun secret ou compte de service ne doit figurer dans le dépôt du site.
