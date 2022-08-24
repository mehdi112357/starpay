/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../constants/FixVariables';

const formTitle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem auto;

  > :nth-child(1) {
    font-size: 3.5rem;
    margin: auto 0.5rem;
    background-color: #cfdeff;
    padding: 0.7rem;
    border-radius: 1rem;
    color: ${Variable.navFontColor};
  }

  h2 {
    @media (max-width: 768px) {
      font-size: 1.5rem !important;
    }
  }
`

function FormTitle({icon,title}) {

    return (
        <React.Fragment>
                        <div css={formTitle}>
                            {icon}
                            <h2>{title}</h2>
                        </div>

        </React.Fragment>
    );
}

export default FormTitle;
