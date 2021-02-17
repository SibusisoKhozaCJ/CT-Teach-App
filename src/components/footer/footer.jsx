import React, { useEffect, useState } from "react";
import Icon1 from "../../assets/icons/footer-icon/icon1.svg";
import Icon3 from "../../assets/icons/footer-icon/icon3.svg";
import Icon2 from "../../assets/icons/footer-icon/icon2.svg";
import Icon4 from "../../assets/icons/footer-icon/arrw.svg";
import Icon5 from "../../assets/icons/footer-icon/gallery.svg";
import { useHistory, useLocation } from "react-router-dom";
import routes from "../../routes";

const Footer = () => {
  const history = useHistory();
  const location = useLocation();
  const [isLayoutRender,setIsLayoutRender] = useState(false);
  const shouldLayoutRender = (pathname)=>{
    if (
        pathname === routes.LOGIN ||
        pathname === routes.NEW_ACCOUNT ||
        pathname.includes('/join') ||
        pathname.includes('/codepanel')
      )
      return false;
    return true;  
  }

  useEffect(() => {
    setIsLayoutRender(shouldLayoutRender(location.pathname));
  }, [location]);
  return (
    (isLayoutRender && <footer className='footer-mobile'>
      <div className="footer-icon">
        <img onClick={(evt)=>history.push("/tribe")} src={Icon1} className="coverage" alt="" />
      </div>

      <div className="footer-icon">
        <img onClick={(evt)=>history.push("/tribe")} src={Icon3} className="coverage" alt="" />
      </div>

      <div className="footer-icon centr-Ficon">
        <div className="mt-ft-icon">
        <img onClick={(evt)=>history.push("/tribe")} src={Icon4} className="coverage" alt="" />
        </div>
      </div>

      <div className="footer-icon">
        <img onClick={(evt)=>history.push("/tribe")} src={Icon2} className="coverage" alt="" />
      </div>

      <div className="footer-icon">
        <img onClick={(evt)=>history.push("/tribe")} src={Icon5} className="coverage" alt="" />
      </div>
    </footer>)
  );
};

export default Footer;
