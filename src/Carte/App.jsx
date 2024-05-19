import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cards from './Cards.jsx';
import Cardcr from './Cardcr.jsx';
import Carder from './Carder.jsx';
import Cardr1 from './Cardr1.jsx';
import Cardr2 from './Cardr2.jsx';
import Cardr3 from './Cardr3.jsx';
/* Pour la partie carousel j'ai utilisé le model sur https://www.npmjs.com/package/react-multi-carousel*/
function CartePage() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
      <div className="carte-container">
        <Carousel responsive={responsive}>
          <Cards />
          <Cardcr />
          <Carder />
          <Cardr1 />
          <Cardr2 />
          <Cardr3 />
        </Carousel>
      </div>
  );
}

export default CartePage;
