/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React, {useEffect, useState} from "react";
import * as Variable from '../../Constants/Variables';
import {jsx, css, keyframes} from '@emotion/react';
import logo from '../../Assets/Img/01 - SetareAval.png'
import Telephone from '../../Assets/Img/telephone-call.png'
import Search from '../../Assets/Img/Search.png'
import LogoutIcon from "../../Assets/Img/LogoutIcon.png"
import LinkMenu from "../../Components/Link/LinkMenu";
import NavIcon from "../../Components/Button/NavIcon";
import NavRequestBtn from "../../Components/Button/NavRequestBtn";
import HamburgerMenu from "../../Components/Button/HamburgerMenu";

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
  position: ${display ? "fixed" : "block"};
  top: 0;
  width: 100%;
  @media (max-width: 768px) {
    position: fixed;
    padding: 0 12%;

  }
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

const hamburger = keyframes`
  0% {
    transform: translateX(110%);
  }
  100% {
    transform: translateX(0%);
  }
`
const menuBtnClass = (open) => css`
  width: 70%;
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
    width: 65%;
    animation: ${hamburger} 1s;
    height: 100vh;
  }

  > * {
    padding: 0 10px;
    @media (max-width: 768px) {
      border-bottom: 1px solid #FFF1E2FF ;
      width: 100%;
    }
  }

  > img {
    height: 60px;
    width: 80px;
    @media (max-width: 768px) {
      display: none;
    }
  }

 > :nth-child(3), > :nth-child(4) {
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
    @media (max-width: 768px) {
      display: none;
    }
  }
`

function Header() {

    const [display, setDisplay] = useState(false)
    window.onscroll = function () {
        myFunction()
    };

    function myFunction() {
        if (window.pageYOffset >= 50) {
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    }

    const [open, setOpen] = useState(false)

    const hamburgerBtn = ()=>{
        setOpen(!open)
    }
    return (
        <React.Fragment>
            <div onClick={hamburgerBtn} css={bgHamburgerBtn(open)}/>
            <header id="Header" css={navClass(display)} >
                <div onClick={hamburgerBtn}>
                    <HamburgerMenu open={open}/>
                </div>
                <div css={menuBtnClass(open)} onClick={hamburgerBtn}>
                    <img src={logo} alt="Stereh Avval Logo"/>
                    <LinkMenu menuName={"صفحه اصلی"} link={"/"}/>
                    <LinkMenu menuName={"ورود"} link={"#"}/>
                    <LinkMenu menuName={"جستجو"} link={"#"}/>
                    <LinkMenu menuName={" خدمات ما"} link={"#"}/>
                    <LinkMenu menuName={"درباره ما"} link={"#"}/>
                    <LinkMenu menuName={"تماس با ما"} link={"/ContactUs"}/>


                </div>
                <div css={actionBtnClass}>
                    <NavRequestBtn title={"ثبت درخواست"} href={"/RequestGateway"}/>
                    <div>
                        <NavIcon source={Search} alt={"Search"} href={"#"}/>
                        <NavIcon source={Telephone} alt={"Phone"} href={"tel:+989199001193"}/>
                        <NavIcon source={LogoutIcon} alt={"Login"} href={"#"}/>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

export default Header;