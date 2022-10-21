import {Link} from 'react-router-dom';
import image from '../creditgauge.png';
import './Landingpage.css';

const LandingPage = ()=> {
    return (
        <div>
            
            
           
            <img src= {image} alt="credit gauges"/>
            <div>
            <div className='red'>300-629 <br/> <span> Bad</span></div>

<div  className='yellow'>630-689 <br/> <span>Fair</span> </div>
<div  className='lightgreen'>690-719 <br/> <span>Good</span></div>
<div  className='darkgreen'>720-850 <br/><span>Excellent</span></div>

            </div>

           
            <div className='button-holder'>
            <div className='button-one'>
              <button className='bttn'>
              <Link to = '/eligibility' className='btn'>
                    Loan Eligibility
                </Link>
              </button>
         </div>

            <div className='button-one'>
              <button className='bttn'>
              <Link to = '/account' className='btn'>
                    Account
                </Link>
              </button>
               
            </div>
           
            <div className='button-one'>
            <button className='bttn'> 
            <Link to = '/education' className='btn'>
                    Financial Education
                </Link>
            </button>
               
            </div>
            </div>
           

        </div>
    );

};
export default LandingPage;