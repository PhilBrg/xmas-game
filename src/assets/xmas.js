export const XmasGame = {
  "title": "Xmas quizz",
  "created_by": "Philippe B",
  "games": [
      {
        "name": "Questions",
        "__typename": "questions",
        "rules": ["5 questions par équipe", "1 point par réponse juste"],
        "buzzer": false,
        "weight": 100,
        "score": 1,
        "questions": [
          {
            "name": "Citez moi un autre terme pour définir Noël",
            "multiple": false,
            "answer": "Nativité"
          },
          {
            "name": "Qui est l'auteur original de cette chanson?",
            "multiple": false,
            "answer": "Tino Rossi"
          },
          {
            "name": "Quel film batman se déroule pendant la période de Noel",
            "multiple": true,
            "choices": [
              "Batman et robin",
              "Batman forever",
              "Batman le défi",
              "Batman et les lutins"
            ],
            "answer": "Batman le défi",
          },
          {
            "name": "Dans la course au jouet quel jouet doit recuperer arnold scharzeneger",
            "multiple": true,
            "choices": [
              "Musul Man",
              "Rapido Man",
              "Turbo Man",
              "Method Man"
            ],
            "answer": "Turbo Man",
          },
          {
            "name": "Dans Harry Potter à l'école des sorciers, citez moi 2 cadeaux que Harry reçoit pour son premier Noël",
            "multiple": false,
            "answer": "Cape d'invisibilité, bonbons, livre, pull de Mme Weasley"
          },
          {
            "name": "Qui est l'inventeur du champagne que l'on boit si souvent à Noël",
            "multiple": true,
            "choices": [
              "La veuve Cliquot",
              "Dom perignon",
              "Le comte Champomy",
              "La duchesse de six-roses"
            ],
            "answer": "Dom perignon",
          },
          {
            "name": "Laquelle de ces images ne provient pas d'un film pour enfant",
            "multiple": true,
            "choices": [
              "[TODO]",
              "[TODO]",
              "[TODO]",
              "[TODO]"
            ],
            "answer": "[TODO]",
          },
          {
            "name": "De quel pays provient cette oeuvre representant un arbre de Noël",
            "multiple": true,
            "img_url": "[TODO]",
            "choices": [
              "Angleterre",
              "Tunisie",
              "Danemark",
              "Republique Démocratique du Congo"
            ],
            "answer": "Angleterre",
          },
          {
            "name": "Lorsqu'un couple a du mal a avoir un enfant, on peut leur proposer la fécondation",
            "multiple": true,
            "choices": [
              "In sinus",
              "In anus",
              "In vitro",
              "In extremis"
            ],
            "answer": "In vitro",
          },
          {
            "name": "Comment dit-on bonjour en japonais",
            "multiple": true,
            "choices": [
              "Imatoumi",
              "Konichiwa",
              "Arigato",
              "Bismilah"
            ],
            "answer": "Konichiwa",
          },
        ]
      },
      {
        "name": "Sel ou poivre",
        "__typename": "salt_or_pepper",
        "rules": [
          "1 point / bonne réponse, toute mauvaise réponse = point à l'équipe adverse",
          "Pamela Anderson ou Fiat Multipla (ou les deux)",
        ],
        "buzzer": true,
        "weight": 50,
        "score": 1,
        "questions": [
          {
            "name": "Elle est blonde",
            "multiple": false,
            "answer": "Pamela Anderson",
          },
          {
            "name": "Elle est côté à l'argus",
            "multiple": false,
            "answer": "Fiat Multipla",
          },
          {
            "name": "Elle côute cher",
            "multiple": false,
            "answer": "Pamela Anderson",
          },
          {
            "name": "ça peut arriver de devoir changer quelques pièces",
            "multiple": false,
            "answer": "Les deux",
          },
          {
            "name": "C'est rarement une première main",
            "multiple": false,
            "answer": "Les deux",
          },
          {
            "name": "Un ami peut te la faire essayer",
            "multiple": false,
            "answer": "Les deux (si tu es ami avec Adil Rami)",
          },
          {
            "name": "Elle a des kilomètres au compteur",
            "multiple": false,
            "answer": "Les deux",
          },
          {
            "name": "Elle est plus belle en rouge",
            "multiple": false,
            "answer": "Toutes les réponses sont acceptés, ragez pas",
          },
          {
            "name": "On peut rentrer à 6 dedans",
            "multiple": false,
            "answer": "Fiat Multipla",
          },
          {
            "name": "Les airbags sont de série",
            "multiple": false,
            "answer": "Fiat Multipla",
          }
        ]
      },
      {
        "name": "Enchères",
        "__typename": "bet",
        "score": 1,
        "weight": 90,
        "rules": [
          "Faites une enchere, l'équipe adverse aura le choix de vous laisser la main et ainsi realiser votre enchere ou bien d'enchérir à son tour.",
          "1 point / bonne réponse, point à l'équipe adverse en cas d'echec",
        ],
        "buzzer": false,
        "questions": [
          {
            "name": "Combien de film de Tim Burton pouvez-vous me citer ?",
            "multiple": false,
            "answer:": ""
          },
          {
            "name": "Combien de musique de Noël pouvez-vous me citer ?",
            "multiple": false,
            "answer": ""
          }
        ]
      },
      {
        "name": "L'addition",
        "__typename": "bill",
        "rules": [
          "2 points / bonne réponse, points à l'équipe adverse en cas de mauvaise réponse",
        ],
        "weight": 10,
        "score": 1,
        "buzzer": true,
        "questions": [
          {
            "name": "La dinde est souvent de sortie pendant les fêtes de Noël, mais on peut également y trouver du chapon, qu'est-ce donc ?",
            "multiple": true,
            "choices": [
              "Une race de dindon",
              "Un coquelet breton",
              "Un coq castré",
              "Une poule cisgenre"
            ],
            "answer": "Un coq castré",
          },
          {
            "name": "De quel région du monde la dinde est-elle originaire?",
            "multiple": true,
            "choices": [
              "Inde: Les colons anglais l'importent en angleterre, puis en europe",
              "Amérique: Christophe Colomb rpz",
              "Europe: Ils sont la depuis le début",
              "DES ARABES"
            ],
            "answer": "Amérique: Christophe Colomb rpz",
          },
          {
            "name": "Avant les boules de Noël, avec quoi décorait-on le sapin ?",
            "multiple": true,
            "choices": [
              "Biscuits",
              "Fruits",
              "Boules de Geisha",
              "Chocolats"
            ],
            "answer": "Fruits",
          },
          {
            "name": "Avec quelle sauce la dinde est-elle servie au Mexique ?",
            "multiple": true,
            "choices": [
              "Sauce BBQ",
              "Sauce Madère",
              "Sauce au chocolat",
              "Sauce O'tacos 3 viandes/fromagère avec samourai chef"
            ],
            "answer": "Sauce au chocolat",
          },
          {
            "name": "En angleterre on echappe pas au chrismas pudding, quel est sa particularité?",
            "multiple": true,
            "choices": [
              "On commence a le preparer plusieurs jours/semaines avant Noël",
              "C'est le déssert préféré de la reine",
              "Il est parfumé au cherry",
              "Il est bourré"
            ],
            "answer": "On commence a le preparer plusieurs jours/semaines avant Noël",
          },
        ]
      },
      {
        "name": "La dinde de la mort",
        "__typename": "turkey_of_the_dead",
        "rules": [
          "10 questions",
          "ne pas répondre avant la fin des 10 questions",
          "Une souflette autorisé en cas de trou",
        ],
        "buzzer": false,
        "weight": 0,
        "score": 1,
        "questions": [
          {
            "name": "toto",
            "multiple": false,
            "answer": " au chocolat",
          }
        ]
      }
    ]
}
