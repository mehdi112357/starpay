/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../constants/FixVariables';

const uploadBox = (error) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  border: ${(error === "" || error === undefined) ? `${Variable.border}` : `${Variable.borderError}`};
  padding: .5rem;
  transition: .15s ease-in-out;
  color: ${Variable.navFontColor};
  border-radius: ${Variable.radius};

  &:hover {
    box-shadow: ${Variable.boxShadow};
    transform: scale(1.01);
  }

  @media (max-width: 768px) {
    width: 40%;
    margin: 1rem auto;


  }
  @media (max-width: 600px) {
    width: 90%;
    margin: 1rem auto;


  }

`
const uploadInput = css`
  cursor: pointer;
  margin: auto;
  height: auto;
  width: 100%;

  input {
    width: 0;
    height: 0;
  }

`
const contentInput = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  > span {
    text-align: center;
    font-size: .6rem;
  }

  > img {
    width: 100%;
    height: 200px;
  }

`
const errorText = css`
  color: ${Variable.fontColorError};
`


function FileInput({title, inputOnchange, property, image, altImage, error}) {
    return (
        <div css={uploadBox(error)}>
            <span>{title}</span>
            <label css={uploadInput}>
                <input type="file" name="image_reference"
                       onChange={(e) => inputOnchange(e, property)}
                       accept="image/png,image/jpg,image/jpeg"
                />
                <div css={contentInput}>
                    <span>عکس با کیفیت مناسب بارگذاری فرمایید.</span>
                    <img src={image} alt={altImage}/>
                    {(error === "" || undefined) ? null : <span css={errorText}>{error}</span>}
                </div>
            </label>
        </div>
    );
}

export default FileInput;
