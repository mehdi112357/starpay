/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React, {useState} from "react";
import * as Variable from '../../Constants/Variables';
import {jsx, css, keyframes} from '@emotion/react';
import LinkMenu from "../../component/links/LinkMenu";
import NavIcon from "../../component/buttons/NavIcon";
import NavRequestBtn from "../../component/buttons/NavRequestBtn";
import HamburgerMenu from "../../component/buttons/HamburgerMenu";
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import FormInput from "../../component/inputs/FormInput";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const logoAnimation = keyframes`
  0% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
`
const iconAnimation = keyframes`
  0% {
    transform: translateX(-200px) rotate(-360deg);
  }
  100% {
    transform: translateX(0) rotate(0);
  }
`
const hamburger = keyframes`
  0% {
    transform: translateX(110%);
  }
  100% {
    transform: translateX(0%);
  }
`
const navClass = (display) => css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 10px;
  background-color: ${Variable.navBg};
  border-bottom: ${Variable.border};
  border-top: ${Variable.border};
  z-index: 3000;
  position: ${display ? "sticky" : "block"};
  top: 0;
  width: 100%;
  overflow: hidden;
  @media (max-width: 768px) {
    position: fixed;
    padding: 0 12%;
    overflow: visible;

  }
`
const bgHamburgerBtn = (open) => css`
  display: none;
  @media (max-width: 768px) {
    display: ${open ? "block" : "none"};
    position: fixed;
    background: transparent;
    width: 100%;
    height: 100%;
    z-index: 3000;
    top: 0;
    left: 0;
  }
`
const menuBtnClass = (open) => css`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  transition: all 1s ease-in-out;
  @media (max-width: 768px) {
    background-color: #fdfbf9;
    display: ${open ? "flex" : "none"};
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 4.9rem;
    width: 50%;
    animation: ${hamburger} 1s;
    height: 100vh;
  }

  > * {
    padding: 0 10px;
    white-space: nowrap;
    @media (max-width: 1000px) {
      font-size: .9rem;
    }
    @media (max-width: 768px) {
      border-bottom: 1px solid #FFF1E2FF ;
      width: 100%;
    }
  }

  > img {
    height: 60px;
    width: 80px;
    animation: ${logoAnimation} 1s ease-out;
    @media (max-width: 768px) {
      display: none;
    }
  }

  > :nth-child, > :nth-child(4) {
    display: none;
    @media (max-width: 768px) {
      display: flex;
    }
  }
`
const actionBtnClass = css`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    width: 40%;
    justify-content: flex-end;

  }

  > * {
    &:hover {
      cursor: pointer;
    }
  }

  > div {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 992px) {
      display: none;
    }
  }

  > :nth-child(2) {
    > * {
      transform: translateX(-200px);
      animation: ${iconAnimation} 1s ease-out;
      animation-fill-mode: forwards;
    }

    > :nth-child(1) {
    }

    > :nth-child(2) {
      animation-delay: .25s;
    }

    > :nth-child(3) {
      animation-delay: .5s;
    }
  }
`
const searchContainer = css`
  z-index: 6000;

  input {
    margin: 5rem auto 0 auto;
    width: 50%;
    z-index: 1000;
  }

`
const searchTitle = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  background-color: ${Variable.bgNews};
`
const searchGif = css`
  width: 250px;
  margin: 0 auto;
`
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Header() {

    const [display, setDisplay] = useState(false)
    if (typeof window !== "undefined") {
        function myFunction() {
            if (window.pageYOffset >= 50) {
                setDisplay(true);
            } else {
                setDisplay(false);
            }
        }
        window.onscroll = function () {
            myFunction()
        };    }
    // useEffect(()=>{
    //     function myFunction() {
    //         if (window.pageYOffset >= 50) {
    //             setDisplay(true);
    //         } else {
    //             setDisplay(false);
    //         }
    //     }
    //     window.onscroll = function () {
    //         myFunction()
    //     };
    // },[])
    const [open, setOpen] = useState(false)
    const hamburgerBtn = () => {
        setOpen(!open)
    }
    const [openSearch, setOpenSearch] = React.useState(false);
    const handleClickOpen = () => {
        setOpenSearch(true);
    };
    const handleClose = () => {
        setOpenSearch(false);
    };

    return (
        <React.Fragment>
            <Dialog
                fullScreen
                open={openSearch}
                onClose={handleClose}
                TransitionComponent={Transition}
                css={searchContainer}
            >
                <AppBar css={searchTitle} sx={{position: 'relative'}}>
                    <Toolbar css={searchTitle}>
                        <div> جستجو</div>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <FormInput type={"text"} placeholder={"جستجو..."} focus={true}/>
                <img css={searchGif} src={'/gifs/search.gif'} alt="Searching"/>
            </Dialog>

            <div onClick={hamburgerBtn} css={bgHamburgerBtn(open)}/>

            <header id="Header" css={navClass(display)}>
                <div onClick={hamburgerBtn}>
                    <HamburgerMenu open={open}/>
                </div>
                <div css={menuBtnClass(open)} onClick={hamburgerBtn}>
                    <img src={'/img/01 - SetareAval.png'} alt="Stereh Avval Logo"/>
                    <LinkMenu menuName={"صفحه اصلی"} link={"/"}/>
                    <LinkMenu menuName={" خدمات ما"} link={"/services"}/>
                    <LinkMenu menuName={"درباره ما"} link={"/aboutUs"}/>
                    <LinkMenu menuName={"تماس با ما"} link={"/contactUs"}/>
                    <LinkMenu menuName={"سوالات متداول"} link={"/faq"}/>
                    <LinkMenu menuName={"وبلاگ"} link={"/blog"}/>
                </div>
                <div css={actionBtnClass}>
                    <NavRequestBtn title={"ثبت درخواست"} href={"/requestGateway"}/>
                    <div>
                        <div onClick={handleClickOpen}>
                            <NavIcon source={'/img/Search.png'} alt={"Search"} href={"#"}/>
                        </div>
                        <NavIcon source={'/img/telephone-call.png'} alt={"Phone"} href={"tel:+989199001193"}/>
                        <NavIcon source={'/img/LogoutIcon.png'} alt={"Login"} href={"/login"}/>
                    </div>
                </div>
            </header>

        </React.Fragment>
    );
}

export default Header;
