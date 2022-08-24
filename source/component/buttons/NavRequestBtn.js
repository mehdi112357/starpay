/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import * as Variable from '../../constants/FixVariables';
import {jsx, css} from '@emotion/react';
import Link from "next/link"


const requestBtn = css`
  position: relative;
  height: 40px;
  padding: 10px 25px;
  cursor: pointer;
  width: 150px;
  background-color: ${Variable.actionBtnBg};
  border: none;
  transition: all .2s linear;
  color: ${Variable.btnFontColor};
  z-index: 0;
  font-weight: 500;
  white-space: nowrap;
  outline: none;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    left: 0;
    top: 0;
    height: 40px;
    background: #ff6f00;
    transition: .25s linear;
    z-index: 0;
  }

  &:before {
    content: '';
    position: absolute;
    width: 0;
    right: 0;
    top: 0;
    height: 40px;
    background: #ff6f00;
    transition: .25s linear;
    z-index: 0;
  }

  &:hover::after {
    width: 50%;
  }

  &:hover::before {
    width: 50%;
  }

  a {
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    text-decoration: none;
    border: none;
    color: #FFFFFF;
  }
`

function NavRequestBtn({title,href}) {
    return (
        <React.Fragment>
            <button css={requestBtn}>
                <Link href={href}>
                    <a>{title}</a>
                </Link>
            </button>
        </React.Fragment>
    );
}

export default NavRequestBtn;
