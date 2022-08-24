/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../constants/FixVariables';

const FormBtn = css`
  margin: 1.5rem auto;
  border: ${Variable.border};
  cursor: pointer;
  background-color: ${Variable.level2actionBtnBg};
  color: ${Variable.btnFontColor};
  transition: .25s;
  border-radius: ${Variable.radius};
  padding: .75rem 1rem ;
  width: 200px!important;
  white-space: nowrap;

  &:hover {
    background-color: ${Variable.level2actionBtnBgHover};
  }
`

function FormButton({content,type}) {

    return (
        <React.Fragment>
            <button type={type} css={FormBtn}>{content}</button>
        </React.Fragment>
    );
}

export default FormButton;
