import {Link} from 'react-router-dom';
// import myImage from '../Home.png'
const Landingpage = () => {
    return (
        <div className='full-div'>
            <div className='landing-page-image'>
            {/* <img className='img' src={myImage} alt="home" style={{width: "550px", height: "250px", marginTop:"20px", marginRight:"600px",  }} /> */}
            </div>
<div className='text'>
<div className='first-heading'>
<h2>About KolaFit</h2>
<h3>KolaFit improves the creditworthiness by aggregating a customer’s data after calculating their loan eligibility <br/>
and makes the unified data available to financial  instutitons via an API.</h3>
</div>
<div className='second-section'>
    <h2>Why Kolafit</h2>
    <h3>A key limitation on the eligibility of many assets as collateral is information asymmetry. Owing to the inability of <br/>
many lenders to ascertain the true ownership of assets, and reluctant to accept many assets that could serve as <br/>
collateral. Thus this informational constraint renders many types of assets ineligible as collateral and limits access to credit.</h3>
</div>
</div>
<div>
        <Link className='sign-text' path to={"/signup"}>
            <button className='home-button'>Signup</button>
    </Link>
</div>
        </div>
    );
}
export default Landingpage;