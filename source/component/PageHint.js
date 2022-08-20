/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';


const pageHint = css`
  margin-top: 50px;

  h6 {
    font-weight: 100 !important;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1rem;
    }

    h6 {
      font-size: .75rem;
    }
  }
`

function LinkMenu({title, description}) {
    return (
        <div css={pageHint}>
            <h3>{title}</h3>
            <h6>{description}</h6>
        </div>
    );
}

export default LinkMenu;
