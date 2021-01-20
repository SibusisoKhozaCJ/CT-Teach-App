import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Sidebar = () => {   
    const [ menuClass, thoggleClass] = useState(false)
    
    return (
        <div>
            
  <header className="l-header">
    <div className="l-header__inner clearfix"> 
      <div className="c-header-icon js-hamburger">
        <div className="hamburger-toggle" onClick={(evt) => {thoggleClass(!menuClass); !menuClass ? document.body.classList.add('sidebar-is-expanded') : document.body.classList.remove('sidebar-is-expanded') }}><span className="bar-top"></span><span className="bar-mid"></span><span className="bar-bot"></span></div>
      </div>
    </div>
  </header>
  <div className="l-sidebar"> 
    <div className="l-sidebar__content">
      <nav className="c-menu js-menu">
        <ul className="u-list">
          <li className="c-menu__item is-active" data-toggle="tooltip" title="Flights">
            <div className="c-menu__item__inner">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="35" fill="#43D4DD"/>
            <path d="M40.1143 31.1436H52.4531V40.0645H40.1143V54.0098H30.7148V40.0645H18.3418V31.1436H30.7148V17.7793H40.1143V31.1436Z" fill="#FBDD3F"/>
            </svg>

              <div className="c-menu-item__title"><span>Flights</span></div>
            </div>
          </li>
          <li className="c-menu__item has-submenu" data-toggle="tooltip" title="Modules">
            <div className="c-menu__item__inner">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="35" fill="#43D4DD"/>
            <path d="M40.1143 31.1436H52.4531V40.0645H40.1143V54.0098H30.7148V40.0645H18.3418V31.1436H30.7148V17.7793H40.1143V31.1436Z" fill="#FBDD3F"/>
            </svg>
                
              <div className="c-menu-item__title"><span>Modules</span></div>
              <div className="c-menu-item__expand js-expand-submenu">
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="35" fill="#43D4DD"/>
            <path d="M40.1143 31.1436H52.4531V40.0645H40.1143V54.0098H30.7148V40.0645H18.3418V31.1436H30.7148V17.7793H40.1143V31.1436Z" fill="#FBDD3F"/>
            </svg>
              </div>
            </div>
            <ul className="c-menu__submenu u-list">
              <li>Payments</li>
              <li>Maps</li>
              <li>Notifications</li>
            </ul>
          </li>
          <li className="c-menu__item has-submenu" data-toggle="tooltip" title="Statistics">
            <div className="c-menu__item__inner">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="35" fill="#43D4DD"/>
            <path d="M40.1143 31.1436H52.4531V40.0645H40.1143V54.0098H30.7148V40.0645H18.3418V31.1436H30.7148V17.7793H40.1143V31.1436Z" fill="#FBDD3F"/>
            </svg>
              <div className="c-menu-item__title"><span>Statistics</span></div>
            </div>
          </li>
          <li className="c-menu__item has-submenu" data-toggle="tooltip" title="Gifts">
            <div className="c-menu__item__inner">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="35" fill="#43D4DD"/>
            <path d="M40.1143 31.1436H52.4531V40.0645H40.1143V54.0098H30.7148V40.0645H18.3418V31.1436H30.7148V17.7793H40.1143V31.1436Z" fill="#FBDD3F"/>
            </svg>
              <div className="c-menu-item__title"><span>Gifts</span></div>
            </div>
          </li>
          <li className="c-menu__item has-submenu" data-toggle="tooltip" title="Settings">
            <div className="c-menu__item__inner">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="35" fill="#43D4DD"/>
            <path d="M40.1143 31.1436H52.4531V40.0645H40.1143V54.0098H30.7148V40.0645H18.3418V31.1436H30.7148V17.7793H40.1143V31.1436Z" fill="#FBDD3F"/>
            </svg>
              <div className="c-menu-item__title"><span>Settings</span></div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>

         
        </div>
    );
};

export default Sidebar;