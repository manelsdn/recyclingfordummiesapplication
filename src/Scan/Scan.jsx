import React, { useState } from "react";
import * as tf from "@tensorflow/tfjs"; // Importation de TensorFlow.js
import * as mobilenet from "@tensorflow-models/mobilenet"; // Importation du modèle MobileNet

function MobileNetComponent() {
  // State pour l'URL de l'image, les prédictions et l'état de chargement
  const [imageUrl, setImageUrl] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fonction pour charger le modèle MobileNet
  async function loadModel() {
    setLoading(true);
    const model = await mobilenet.load(); // Chargement du modèle MobileNet
    setLoading(false);
    return model;
  }

  // Fonction pour classifier une image avec le modèle chargé
  async function classifyImage(model, imageElement) {
    if (model) {
      setLoading(true);
      const predictions = await model.classify(imageElement); // Classification de l'image
      setLoading(false);
      setPredictions(predictions); // Mise à jour des prédictions
    }
  }

  // Fonction pour gérer le téléchargement d'une image
  async function handleImageUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      setImageUrl(e.target.result); // Mise à jour de l'URL de l'image
      const imageElement = document.createElement("img");
      imageElement.src = e.target.result;
      const model = await loadModel(); // Chargement du modèle
      await classifyImage(model, imageElement); // Classification de l'image
    };

    reader.readAsDataURL(file);
  }

  return (
      <div className="container">
        {/* Titre de la section */}
        <h2>Détection d'objets </h2>
        {/* Champ d'entrée pour télécharger une image */}
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {/* Affichage de l'état de chargement */}
        {loading && <p>téléchargement du modèle et détection d'objets...</p>}
        {/* Affichage de l'image téléchargée et des prédictions */}
        {imageUrl && (
            <div>
              <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "300px" }} />
              {/* Titre des prédictions */}
              <h2>Prédictions:</h2>
              {/* Liste des prédictions */}
              <ul>
                {predictions.map((prediction, index) => (
                    <li key={index}>
                      {/* Affichage de la classe de l'objet et de sa probabilité */}
                      {prediction.className} - Probability:{" "}
                      {Math.round(prediction.probability * 100)}%
                    </li>
                ))}
              </ul>
            </div>
        )}
      </div>
  );
}

export default MobileNetComponent;
