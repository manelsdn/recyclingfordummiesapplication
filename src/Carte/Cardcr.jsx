import crImage from './assets/cr.jpg'

function Carousel(){
    return(
       <div className="card1">
<img src={crImage} alt="Recyclage Chimique"></img>
<h5>Recyclage Chimique</h5>
<p>Le Recyclage chimique consiste à décomposer chimiquement ou thermochimiquement les matériaux en leurs matières premières,
   c’est-à-dire que la structure chimique du matériau est modifiée pour revenir au niveau moléculaire
   Une fois décomposées, ces matières premières peuvent être reconverties en nouveaux matériaux
   Il existe différents procédés et technologies qui peuvent être utilisés pour le recyclage chimique, 
   la dépolymérisation et la pyrolyse étant deux d'entre eux.

</p>
</div>
        
    )

}

export default Carousel

