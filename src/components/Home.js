import React from "react";
import "../styles/Home.css";

const Home = () => {
return (   	
	<div id="home">	
		<div className="home-container">
			
			<div style={{ marginTop: 25}} className="home-title">				
				Disfruta de <p style={{color:'#225E7C', marginLeft:'0.7rem'}}> RentState</p>
			</div>

			<div className="home-avatar"  >
				<img src="assets/RentStateBanner.png" alt="Avatar" />
			</div>							 
			
			<div className="home-desc">
				Transforma tu experiencia al encontrar tu próximo hogar en Lima, PE
            	<img style={{marginRight: 12}} src="/assets/peru.png" alt="Peru" className="peru-image"/>
				Descubre una amplia gama de opciones de alquiler de inmuebles. ¡Solo en RentState!
          	</div>
			
		</div>
	</div>
);
};

export default Home;