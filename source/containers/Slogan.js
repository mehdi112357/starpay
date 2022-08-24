/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react'
import * as Variable from '../constants/FixVariables';

const bgSloganCss = (height, description) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${height};
  background-image: url('/img/Hexagon.svg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${Variable.sloganColor};
  @media (max-width: 768px) {
    height: calc(${height} / 2) ;

  }

  h1 {
    font-size: 4rem !important;
    @media (max-width: 768px) {
      font-size: 1.8rem !important;
    }
  }

  h4 {
    display: ${(description === "" || null || undefined) ? "none" : "block"};
    font-size: 1.2rem !important;
    margin-top: 2rem;
    @media (max-width: 768px) {
      font-size: .9rem !important;
      font-weight: 100;
    }
  }

`

function Slogan({title, description, height}) {

    return (
        <React.Fragment>
            <div css={bgSloganCss(height,description)}>
                <h1>{title}</h1>
                <h4>{description}</h4>
            </div>
        </React.Fragment>
    );
}

export default Slogan;
