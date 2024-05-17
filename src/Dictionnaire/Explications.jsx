import React from "react";
import explicationsData from "./explicationsData"; // Import du fichier de données d'explications

const Explications = ({ explications }) => {
    // Fonction pour filtrer les mots sélectionnés et récupérer leurs explications depuis le fichier JSON
    const explicationsFiltrees = explications.map((mot) => ({
        mot, // Stockage du mot
        // Récupération de l'explication correspondante dans les données, s'il existe
        recyclage: explicationsData.find((data) => data.mot === mot)?.recyclage,
        // La syntaxe "?." est utilisée pour éviter une erreur si l'explication n'est pas trouvée
    }));

    return (
        <div className="container">
            <div>
                {/* Titre de la section d'explications */}
                <h2 className="explications-title">Explications</h2>
                {/* Vérification s'il y a des explications filtrées */}
                {explicationsFiltrees.length === 0 ? (
                    <p>Aucune explication trouvée😢</p> // Message si aucune explication n'est trouvée
                ) : (
                    // Section pour afficher les cartes d'explications si des explications sont disponibles
                    <div className="explications-cards">
                        {/* Boucle sur les explications filtrées pour les afficher */}
                        {explicationsFiltrees.map((explication, index) => (
                            <div key={index} className="explication-card">
                                {/* Affichage du mot */}
                                <h3 className="explication-mot">{explication.mot}</h3>
                                {/* Affichage de l'explication */}
                                <p className="explication-recyclage">{explication.recyclage}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Explications;
