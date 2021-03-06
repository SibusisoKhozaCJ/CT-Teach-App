import React, {useEffect, useState} from "react";

import Icon1 from "../../assets/icons/footer-icon/icon1.svg";
import Icon3 from "../../assets/icons/footer-icon/icon3.svg";
import Icon2 from "../../assets/icons/footer-icon/icon2.svg";
import Icon4 from "../../assets/icons/footer-icon/arrw.svg";
import Icon5 from "../../assets/icons/footer-icon/gallery.svg";
import DotsIcon from "../../assets/svg/DotsIcon";
import { useHistory, useLocation } from "react-router-dom";
import routes from "../../routes";
import { subscribe } from 'on-screen-keyboard-detector';
import ProjectIcon from "../../assets/svg/ProjectIcon"
import ArrowIcon from "../../assets/svg/ArrowIcon"
import ProgressCheck from "../../assets/svg/ProgressCheck"
import GalleryIcon from "../../assets/svg/GalleryIcon"
import ProjectsIcon from "../../assets/images/rocket-icon.png";
import {ProjectsSvg} from "../../shared/svgs/menu-items";
import LockIcon from "../../assets/svg/LockIcon"
import MinLockIcon from "../../assets/images/lock-icon.png";
import { makeStyles } from "@material-ui/styles";

const  useStyles = makeStyles(theme => ({
    lockIcon: {
        position: "absolute",
        top: 6,
        width: "16px !important",
      }
}))
const Footer = () => {
    const history = useHistory();
    const location = useLocation();
    const classes = useStyles();
    const [isLayoutRender, setIsLayoutRender] = useState(false);
    const [isActive, setIsActive] = useState(false)
    const [isProgressActive, setIsProgressActive] = useState(false)
    const [isGalleryActive, setIsGalleryActive] = useState(false)
    const [isProjectActive, setIsProjectActive] = useState(false)

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
    const resizeListener = window.innerHeight

    useEffect(() => {

        setIsLayoutRender(shouldLayoutRender(location.pathname));

            if (typeof window !== "undefined") {
                window.addEventListener('resize', function () {
                    if (window.innerHeight != resizeListener && path === 'home') {
                        setKeyboardExist(keyboardExist => false)
                    } else {
                        setKeyboardExist(keyboardExist => true)
                    }
                });
                return () => {
                    window.removeEventListener('resize', function () {
                        setKeyboardExist(keyboardExist => true)
                    });
                }
            } else {
                setKeyboardExist(keyboardExist => true)
            }
    }, [location]);
    const onHandleClick = (value, index) => {
      if(value){
           history.push(value)
           setIsActive(true)
           if(index === 1){
            setIsActive(true)
            setIsProjectActive(false)
            setIsGalleryActive(false)
            setIsProgressActive(false)
          }
          if(index === 2){
             setIsProjectActive(true)
             setIsGalleryActive(false)
            setIsProgressActive(false)
            setIsActive(false)
          }
          if(index === 3){
             setIsGalleryActive(true)
             setIsProgressActive(false)
             setIsActive(false)
             setIsProjectActive(false)
          }
          if(index === 5){
            setIsProgressActive(true)
            setIsActive(false)
            setIsProjectActive(false)
            setIsGalleryActive(false)
          }
      }    
    }
    const activeDotClass = () => {
        if (isActive) {
            return 'active'
        }
        else {
            return 'coverage'
        }
    }
    const activeProjectClass = () => {
        if (isProjectActive) {
            return 'active'
        }
        else {
            return 'coverage'
        }
    }
    const activeGalleryClass = () => {
        if (isGalleryActive) {
            return 'active galleryIcon'
        }
        else {
            return 'coverage galleryIcon'
        }
    }
    const activeProgressClass = () => {
        if (isProgressActive) {
            return 'active'
        }
        else {
            return 'coverage'
        }
    }
    return (

       ( isLayoutRender && keyboardExist && <footer className='footer-mobile'>
            {/* <div className="footer-icon">
                <img onClick={(evt)=>history.push("/tribe")} src={Icon1} className="coverage" alt="" />
            </div> */}
            <div className="footer-icon">
                <div className={activeDotClass()} onClick={(evt) => onHandleClick("/tribe", 1)}>
                    <DotsIcon />
                </div>
            </div>
            <div className="footer-icon">
                {/* <img onClick={(evt)=>history.push("/codepanel/C001/P001/T001")} src={ProjectIcon} className="coverage" alt="" /> */}
                <div className={activeProjectClass()} onClick={(evt) => onHandleClick("/codepanel/C001/P001/T001", 2)}>
                    <ProjectIcon />
                </div>
            </div>
            <div className="footer-icon">
                {/* <img onClick={(evt)=>history.push("/tribe")} src={Icon5} className="coverage" alt="" /> */}
                <div className={activeGalleryClass()} onClick={(evt) => onHandleClick("/home", 3)}>
                    <GalleryIcon />
                    <img src={MinLockIcon} className={`coverage ${classes.lockIcon}`} alt="" />
                </div>
            </div>
            <div className="footer-icon centr-Ficon">
                {/* <div className="mt-ft-icon">
                    <img onClick={(evt)=>history.push("/tribe")} src={Icon4} className="coverage" alt="" /> 
                </div> */}
                <div className="mt-ft-icon" onClick={(evt) => onHandleClick("/codepanel/C001/P001/T001", 4)}>
                    <ArrowIcon />
                </div>

            </div>

            <div className="footer-icon">
                {/* <img onClick={(evt)=>history.push("/tribe")} src={Icon2} className="coverage" alt="" /> */}
                <div className={activeProgressClass()} onClick={(evt) => onHandleClick("/progress", 5)}>
                    <ProgressCheck />
                </div>
            </div>


        </footer>)
    );
};

export default Footer;
