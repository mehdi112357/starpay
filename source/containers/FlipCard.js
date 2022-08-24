/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../constants/FixVariables';
import Link from "next/link";

const flipCard = css`
  background-color: transparent;
  width: 200px;
  height: 250px;
  perspective: 1000px;
  

  margin-bottom: 1em;

  &:hover {
    > * {
      transform: rotateY(180deg);
    }

  }
`
const flipCardInner = css`

  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform .7s;
  transform-style: preserve-3d;

  > * {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: ${Variable.radius};
    box-shadow: ${Variable.boxShadow};
    padding: 1em;
    border: ${Variable.border};

  }

`
const flipCardFront = css`

  > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    width: 100%;
    height: 100%;

    > span {
      font-size: 1em;
      color: ${Variable.navFontColor};
      white-space: nowrap;
    }

    > img {
      height: 100px;
      margin: 1.5em;
    }
  }
`
const flipCardBack = css`
  display: flex;
  align-items: center;

  > a {
    text-decoration: none;

    > span {
      font-size: .8em;
      color: ${Variable.navFontColor};
      text-align: justify;
    }
  }

  transform: rotateY(180deg);
`

function FlipCard({href, image, altImage, title, backCardContent}) {


    return (
        <div css={flipCard}>
            <div css={flipCardInner}>
                <div css={flipCardFront}>
                    <Link href={href}>
                        <a>
                            <img src={image} alt={altImage}/>
                            <span>{title}</span>
                        </a>
                    </Link>
                </div>
                <div css={flipCardBack}>
                    <Link href={href}>
                        <a>
                            <span>{backCardContent}</span>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FlipCard;
