import React from "react";
import Icon1 from "../../assets/icons/footer-icon/icon1.svg";
import Icon3 from "../../assets/icons/footer-icon/icon3.svg";
import Icon2 from "../../assets/icons/footer-icon/icon2.svg";
import Icon4 from "../../assets/icons/footer-icon/chat.svg";
import Icon5 from "../../assets/icons/footer-icon/gallery.svg";

const Footer=()=>{
    return(
        <footer>
        <div className="footer-icon">
                  <img src={Icon1} className="coverage" alt=""/>
                </div>
             
                <div className="footer-icon">
                  <img src={Icon3} className="coverage" alt=""/>
                </div>
             
                <div className="footer-icon">
                  <img src={Icon4} className="coverage" alt=""/>
                </div>
             
                <div className="footer-icon">
                  <img src={Icon2} className="coverage" alt=""/>
                </div>
             
                <div className="footer-icon">
                  <img src={Icon5} className="coverage" alt=""/>
                </div>
              
    </footer>
    )
}

export default Footer