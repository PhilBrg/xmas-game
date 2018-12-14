export const XmasGame = {
  "title": "Xmas quizz",
  "created_by": "Philippe B",
  "teams": [[
    "Kévin",
    "Fanti",
    "Arnold",
    "Eugénie",
    "Marie"
  ],
  [
    "Hugo",
    "Max",
    "Matthieu",
    "Manon",
    "Marylou"
  ]],
  "games": [
      {
        "name": "Le toaste",
        "__typename": "questions",
        "rules": ["5 questions par équipe", "1 point par réponse juste"],
        "buzzer": false,
        "weight": 100,
        "score": 1,
        "questions": [
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
            "image": "toy",
            "choices": [
              "Rocket Man",
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
            "name": "Lequel de ces films un peu olé-olé (et je parle pas de corrida) n'existe pas",
            "multiple": true,
            "image": "tree",
            "choices": [
              "Qui veut la bite de roger rapeau",
              "Le silence des anus",
              "Couche moi sur le sable et fais jaillir ton petrole",
              "Carry Potter et la croupe de feu"
            ],
            "answer": "Le silence des anus",
          },
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
              "Magrheb: Sait-on jamais"
            ],
            "answer": "Amérique: Christophe Colomb rpz",
          },
          {
            "name": "Que signifie à l'origine Espagne",
            "multiple": true,
            "choices": [
              "Terre des Taureaux",
              "Terre des Lapins",
              "Terre des Espagnols",
              "Terre entre la mere, le Portugal et la France"
            ],
            "answer": "Terre des Lapins",
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
              "C'est le déssert préféré de la reine Elisabeth",
              "Il est parfumé au cherry-coco",
              "Il est bourré comme tonton Gilbert"
            ],
            "answer": "On commence a le preparer plusieurs jours/semaines avant Noël",
          },
          {
            "name": "Les guêpes de mer sont?",
            "multiple": true,
            "choices": [
              "Des poissons venimeux",
              "Des méduses venimeuses",
              "Des abeilles venimeuses",
              "Des guêpes mais jetées à la mer, simplement"
            ],
            "answer": "Des méduses venimeuses",
          },
          {
            "name": "Quelle était la monnaie de la presipauté avant le passage à l'eugro",
            "multiple": true,
            "choices": [
              "Argent de chez nous (ACN)",
              "Les grozoufs",
              "Les brouzoufs grolandais",
              "Le Franzoufs"
            ],
            "answer": "Argent de chez nous (ACN)",
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
            "name": "Combien de film de  pouvez-vous me citer ?",
            "multiple": false,
            "answer:": ""
          },
          {
            "name": "Parmis les especes de crevettes existantes combien pouvez-vous m'en citer?",
            "multiple": false,
            "answer": ""
          }
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
            "multiple": true,
            "choices": [
              "Quelle est la deuxieme syllabe du mot calculatrice",
              "Vrai ou Faux, Athéna est la déesse des slips sales ?",
              "Comment s'appelle Jean Claude Van Damme",
              "Vrai ou Faux, Claire Chazal fait pousser du cannabis derrière les locaux de TF1",
              "Qu'est ce qui est meilleur à manger: La barbapapa ou la Moustache à Maman",
              "Dites moi le mot Kayak à l'envers",
              "Dites moi le mot Epoustouflant à l'envers, si vous n'y arrivez pas dites moi kayak",

            ],
            "answer": " au chocolat",
            
          }
        ]
      }
    ]
}

