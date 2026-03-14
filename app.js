const wordLevels = {
  easy: [
    "chat",
    "chien",
    "pain",
    "lait",
    "eau",
    "sel",
    "sucre",
    "table",
    "chaise",
    "porte",
    "mur",
    "sol",
    "main",
    "pied",
    "tete",
    "nez",
    "yeux",
    "bras",
    "jambe",
    "dos",
    "ami",
    "amie",
    "pere",
    "mere",
    "frere",
    "soeur",
    "oncle",
    "tante",
    "jour",
    "nuit",
    "matin",
    "soir",
    "hier",
    "demain",
    "ici",
    "la",
    "oui",
    "non",
    "bien",
    "mal",
    "vite",
    "lent",
    "haut",
    "bas",
    "gros",
    "petit",
    "beau",
    "laid",
    "vrai",
    "faux",
    "bon",
    "mauvais",
    "chaud",
    "froid",
    "plein",
    "vide",
    "dur",
    "mou",
    "clair",
    "sombre",
    "neuf",
    "vieux",
    "je",
    "tu",
    "il",
    "elle",
    "nous",
    "vous",
    "eux",
    "elles",
    "mon",
    "ton",
    "son",
    "notre",
    "votre",
    "leur",
    "ce",
    "cet",
    "cette",
    "ces",
    "un",
    "une",
    "des",
    "le",
    "la",
    "les",
    "du",
    "au",
    "aux",
    "sur",
    "sous",
    "dans",
    "avec",
    "sans",
    "vers",
    "pour",
    "contre",
    "chez",
    "entre",
    "avant",
    "apres",
    "pendant",
    "toujours",
    "souvent",
    "parfois",
    "jamais",
    "encore",
    "deja",
    "trop",
    "peu",
    "beaucoup",
    "tout",
    "rien",
    "quelque",
    "ainsi",
    "alors",
    "donc",
    "mais",
    "ou",
    "et",
    "car",
    "si",
    "quand",
    "comme",
    "pourquoi",
    "comment",
    "combien",
    "oublie",
    "trouve",
    "pense",
    "aime",
    "marche",
    "court",
    "saute",
    "parle",
    "crie",
    "rit",
    "pleure",
    "mange",
    "boit",
    "dort",
    "lit",
    "ecrit",
    "ouvre",
    "ferme",
    "tourne",
    "regarde",
    "ecoute",
    "attend",
    "prend",
    "pose",
    "donne",
    "garde",
    "cherche",
    "montre",
    "pousse",
    "tire",
    "porte",
    "tombe",
    "leve",
    "baisse",
    "monte",
    "descend",
    "arrive",
    "part",
    "reste",
    "vient",
    "voit",
    "sent",
    "touche",
    "essaie",
    "joue",
    "gagne",
    "perd",
    "change",
    "ajoute",
    "retire",
    "coupe",
    "colle",
    "range",
    "lave",
    "seche",
    "plie",
    "ouvre",
    "ferme",
  ],
  medium: [
    "maison",
    "voiture",
    "ordinateur",
    "clavier",
    "ecran",
    "telephone",
    "fenetre",
    "cuisine",
    "salon",
    "chambre",
    "bureau",
    "travail",
    "ecole",
    "college",
    "universite",
    "professeur",
    "eleve",
    "etudiant",
    "exercice",
    "question",
    "reponse",
    "solution",
    "probleme",
    "histoire",
    "geographie",
    "science",
    "nature",
    "animal",
    "plante",
    "montagne",
    "riviere",
    "ocean",
    "foret",
    "prairie",
    "desert",
    "nuage",
    "pluie",
    "orage",
    "vent",
    "soleil",
    "etoile",
    "planete",
    "galaxie",
    "univers",
    "energie",
    "force",
    "vitesse",
    "distance",
    "volume",
    "surface",
    "temperature",
    "pression",
    "matiere",
    "atome",
    "molecule",
    "reaction",
    "experience",
    "analyse",
    "mesure",
    "calcul",
    "nombre",
    "valeur",
    "resultat",
    "fonction",
    "variable",
    "tableau",
    "liste",
    "donnee",
    "fichier",
    "dossier",
    "reseau",
    "internet",
    "serveur",
    "logiciel",
    "programme",
    "developpeur",
    "application",
    "navigation",
    "connexion",
    "securite",
    "identifiant",
    "motdepasse",
    "interface",
    "utilisateur",
    "parametre",
    "configuration",
    "installation",
    "miseajour",
    "version",
    "prototype",
    "conception",
    "architecture",
    "structure",
    "organisation",
    "strategie",
    "gestion",
    "projet",
    "planning",
    "objectif",
    "priorite",
    "qualite",
    "performance",
    "amelioration",
    "optimisation",
    "creation",
    "invention",
    "decouverte",
    "innovation",
    "imagination",
    "inspiration",
    "motivation",
    "concentration",
    "attention",
    "memoire",
    "reflexion",
    "decision",
    "evaluation",
    "comparaison",
    "observation",
    "description",
    "explication",
    "interpretation",
    "communication",
    "discussion",
    "conversation",
    "argument",
    "opinion",
    "information",
    "connaissance",
    "apprentissage",
    "formation",
    "education",
    "enseignement",
    "lecture",
    "ecriture",
    "redaction",
    "traduction",
    "prononciation",
    "grammaire",
    "orthographe",
    "vocabulaire",
    "expression",
    "langage",
    "discours",
    "presentation",
    "conference",
    "reunion",
    "collaboration",
    "partenariat",
    "negociation",
    "transaction",
    "commerce",
    "entreprise",
    "industrie",
    "production",
    "distribution",
    "livraison",
    "transport",
    "logistique",
    "itineraire",
    "destination",
    "voyage",
    "tourisme",
    "aventure",
    "exploration",
    "experience",
    "souvenir",
    "emotion",
    "sensation",
    "impression",
    "reaction",
    "adaptation",
    "transformation",
    "evolution",
    "progression",
    "developpement",
    "croissance",
  ],
  hard: [
    "administration",
    "organisationnel",
    "responsabilite",
    "professionnel",
    "developpement",
    "implementation",
    "international",
    "communication",
    "interpretation",
    "collaboration",
    "coordination",
    "experimentale",
    "documentation",
    "classification",
    "transformation",
    "optimisation",
    "configuration",
    "synchronisation",
    "visualisation",
    "representation",
    "identification",
    "authentification",
    "autorisation",
    "infrastructure",
    "architecture",
    "algorithmique",
    "programmation",
    "compilation",
    "interoperabilite",
    "compatibilite",
    "virtualisation",
    "containerisation",
    "automatisation",
    "orchestration",
    "distribution",
    "sauvegarde",
    "restauration",
    "supervision",
    "monitoring",
    "performance",
    "scalabilite",
    "resilience",
    "tolerance",
    "redondance",
    "migration",
    "integration",
    "deploiement",
    "production",
    "validation",
    "verification",
    "evaluation",
    "amelioration",
    "innovation",
    "technologique",
    "scientifique",
    "experimentateur",
    "interpretatif",
    "comparatif",
    "demonstration",
    "illustration",
    "argumentation",
    "problematique",
    "hypothese",
    "methodologie",
    "statistique",
    "probabilite",
    "modelisation",
    "simulation",
    "analyseur",
    "predictif",
    "correlation",
    "causalite",
    "observationnel",
    "phenomenologie",
    "neuroscience",
    "biologie",
    "genetique",
    "physiologie",
    "biochimie",
    "metabolisme",
    "photosynthese",
    "biodiversite",
    "ecosysteme",
    "environnemental",
    "climatique",
    "geologique",
    "tectonique",
    "sismologie",
    "astronomie",
    "astrophysique",
    "cosmologie",
    "gravitation",
    "relativite",
    "quantification",
    "electromagnetisme",
    "thermodynamique",
    "cristallisation",
    "polymerisation",
    "nanotechnologie",
    "cybersecurite",
    "cryptographie",
    "authentificateur",
    "certification",
    "normalisation",
    "standardisation",
    "industrialisation",
    "commercialisation",
    "internationalisation",
    "regionalisation",
    "urbanisation",
    "modernisation",
    "numerisation",
    "digitalisation",
    "interconnexion",
    "interdependance",
    "globalisation",
    "diversification",
    "specialisation",
    "professionnalisation",
    "responsabilisation",
    "conscientisation",
    "sensibilisation",
    "contextualisation",
    "conceptualisation",
    "operationalisation",
    "institutionnalisation",
    "legislation",
    "reglementation",
    "administratif",
    "bureaucratique",
    "juridictionnel",
    "constitutionnel",
    "parlementaire",
    "gouvernemental",
    "diplomatique",
    "geopolitique",
    "democratique",
    "participatif",
    "consultatif",
    "deliberation",
    "negociation",
    "arbitrage",
    "conciliation",
    "mediation",
    "resolution",
    "interpretation",
    "argumentatif",
    "persuasion",
    "rhetorique",
    "philosophique",
    "epistemologie",
    "metaphysique",
    "ontologie",
    "ethique",
    "dialectique",
    "hermeneutique",
    "existentialisme",
    "structuralisme",
    "postmodernisme",
    "interdisciplinarite",
    "transdisciplinarite",
    "multidimensionnel",
  ],
};

const dialog = document.querySelector("dialog");
const dialogStart = document.querySelector("#dialog-start");
const btnEasy = document.querySelector("#Easy");
const btnMedium = document.querySelector("#Medium");
const btnHard = document.querySelector("#Hard");
const placeholder = document.querySelector("#placeholder");
const btnStart = document.querySelector("#start");
const timeDisplay = document.querySelector("#time");
const accuracy = document.querySelector("#accuracy");
const restartSection = document.querySelector("#restart");
const spanRemove = document.querySelector("#span-remove");

const oldTextarea = document.querySelector("#textarea");
if (oldTextarea) oldTextarea.remove();
const input = document.createElement("input");
input.type = "text";
input.id = "textarea";
input.autocomplete = "off";
input.setAttribute("autocorrect", "off");
input.setAttribute("autocapitalize", "off");
input.setAttribute("spellcheck", "false");
input.style.cssText =
  "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;border:none;outline:none;padding:0;margin:0;pointer-events:none;";
document.body.appendChild(input);

const cursorStyle = document.createElement("style");
cursorStyle.textContent = `.active-letter{position:relative}.active-letter::before{content:"";position:absolute;left:-1px;top:0;width:2px;height:100%;background:white;animation:blink 1s step-end infinite}@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`;
document.head.appendChild(cursorStyle);

const DURATION = 60;
let wordList = [],
  wordIndex = 0,
  level = null,
  timer = null,
  started = false,
  restartBtn = null;

timeDisplay.textContent = DURATION;

function buildWords(arr) {
  placeholder.querySelectorAll(".word").forEach((w) => w.remove());
  wordList = [];
  wordIndex = 0;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 80; i++) {
    const word = arr[Math.floor(Math.random() * arr.length)];
    wordList.push(word);
    const span = document.createElement("span");
    span.className = "word";
    for (const char of word) {
      const letter = document.createElement("span");
      letter.className = "letter";
      letter.textContent = char;
      span.appendChild(letter);
    }
    span.appendChild(document.createTextNode(" "));
    frag.appendChild(span);
  }
  placeholder.appendChild(frag);
  markCurrentWord();
  moveCursor();
}

function markCurrentWord() {
  placeholder
    .querySelectorAll(".word")
    .forEach((w, i) => w.classList.toggle("active-word", i === wordIndex));
}

function moveCursor() {
  placeholder
    .querySelectorAll(".active-letter")
    .forEach((l) => l.classList.remove("active-letter"));
  const currentWord = placeholder.querySelectorAll(".word")[wordIndex];
  if (!currentWord) return;
  const letters = currentWord.querySelectorAll(".letter");
  const pos = Math.min(input.value.length, letters.length - 1);
  if (letters[pos]) letters[pos].classList.add("active-letter");
}

function setActiveDiffBtn(activeBtn) {
  [btnEasy, btnMedium, btnHard].forEach((b) => {
    b.style.color = "#FFFFFF";
    b.style.border = "1px solid #717178";
  });
  activeBtn.style.color = "#4ca6ff";
  activeBtn.style.border = "1px solid #4ca6ff";
}

function pickLevel(arr, btn) {
  level = arr;
  setActiveDiffBtn(btn);
  if (!started) buildWords(arr);
}

btnEasy.addEventListener("click", () => pickLevel(wordLevels.easy, btnEasy));
btnMedium.addEventListener("click", () =>
  pickLevel(wordLevels.medium, btnMedium),
);
btnHard.addEventListener("click", () => pickLevel(wordLevels.hard, btnHard));

function launch() {
  if (started) return;
  if (!level) pickLevel(wordLevels.easy, btnEasy);
  if (spanRemove) spanRemove.remove();
  if (dialogStart) dialogStart.close();
  if (dialog) dialog.close();
  timeDisplay.style.color = "#f4dc73";
  if (accuracy) accuracy.style.color = "#d64d5b";
  if (!restartBtn) {
    restartBtn = document.createElement("button");
    restartBtn.classList.add("button-gray", "restart2");
    restartBtn.textContent = "Restart Test";
    restartBtn.addEventListener("click", reset);
    restartSection.appendChild(restartBtn);
  }
  const typing = document.querySelector("#typing");
  if (typing) typing.style.borderBottom = "1px solid #3a3a3a";
  started = true;
  input.focus();
  startTimer();
}

btnStart.addEventListener("click", launch);
placeholder.addEventListener("click", () => {
  if (!started) launch();
  input.focus();
});
document.addEventListener("click", () => {
  if (started) input.focus();
});

function startTimer() {
  timeDisplay.textContent = DURATION;
  clearInterval(timer);
  timer = setInterval(() => {
    const t = parseInt(timeDisplay.textContent) - 1;
    timeDisplay.textContent = t;
    if (t <= 0) {
      clearInterval(timer);
      window.location.href = "result3.html";
    }
  }, 1000);
}

function reset() {
  clearInterval(timer);
  started = false;
  input.value = "";
  buildWords(level || wordLevels.easy);
  started = true;
  input.focus();
  startTimer();
}

input.addEventListener("input", () => {
  if (!started) return;
  const currentWord = placeholder.querySelectorAll(".word")[wordIndex];
  if (!currentWord) return;
  const letters = currentWord.querySelectorAll(".letter");
  const typed = input.value;
  const word = wordList[wordIndex];
  for (let i = 0; i < word.length; i++) {
    if (i >= typed.length) letters[i].style.color = "";
    else if (typed[i] === word[i]) letters[i].style.color = "#4dd67b";
    else letters[i].style.color = "#d64d5b";
  }
  moveCursor();
});

input.addEventListener("keydown", (e) => {
  if (!started) return;
  if (e.key === " ") {
    e.preventDefault();
    input.value = "";
    wordIndex++;
    markCurrentWord();
    moveCursor();
  }
});
