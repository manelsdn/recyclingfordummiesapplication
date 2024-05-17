import mrImage from './assets/mr.jpg'
import crImage from './assets/cr.jpg'
import erImage from './assets/er.jpg'
import r1Image from './assets/r1.jpg'
import r2Image from './assets/r2.jpg'
import r3Image from './assets/r3.jpg'
function Carousel(){
    return(
        <>
        <div className="card">
            <img src={mrImage} alt="Recyclage Méchanique"></img>
            <h5>Recyclage Méchanique</h5>
            <p>Le recyclage mécanique est le processus de récupération des déchets plastiques
               par des procédés mécaniques tels que le tri,
               le lavage, le séchage, le broyage,
               la regranulation et le compoundage.
               Le recyclage mécanique ne modifie pas la structure chimique du matériau, 
               ce qui permet de multiples réutilisations/recyclages de matériaux polymères,
               créant ainsi une boucle fermée.
            </p>
        </div>



        </>
        
    )

}

export default Carousel