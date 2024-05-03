# Test de bout en bout avec Selenium

![Screenshot](assets/selenium.png)

## Objectifs du TP

1. Comprendre l'importance des tests de bout en bout le développement logiciel.
2. Apprendre à utiliser Selenium IDE pour l'automatisation des tests.
3. Créer et exécuter des tests sur des applications web.

## Durée estimée

3 heures

## Plan du TP

1. Introduction aux tests de bout en bout ( end to end testing )


2. Présentation de Selenium
    - Selenium IDE : qu'est-ce que c'est et comment ça fonctionne.
    - Présentation de l'interface utilisateur de Selenium IDE
    - Installation de Selenium IDE.

3. Création de tests simples
  

4. Analyse et débogage des tests

## Introduction aux tests de bout en bout

## Présentation de Selenium
1. Introduction à Selenium : qu'est-ce que c'est ?
    - xx
    - xx
    - xx

2. Selenium IDE : qu'est-ce que c'est et comment ça fonctionne.

  * Présentation de Selenium IDE

Selenium IDE est un environnement de développement intégré (IDE) pour Selenium, un ensemble d'outils d'automatisation de tests largement utilisés dans le domaine du développement logiciel. Conçu spécifiquement pour les applications web, Selenium IDE permet aux testeurs et aux développeurs de créer, de modifier et d'exécuter des tests automatisés de manière intuitive et efficace. Avec Selenium IDE, les utilisateurs peuvent enregistrer des interactions utilisateur, telles que les clics de souris, la saisie de texte et la navigation sur les pages web, et générer du code de test automatisé qui peut être exécuté pour vérifier le bon fonctionnement de l'application web sous test.

  * Fonctionnement de Selenium IDE

Selenium IDE fonctionne comme une extension de navigateur pour Google Chrome et Mozilla Firefox. Une fois installé dans le navigateur, Selenium IDE offre une interface conviviale qui permet aux utilisateurs d'enregistrer des scénarios de test en effectuant des actions directement dans le navigateur. Par exemple, un testeur peut ouvrir une page web, cliquer sur différents éléments de l'interface utilisateur, saisir du texte dans les champs de formulaire, soumettre des formulaires, etc. Pendant l'enregistrement, Selenium IDE capture ces interactions et génère automatiquement du code de test basé sur les actions de l'utilisateur. Une fois l'enregistrement terminé, les utilisateurs peuvent modifier le code de test généré pour l'adapter à leurs besoins spécifiques, en ajoutant des validations, des boucles, des conditions, etc. Enfin, les tests peuvent être exécutés à tout moment à l'aide de Selenium IDE, ce qui permet de vérifier automatiquement le bon fonctionnement de l'application web sous test.

3. Présentation de l'interface utilisateur de Selenium IDE

Selenium IDE se présente comme suit :
![Screenshot](assets/ide.png)

  1.  URL racine de l'interface web à tester
  2.  Barre d'outils de débug (point de départ, point d'arrêt, lecture pas à pas, ...)
  3.  Liste des suites de tests ouvertes
  4.  Fonctions appelées et paramètres
  5.  Bouton d'enregistrement des interractions de l'utilisateur. En appuyant dessus, toutes les actions de l'utilisateur dans l'interface web seront automatiquement enregistrées et apparaitront dans l'encadré n°4
  6.  Log(log des fonctions appelées / Référence(documentation des fonctions) / UI-Element (rarement rempli contient des informations en plus de l'onglet référence) / Combinaison
  7.  Onglet Table/Source. (actuellement visible : Table). L'onglet Source est détaillé plus bas.

Nous pouvons constater que le choix de la cible se fait de manière intelligente :
![Screenshot](assets/cmde.png)

Si nous enregistrons un texte avec le bouton d'enregistrement, alors selenium IDE nous propose tout les choix possible pour l'identification du champs : son ID, son name attribute, son Xpath, etc...

4. Installation de Selenium IDE

Pour installer Selenium IDE sur Google Chrome, ajoutez l'extension de Selenium IDE dans le navigateur web. Suivez les étapes ci-dessous :

  - Ouvrez le navigateur Google Chrome sur votre système, puis rendez-vous sur le lien. Cela vous dirigera vers le Chrome Web Store où vous devrez ajouter l'extension de Selenium IDE à votre navigateur Chrome. Cliquez sur le bouton "Ajouter à Chrome".

  ![Screenshot](assets/plugin.png)

  - Lorsque vous cliquez sur le bouton "Ajouter à Chrome", une boîte de dialogue d'avertissement apparaîtra à l'écran. Cliquez simplement sur le bouton "Ajouter l'extension" pour finalement ajouter l'extension à votre navigateur Chrome.

  - Maintenant, vous devez cliquer sur l'icône de l'extension dans le navigateur Google Chrome, située dans le coin supérieur droit. Une liste d'extensions apparaîtra à l'écran, épinglez l'extension Selenium IDE.

 ![Screenshot](assets/icone.png)

  - Maintenant, cliquez sur Selenium IDE pour commencer à travailler avec Selenium IDE. Vous pouvez désormais enregistrer un nouveau test dans un nouveau projet, ouvrir un projet existant et également créer un nouveau projet.

   ![Screenshot](assets/test.png)



## Création des testes simples
Nous allons effectuer un test simple de bout en bout avec Selenium IDE. Pour celà suivez les étapes suivantes : 

  1. Ouvrez l'extension Selenium IDE installée pour accéder à son interface par défaut. Ensuite, cliquez sur "Créer un nouveau projet".

    ![Screenshot](assets/new.PNG)

  2.  La prochaine étape consiste à attribuer un nom à votre projet. Vous pouvez donner n'importe quel nom qui reflète l'identité de votre projet.

     ![Screenshot](assets/testname.PNG)

  3. Pour commencer le processus de création d'un cas de test pour votre site web, ajoutez un nouveau cas de test en cliquant sur le symbole ‘+’ dans l'onglet "Tests" et nommez votre test.

      ![Screenshot](assets/newcase.png)

  4.  Une URL de base de lecture est nécessaire pour exécuter votre cas de test ; votre cas de test commencera à partir de l'URL que vous fournirez. Ajoutez une URL de base de lecture, par exemple https://www.[geeksforgeeks.org](https://insat.rnu.tn/)/, dans l'onglet tel qu'illustré dans l'image ci-dessous.

     ![Screenshot](assets/insattest.PNG)

  5.  Pour commencer l'enregistrement de votre cas de test, cliquez sur le bouton d'enregistrement disponible. Il capturera chaque interaction avec l'application web en temps réel.

      ![Screenshot](assets/record.png)

  6.  Visitez le site web que vous souhaitez tester et effectuez les actions spécifiques que vous souhaitez intégrer dans votre cas de test. Selenium IDE enregistrera ces actions en tant qu'étapes dans votre cas de test.

  7.  Une fois que vous avez terminé vos interactions, cliquez sur le bouton "Arrêter l'enregistrement" dans Selenium IDE.

     ![Screenshot](assets/stop.PNG)
  
  8. Cliquez sur le bouton "Exécuter le test actuel" pour exécuter votre cas de test ; il rejouera les actions que vous avez effectuées. Observez les interactions et vous pouvez identifier tout problème lors de l'exécution du test.

      ![Screenshot](assets/run.png)

  9. Vous pouvez facilement évaluer le résumé de votre cas de test en vérifiant la section "log" ci-dessous, ce qui vous aidera à identifier si des étapes ont échoué ou réussi.

    ![Screenshot](assets/runing.PNG)

  10. Cliquez sur les trois points situés sur le côté droit de votre test, puis sélectionnez "Exporter" pour exporter votre cas de test dans le langage de votre choix, afin de pouvoir l'utiliser avec d'autres outils et cadres Selenium pour diverses fins de test et d'automatisation.

     ![Screenshot](assets/export.png)
  
    Il vous proposera des options pour exporter votre cas de test dans les langages donnés. Vous pouvez choisir n'importe quel langage parmi ceux proposés pour exporter votre cas de test.


    ![Screenshot](assets/lang.png)



## Travail à rendre 
!!! Exercice
    [Aller à la page exemple](assets/hello.html)