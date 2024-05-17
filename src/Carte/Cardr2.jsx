import r2Image from './assets/r2.jpg'

function Carousel(){
    return(
      <div className="card4">
            <img src={r2Image} alt="Recyclage Secondaire"></img>
            <h5>Recyclage Secondaire</h5>
            <p>Le recyclage secondaire est le recyclage chimique des déchets en un produit qui a une utilisation différente
               Le recyclage secondaire est parfois appelé « recyclage en boucle ouverte »,
               car le produit ne peut pas être recyclé indéfiniment et finit par quitter la boucle d'utilisation.
               La réutilisation, l'upcycling et le downcycling peuvent être considérés comme des formes de recyclage secondaire.

            </p>
        </div>  
    )

}

export default Carousel
