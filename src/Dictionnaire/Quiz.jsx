import React, { useState } from "react";
import contenu from "./quiz_contenu.json"; // utilisation de la base de données dédiée au question
import { Link } from "react-router-dom";

// Component Contenant le quiz
const Questions = () => {
  const [count, setCount] = useState(0); // Variable utilisée pour l'affichage des questions et réponses
  const [score, setScore] = useState(0); // Variable pour stocker le score accumulé dans le quiz
  let message = ""; // Variable contenant le message pour une bonne/mauvaise réponse et les explications

  // Fonction pour réinitialiser le choix de réponse à chaque question
  function reset() {
    const choix = document.getElementsByName("reponse_quiz");
    for (let i = 0; i < choix.length; i++) {
      choix[i].checked = false;
    }
  }

  // Bouton pour sauter une question
  function Suivant() {
    function handleClick() {
      setCount(count + 1);
      reset();
    }
    return <button onClick={handleClick}>Sauter la question</button>;
  }

  /* Fonction pour voir la bonne réponse à une question
  Nb : la bonne réponse s'affiche seulement si l'utilisateur a coché
  une des réponses */
  function Verifier() {
    function handleClick() {
      const choix = document.getElementsByName("reponse_quiz");
      for (let i = 0; i < choix.length; i++) {
        if (choix[i].checked) {
          if (choix[i].value === "true") {
            message = "Bonne réponse !";
            setScore(score + 1); // Incrémenter le score
          } else {
            message = "Aïe ! Mauvaise réponse ! La bonne réponse est : ";
            let rep = document.getElementsByClassName("enonce_rep");
            let bonne_rep = "";
            for (let j = 0; j < choix.length; j++) {
              if (choix[j].value === "true") {
                bonne_rep = rep[j].textContent;
                message +=
                    bonne_rep +
                    ". " +
                    contenu.questions_liste[count].explications;
                break;
              }
            }
          }
          window.alert(message);
          setCount(count + 1);
          reset();

          // Stocker le score dans le localStorage
          localStorage.setItem("quizScore", score + 1);
          break;
        }
      }
    }
    return (
        <button type="button" onClick={handleClick}>
          Vérifier la réponse
        </button>
    );
  }

  // Boucle conditionnelle pour afficher le quiz
  while (count < 10) {
    return (
        <>
          <div className="">
            <h3 className="enonce_quiz">
              {contenu.questions_liste[count].question}
            </h3>
            <form>
              <label htmlFor="rep1" className="enonce_rep">
                <input
                    id="rep1"
                    type="radio"
                    name="reponse_quiz"
                    value={contenu.questions_liste[count].reponse_1[1]}
                />
                {contenu.questions_liste[count].reponse_1[0]}
              </label>
              <label htmlFor="rep2" className="enonce_rep">
                <input
                    id="rep2"
                    type="radio"
                    name="reponse_quiz"
                    value={contenu.questions_liste[count].reponse_2[1]}
                />
                {contenu.questions_liste[count].reponse_2[0]}
              </label>

              <label htmlFor="rep3" className="enonce_rep">
                <input
                    id="rep3"
                    type="radio"
                    name="reponse_quiz"
                    value={contenu.questions_liste[count].reponse_3[1]}
                />
                {contenu.questions_liste[count].reponse_3[0]}
              </label>
              <br />
              <p>{message}</p>
              <Verifier />
              <br />
              <br />
              <Suivant />
            </form>
          </div>
        </>
    );
  }

  // Affichage du score à la fin de la boucle
  return (
      <div className="score">
        <p>
          Score : <b>{score}/10</b>
        </p>
        <Link to="/dictionnaire">
          <button>Retour au dico</button>
        </Link>
      </div>
  );
};

// Component à exporter pour la section "Quiz" du site + sources du quiz
function Quiz() {
  return (
      <>
        <h2>Quiz</h2>
        <Questions />
        <p style={{ fontSize: "small" }}> Quiz venant de :</p>
        <ul>
          <li>
            <a href="https://www.la-croix.com/Ethique/Environnement/Quiz-testez-vos-connaissances-sur-le-recyclage-2015-10-20-1370606">
              Quiz : testez vos connaissances sur le recyclage (La Croix)
            </a>
          </li>
          <li>
            <a href="https://www.recupestrie.com/jeu-questionnaire-etes-vous-pro-du-recyclage/">
              JEU-QUESTIONNAIRE : ÊTES-VOUS UN PRO DU RECYCLAGE? FAITES LE TEST!
              (recupestrie)
            </a>
          </li>
        </ul>
      </>
  );
}

export default Quiz;