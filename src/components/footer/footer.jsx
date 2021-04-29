import React, {useEffect, useState} from "react";
import Icon1 from "../../assets/icons/footer-icon/icon1.svg";
import Icon3 from "../../assets/icons/footer-icon/icon3.svg";
import Icon2 from "../../assets/icons/footer-icon/icon2.svg";
import Icon4 from "../../assets/icons/footer-icon/arrw.svg";
import Icon5 from "../../assets/icons/footer-icon/gallery.svg";
import ProjectsIcon from "../../assets/images/rocket-icon.png";
import {useHistory, useLocation} from "react-router-dom";
import routes from "../../routes";
import {subscribe} from 'on-screen-keyboard-detector';
import {ProjectsSvg} from "../../shared/svgs/menu-items";

const Footer = () => {
    const history = useHistory();
    const location = useLocation();
    const [isLayoutRender, setIsLayoutRender] = useState(false);
    var splitPath = window.location.pathname.split('/')
    var path = splitPath[splitPath.length - 1];
    const [keyboardExist, setKeyboardExist] = useState(true);

    const shouldLayoutRender = (pathname) => {
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

        const initialHeight = window.innerHeight
        window.addEventListener('resize', function (e) {
            if (window.innerHeight != initialHeight && path === 'home') {
                setKeyboardExist(keyboardExist => false)
            } else {
                setKeyboardExist(keyboardExist => true)
            }
        })

        setIsLayoutRender(shouldLayoutRender(location.pathname));
    }, [location]);

    return (
        (isLayoutRender && keyboardExist && <footer className='footer-mobile'>
            <div className="footer-icon select-footer">
                <img onClick={(evt) => history.push("/tribe")} src={Icon3} className="coverage" alt=""/>
            </div>

            <div className="footer-icon">
                <img onClick={(evt) => history.push("/codepanel/C001/P001/T001")} src={ProjectsIcon} alt=""/>
            </div>
            <div className="footer-icon">
                <img onClick={(evt) => history.push("/tribe")} src={Icon5} className="coverage" alt=""/>
            </div>
            <div className="footer-icon centr-Ficon">
                <div className="mt-ft-icon">
                    <img onClick={(evt) => history.push("/codepanel/5-min-website")} src={Icon4} className="coverage"
                         alt=""/>
                </div>
            </div>

            <div className="footer-icon">
                <img onClick={(evt) => history.push("/tribe")} src={Icon2} className="coverage" alt=""/>
            </div>


        </footer>)
    );
};

export default Footer;
