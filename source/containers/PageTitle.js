/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react'
import * as Variable from '../constants/FixVariables';

const pageTitleCss = (height, description) => css`
  width: 90%;
  border-bottom: ${Variable.border};
  color: ${Variable.sloganColor};
  padding: 0 20px;
  margin: auto;  
  }

`

function PageTitle({title}) {

    return (
        <React.Fragment>
            <div css={pageTitleCss}>
                <h1>{title}</h1>
            </div>
        </React.Fragment>
    );
}

export default PageTitle;
