import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import explicationsData from "./explicationsData";
import poubelleImage from "./recycler.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import CardCr from "../Carte/Cardcr";
import CardEr from "../Carte/Carder";
import Card1 from "../Carte/Cardr1";
import Card2 from "../Carte/Cardr2";
import Card3 from "../Carte/Cardr3";
import Cards from "../Carte/Cards";
import AppAsset from "../Carte/App";
import "../Carte/index.css";

const Dico = ({ setExplication }) => {
    // State pour gérer les catégories de mots
    const [categories, setCategories] = useState({});
    // State pour gérer le terme de recherche
    const [searchTerm, setSearchTerm] = useState("");
    // State pour suivre l'index de la carte actuelle
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    // State pour contrôler l'animation de retournement de carte
    const [isFlipping, setIsFlipping] = useState(false);
    // State pour suivre si la souris est sur une carte
    const [isHovering, setIsHovering] = useState(false);

    // Utilisation du hook de navigation de react-router-dom
    const navigate = useNavigate();

    // Fonction pour gérer le changement de catégorie
    const handleCategoryChange = (category) => {
        setCategories({
            ...categories,
            [category]: !categories[category],
        });
    };

    // Fonction pour gérer le changement de terme de recherche
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Fonction pour effectuer la recherche et naviguer vers la page d'explications
    const handleSearch = () => {
        // Sélection des mots selon les catégories sélectionnées
        const motsSelectionnesParCategories = Object.keys(categories)
            .filter(category => categories[category])
            .flatMap(category => explicationsData.filter(data => data.categorie === category).map(data => data.mot));
        // Filtrage des mots selon le terme de recherche
        const motsRecherche = explicationsData
            .filter(data => data.mot.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(data => data.mot);
        // Fusion des mots sélectionnés et des mots de recherche
        const motsTotal = [...new Set([...motsSelectionnesParCategories, ...motsRecherche])];
        // Mise à jour de l'état d'explication et navigation vers la page d'explications
        setExplication(motsTotal);
        navigate("/explications");
    };

    // Nombre total de cartes
    const totalCards = 7;

    // Fonction pour gérer le clic sur une carte
    const handleClickCard = (direction) => {
        if (!isFlipping) {
            setIsFlipping(true);
            setTimeout(() => {
                if (direction === "next" && currentCardIndex < totalCards - 1) {
                    setCurrentCardIndex((prevIndex) => prevIndex + 1);
                } else if (direction === "prev" && currentCardIndex > 0) {
                    setCurrentCardIndex((prevIndex) => prevIndex - 1);
                }
                setIsFlipping(false);
            }, 500);
        }
    };

    return (
        <div className="container">
            <h2>Dictionnaire du recyclage</h2>
            <div className="flex-container">
                <div className="image-container">
                    <img src={poubelleImage} alt="Poubelle" style={{maxWidth: "200px", maxHeight: "200px"}}/>
                </div>
                <div className="categories">
                    {/* Champ de recherche */}
                    <input
                        type="text"
                        placeholder="Rechercher un mot..."
                        style={{width: "calc(190% - 200px)"}}
                        onChange={handleInputChange}
                    />
                    <br/><br/>
                    {/* Cases à cocher pour les catégories */}
                    <div className="checkboxes">
                        {Object.keys(categories).map((category, index) => (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    id={category}
                                    onChange={() => handleCategoryChange(category)}
                                    checked={categories[category]}
                                    aria-label={category}
                                />
                                <label htmlFor={category}>{category}</label>
                            </div>
                        ))}
                    </div>
                    {/* Bouton de recherche */}
                    <button className="button-size" onClick={handleSearch}>Je recycle</button>
                    <br/>
                    <br/>
                    {/* Bouton pour accéder au quizz */}
                    <Link to="/Quiz">
                        <button className="button-size">Quizz</button>
                    </Link>
                    {/* Boutons de navigation des cartes */}
                    <div className="card-buttons">
                        <button className="arrow-button" onClick={() => handleClickCard("prev")}><IoIosArrowBack/>
                        </button>
                        <button className="arrow-button" onClick={() => handleClickCard("next")}><IoIosArrowForward/>
                        </button>
                    </div>
                </div>
            </div>

            {/* Affichage des cartes */}
            <div className={`card-display ${isFlipping ? "flipping" : ""}`}>
                {/* Carte 1 */}
                <div
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={() => handleClickCard("next")}
                    style={{backgroundColor: isHovering && currentCardIndex === 0 ? "#afe4b2" : ""}}
                >
                    {currentCardIndex === 0 && <CardCr/>}
                </div>
                {/* Carte 2 */}
                <div
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={() => handleClickCard("next")}
                    style={{backgroundColor: isHovering && currentCardIndex === 1 ? "#afe4b2" : ""}}
                >
                    {currentCardIndex === 1 && <CardEr/>}
                </div>
                {/* Carte 3 */}
                <div
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={() => handleClickCard("next")}
                    style={{backgroundColor: isHovering && currentCardIndex === 2 ? "#afe4b2" : ""}}
                >
                    {currentCardIndex === 2 && <Card1/>}
                </div>
                {/* Carte 4 */}
                <div
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={() => handleClickCard("next")}
                    style={{backgroundColor: isHovering && currentCardIndex === 3 ? "#afe4b2" : ""}}
                >
                    {currentCardIndex === 3 && <Card2/>}
                </div>
                {/* Carte 5 */}
                <div
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={() => handleClickCard("next")}
                    style={{backgroundColor: isHovering && currentCardIndex === 4 ? "#afe4b2" : ""}}
                >
                    {currentCardIndex === 4 && <Card3/>}
                </div>
                {/* Carte 6 */}
                <div
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={() => handleClickCard("next")}
                    style={{backgroundColor: isHovering && currentCardIndex === 5 ? "#afe4b2" : ""}}
                >
                    {currentCardIndex === 5 && <Cards/>}
                </div>
                {/* Carte 7 */}
                <div
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={() => handleClickCard("next")}
                    style={{backgroundColor: isHovering && currentCardIndex === 6 ? "#afe4b2" : ""}}
                >
                    {currentCardIndex === 6 && <AppAsset/>}
                </div>
            </div>
        </div>
    );
};

export default Dico;
