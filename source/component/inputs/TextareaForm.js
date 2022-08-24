/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../constants/FixVariables';

const textarea = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  span {
    width: 100%;
    color: ${Variable.fontColorError};
    font-size: .7rem;
    margin-top: .5rem;
  }
`
const textareaForm = (error) => css`
  padding: 1rem;
  outline: none;
  margin: auto;
  border: ${(error === "" || error=== undefined) ? `${Variable.border}` : `${Variable.borderError}`};
  transition: all .5s;
  width: 100%;
  border-radius: ${Variable.radius};

  &:focus {
    box-shadow: ${Variable.boxShadow};
  }
`


function TextareaForm({name, id, row, column, placeholder, inputOnchange, property, error}) {

    return (
        <div css={textarea}>
                <textarea css={textareaForm(error)} name={name} id={id} rows={row}
                          placeholder={placeholder}
                          onChange={e => inputOnchange(e.target.value, property)}/>
            {(error === "" || undefined) ? null : <span>{error}</span>}
        </div>
    );
}

export default TextareaForm;
