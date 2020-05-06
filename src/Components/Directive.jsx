import React from 'react';
import DirectiveCss from './../styles/DirectiveCss.css';
import Photo1 from './../styles/images/foto1.png';
import Photo2 from './../styles/images/foto2.png';
import Photo3 from './../styles/images/foto3.png';
import Photo4 from './../styles/images/foto4.png';
import Photo5 from './../styles/images/foto5.png';
import Photo6 from './../styles/images/foto6.png';
import Photo7 from './../styles/images/foto7.png';


class Directive extends React.Component{
	render(){
		return(
			<div id='2' className='container'>
				<div className='photos'>
					<div className='photo1'>
					<img src= {Photo1} alt='Logo' width='100' height='100'/>
					</div>
					<div className='photo2'>
					<img src= {Photo2} alt='Logo' width='100' height='100'/>
					</div>
					<div className='photo3'>
					<img src= {Photo3} alt='Logo' width='100' height='100'/>
					</div>
					<div className='photo4'>
					<img src= {Photo4} alt='Logo' width='100' height='100'/>
					</div>
					<div className='photo5'>
					<img src= {Photo5} alt='Logo' width='100' height='100'/>
					</div>
					<div className='photo6'>
					<img src= {Photo6} alt='Logo' width='100' height='100'/>
					</div>
					<div className='photo7'>
					<img src= {Photo7} alt='Logo' width='100' height='100'/>
					</div>
				</div>


			</div>

			)
	}
}

export default Directive;