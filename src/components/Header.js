import { link } from 'fs';
import React, {useState, useEffect} from 'react';
// import menuLinkData from './data/menu_links.json'

function Header() {
  
  const [menuLinkData,setMenuLinkData]= useState([]);

  const loadMenuLinksData= async() => {
    //query the api gateway
    const resp= await fetch('https://ut4fx9zqd2.execute-api.ap-southeast-2.amazonaws.com/Production/menu');
    let jsonData = await resp.json();
    //assign response data to our state variable
    setMenuLinkData(jsonData);
  }

  useEffect(()=>{
    // Load menu links data from api gateway
    loadMenuLinksData();
  },[]);

    return (
        <header id="intro">
        <article className="fullheight">
          <div className="hgroup">
            <h1>Landon Hotel Test</h1>
            <h2>West London</h2>
            <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow" /></a></p>
          </div>
        </article>

          <nav id="nav">
              <div className="navbar">
              <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
              <ul>
                  {
                      menuLinkData.map((link)=> 
                      <li><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>
                      )}
              </ul>
              </div>
          </nav>
      </header>
    )
}

export default Header;



