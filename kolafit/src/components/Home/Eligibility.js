import {Link} from 'react-router-dom'
import image2 from '../Secondgauge.png'
import './Eligibility.css';


const Eligibility = ()=> {
    return (
        <div>
            <div className='left'>
            <img className='eligibility-gauge' src={image2} alt="Credit score"/>
            <div className='box'> 
            <h1> Credit score: 754</h1>

            </div> 
            </div>
            <button className='back-button'><Link to = '/home' className='btn-eligibility'>
                    Back
                </Link></button>
                <div className='right'>
                    <h2 className='congrats'>Congratulations!  <br/>You have an excellent credit score</h2>
                   <h2>KolaFit improves your <br/>creditworthiness, the higher the <br/>credit score the better</h2>
                </div>
         

        </div>
    );

};
export default Eligibility;