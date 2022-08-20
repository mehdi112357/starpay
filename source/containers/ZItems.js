/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../constants/variables';


const zItems = (direction) => css`
  width: 80%;
  display: flex;
  flex-direction: ${direction};
  border-radius: 2em;
  padding: 2em;
  margin: 1em auto;
  box-shadow: ${Variable.boxShadow};

  > * {
    margin: auto .5em;
  }

  p {
    font-size: 1em;
  }

  img {
    width: 30%;
    margin-bottom: 2em;
    @media (max-width: 768px) {
      align-self: center;
      width: 60%;
    }
  }

  h5 {
    white-space: nowrap;
  }

  h6 {
    color: ${Variable.placeholderColor};
    margin-bottom: 1.5em;
  }

  p {
    margin-top: 1em;
    color: ${Variable.navFontColor};

  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }

`


function Services({direction, title, subTitle, content, image, altImage}) {


    return (

        <React.Fragment>
            <div css={zItems(direction)}>
                <img src={image} alt={altImage}/>
                <div>
                    <h5>{title}</h5>
                    <h6>{subTitle}</h6>
                    <p>{content}</p>
                </div>
            </div>
        </React.Fragment>

    )
        ;
}

export default Services;
