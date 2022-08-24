/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import * as Variable from '../../constants/FixVariables';
import {jsx, css} from '@emotion/react';
import Link from "next/link"

const linkMenuCSS = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 40px;
  color: ${Variable.navFontColor};
  font-weight: bold;

  &:after {
    content: '';
    position: absolute;
    transition: .3s;
    width: 0;
    left: 50%;
    bottom: 0;
    height: 3px;
    background: ${Variable.underlineBtn};
  }

  &:hover {
    cursor: pointer;

    &:after {
      width: 100%;
      left: 0;
    }
  }

`


function LinkMenu({link, menuName, onClick}) {
    return (
        <Link onClick={onClick} href={link}>
            <a css={linkMenuCSS}> {menuName} </a>
        </Link>
    );
}

export default LinkMenu;
