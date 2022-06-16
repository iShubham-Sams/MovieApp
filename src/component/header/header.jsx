import React, { useState } from 'react';
import './header.css'
import { Link } from 'react-router-dom';

const Header=()=>{
    const [mobile,setmobile]=useState(false);
    return (
        <>
          <header>
            <div className="container flexSB">
                <nav className="flexSB">
                
                    <div className="logo">
                        <img src="./images/logo.png" alt="this is logo of movies app" />
                    </div>
                    <ul className={mobile?"navMenu-list":"flexSB"}>
                       <li> <Link to='/'>Home</Link></li>
                       <li>   <Link to='/Series'>Series</Link></li>
                       <li>   <Link to='/movies'>Movies</Link></li>
                        <li>   <Link to='/pages'>Pages</Link></li>
                        <li>  <Link to='/pricing'>Pricing</Link></li>
                        <li>   <Link to='/contact'>Contact</Link></li>
                    </ul>

                    <button className='toggle' onClick={()=>setmobile(!mobile)}>
                      {mobile?<i className='fas fa-times'></i>:<i className='fas fa-bars'></i>}
                    </button>
                    </nav>
                    <div className="account flexSB">
                        <i className='fas fa-search'></i>
                        <i className="fas fa-bell"></i>
                        <i className="fa fa-user"></i>
                        <button>Subscribe Now</button>
                    </div>
                </div>
            
          </header>  
            
        </>
    )
}

export default Header