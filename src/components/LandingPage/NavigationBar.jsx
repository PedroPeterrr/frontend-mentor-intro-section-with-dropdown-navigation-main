import '../../styles/navigation_bar.css';

import {
  ArrowDown
} from '../../assets/assets.js';

function NavigationBar() {
  return (
    <header className="navigation_bar">
      <div className="nav-left">
        <a href="/" className="logo-button"><strong>snap</strong></a>
        <nav className="main-nav" >
          <a href="" className="nav-item">
            Features 
            <img src={ArrowDown} alt="Arrow Down" className='Arrow-icon'/>
          </a>
          <a href="" className="nav-item">
            Company
            <img src={ArrowDown} alt="Arrow Down" className='Arrow-icon'/>
          </a>
          <a href="">Careers</a>
          <a href="">About</a>
        </nav>
      </div>
      <div className="nav-right">
        <a href="" className="login-button">Login</a>
        <a href="" className="register-button">Register</a>
      </div>
    </header>
  );
}

export default NavigationBar;
