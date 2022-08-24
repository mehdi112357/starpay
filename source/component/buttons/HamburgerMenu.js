/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../constants/FixVariables';


const hamburgerCSS = css`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80px;
  height: 80px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  z-index: 2000;
  @media (min-width: 768px) {
    display: none;
  }
`
const hamburgerBtnCSS = (open) => css`
  width: 35px;
  height: 4px;
  background-color: ${Variable.navFontColor};
  border-radius: 5px;
  transform: ${open ? "translateX(-50px)" : "translateX(0)"};
  background: ${open ? "transparent" : ""};
  transition: all 0.5s ease-in-out;

  &:before, &:after {
    content: "";
    position: absolute;
    width: 35px;
    height: 4px;
    background-color: ${Variable.navFontColor};
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }

  &:before {
    transform: ${open ? "  rotate(45deg) translate(35px,-35px)" : "translateY(-10px)"};
  }

  &:after {
    transform: ${open ? "  rotate(-45deg) translate(35px,35px)" : "translateY(10px)"};
  }
`


function HamburgerMenu({open}) {

    return (
        <div css={hamburgerCSS}>
            <div css={hamburgerBtnCSS(open)}/>
        </div>
    );
}

export default HamburgerMenu;
