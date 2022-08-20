/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';

const iconNavCSS = css`
  width: 25px;
  height: 25px;
  transition: .1s linear;
  @media (max-width: 768px) {
    display: none;
  }
`


function NavIcon(props) {


    return (
        <React.Fragment>
            <a href={props.href}>
                <img css={iconNavCSS} src={props.source} alt={props.alt}/>
            </a>
        </React.Fragment>
    );
}

export default NavIcon;
