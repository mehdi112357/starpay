/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../constants/FixVariables';

const formInputContainer = css`
  display: flex;
  flex-direction: column;

  span {
    width: 100%;
    color: ${Variable.fontColorError};
    font-size: .7rem;
    margin-top: .5rem;
  }
`
const formInput = (error) => css`
  padding: 1rem;
  outline: none;
  border: ${(error === "" || error === undefined) ? `${Variable.border}` : `${Variable.borderError}`};
  transition: all .5s;
  border-radius: ${Variable.radius};

  &:focus {
    box-shadow: ${Variable.boxShadow};
    border: ${(error === "" || error === undefined) ? `${Variable.activeBorder}` : `${Variable.borderError}`};
  }

  &::placeholder {
    color: ${Variable.placeholderColor};
    font-size: ${Variable.placeholderFontSize};
  }
`


function FormInput({type, placeholder, focus, inputOnchange, property, error}) {
    return (
        <div css={formInputContainer}>
            <input onChange={e => inputOnchange(e.target.value, property)}
                   css={formInput(error)}
                   type={type}
                   placeholder={placeholder}
                   autoFocus={focus}/>
            {(error === "" || undefined) ? null : <span>{error}</span>}
        </div>
    );
}

export default FormInput;
