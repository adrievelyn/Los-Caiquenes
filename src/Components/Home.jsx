import React from 'react';
import HomeCss from './../styles/HomeCss.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from './../styles/images/logoCaiquenes.png';
import comunity from './../styles/images/comunity.png';
import comunity1 from './../styles/images/caiquenes1.png';
import comunity2 from './../styles/images/caiquenes2.png';
import comunity3 from './../styles/images/caiquenes3.png';
import comunity4 from './../styles/images/sintomas.png';
import comunity5 from './../styles/images/prevencion.png';


class Home extends React.Component {

	render(){
		return(
			
		<main>
			<div id='1' className='container'>
			<div className='events'>
				<div className='logo'>
					<img src= {Logo} alt='Logo' width='100' height='100' />
				</div>
				<div className='home'>
					<a href="#1" onclick="Home" id='p01'>
  					Home
					</a>
				</div>
				<div className='home'>
					<a href="#2" onclick="Directiva" id='p02'>
  					Directiva
					</a>
				</div>
				<div className='home'>
					<a href="#3" onclick="Informativos" id='p03'>
  					Informativos
					</a>
				</div>
				<div className='home'>
					<a href="#4" onclick="Actividades" id='p04'>
  					Actividades
					</a>
				</div>
				<div className='home'>
					<a href="#5" onclick="Patrimonio" id='p05'>
  					Patrimonio
					</a>
				</div>
				<div className='gastos'>
					<a href="#6" onclick="Gastos Comunes" id='p06'>
  					Gastos Comunes
					</a>
				</div>
			</div>

				<div className='allComunity'>
					
					<div className='comunitySlider'>
						<ul>
							<li><img src= {comunity} alt='imageComunity' width='400' height='190' /></li>
							<li><img src= {comunity1} alt='imageComunity' width='400' height='190' /></li>
							<li><img src= {comunity2} alt='imageComunity' width='400' height='190' /></li>
							<li><img src= {comunity3} alt='imageComunity' width='400' height='190' /></li>
						</ul>
					</div>
					<div className='comunity3'>
						<h4>Vivir aquí y ahora. Estar presente parece obvio, 
							y aunque debería serlo, en realidad es la excepción. 
							¿Por qué? Porque la verdadera presencia es más que 
							estar físicamente en un lugar: es estar conectados
							con nuestra esencia, que es hermosa e imperturbable.
							Y en buena comunicación con nuestros vecinos, por eso 
							todos preferimos vivir en Condominio Los Caiquenes,
							un lugar especialmente mágico. <p className='welcome'>Bienvenidos a nuestra
							página web.</p>
						</h4>
					</div>
				</div>
				<div className='allComunity3'>
				<div className='gastos2'>
						<p><u>Ingresa a:</u></p>
							<a href="http://www.comunidadfeliz.cl" target="_blank" className='enlace'>www.comunidadfeliz.cl</a>
						 <p> Para obtener el status del gasto común, solicitando tu clave al correo:</p> 
						 <h6> comite@gmail.com</h6>
					</div>

					<div className='gastos4'>
						<p><u>Enlaces de interés:</u></p>
							<p><a href="https://www.minsal.cl/" target="_blank" className='enlace'>www.minsal.cl</a></p>
							<p><a href="http://www.humanas.cl/" target="_blank" className='enlace'>www.humanas.cl</a></p>
							<p><a href="https://tipsparatuviaje.com/" target="_blank" className='enlace'>www.tipsparatuviaje.cl</a></p>
							<p><a href="https://www.vitonica.com/" target="_blank" className='enlace'>www.vitonica.cl</a></p>
						
					</div>

					<div className='gastos3'>
						<p><b>TELÉFONOS IMPORTANTES</b></p>
					</div>
				</div>

				<div className='covid'>
				<div className='covid1'>
						<ul>
							<li><img src= {comunity4} alt='imageComunity' width='400' height='300' /></li>
						</ul>
				</div>
				<div className='covid2'>
						<ul>
							<li><img src= {comunity5} alt='imageComunity' width='400' height='300' /></li>
						</ul>
					</div>
				</div>

					<div className='footer'>
						<b>Copyright - Condominio Los Caiquenes - Altos de Izarra</b>
					</div>
				</div>
	
			</main>
	
			


		)
	}
};  
				






export default Home;



						//<a href='https://www.comunidadfeliz.cl/'></a>
/*
				<div>
					<button onClick='Home'>
 					 	Home
					</button>
				</div>
				<div>
					<button onClick='Home'>
					 	Directiva
					</button>
				</div>
				<div>
					<button onClick='Home'>
						Informativos
					</button>
				</div>
				<div>
					<button onClick='Home'>
					 	Actividades
					</button>
				</div>
				<div>
					<button onClick='Home'>
					 	Patrimonio
					</button>
				</div>
				<div>
					<button onClick='Home'>
					 	Gastos Comunes					
					</button>
				</div>

			</div>*/