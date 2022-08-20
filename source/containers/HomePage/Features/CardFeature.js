/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react'


const featureCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  box-shadow: 0 30px 50px -3px #cfdae5;
  background-color: #FFFFFF;
  padding: 3rem;
  margin: 2rem auto;
  @media (max-width: 768px) {
    width: 80%;
  }

  img {
    width: 12rem;
    height: 12rem;
    margin-bottom: 1rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h5 {
      width: auto;
      margin: 1em auto;
      text-align: center;
      line-height: 33px;
      white-space: nowrap;
      @media (max-width: 768px) {
        font-size: 1.2rem;
      }
    }

    p {
      width: 80%;
      font-weight: 500;
      @media (max-width: 768px) {
        font-size: .8rem;
      }
    }
  }



`
// const pulse = keyframes    `
//       0% {
//         box-shadow: 0 0 0 0 rgba(163, 177, 198, 0.3),
//         0 0 0 1em rgba(163, 177, 198, 0.3),
//         0 0 0 3em rgba(163, 177, 198, 0.03),
//         0 0 0 5em rgba(163, 177, 198, 0.01);
//       }
//       100% {
//         box-shadow: 0 0 0 1em rgba(163, 177, 198, 0.3),
//         0 0 0 3em rgba(163, 177, 198, 0.03),
//         0 0 0 5em rgba(163, 177, 198, 0.03),
//         0 0 0 8em rgba(163, 177, 198, 0.01);
//       }
//
//     `
// const pulseBtnCss = css`
//   position: absolute;
//   width: 30px;
//   height: 30px;
//   background-image: linear-gradient(to right top, #f6f6f6, #e9ebee, #dae1e7, #cad7dd, #b9ced1);
//   border-radius: 50%;
//   right: 120px;
//   bottom: -12px;
//   animation: ${pulse} 1.5s linear infinite;
// `

function CardFeature(props) {
    return (
        <React.Fragment>
            <div css={featureCss}>
                <img src={props.icon} alt={props.alt}/>
                <div>
                    <h5>{props.title}</h5>
                    <p>{props.description}</p>
                </div>

                {/*<div css={pulseBtnCss}/>*/}
            </div>
        </React.Fragment>
    );
}

export default CardFeature;
