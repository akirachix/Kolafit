import {Link} from 'react-router-dom'

const LandingPage = ()=> {
    return (
        <div>
            <div>
              
                <Link to = '/eligibility' className='btn'>
                    Loan Eligibility
                </Link>
        </div>
            <div>
              
                <Link to = '/account' className='btn'>
                    Account
                </Link>
            </div>
            <div>
                <Link to = '/education' className='btn'>
                    Financial Education
                </Link>
            </div>

        </div>
    );

};
export default LandingPage;