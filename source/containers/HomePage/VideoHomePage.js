/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css, keyframes} from '@emotion/react';

const videoTextForward = keyframes`
  0% {
    transform: translateX(calc(100vh + 300px));
  }
  16%, 100% {
    translateX(0)
  }
`
const videoTextBackward = keyframes`
  0% {
    transform: translateX(calc(-100vh - 300px));
  }
  16%, 100% {
    translateX(0)
  }
`
const videoSectionClass = css`
  position: relative;
  background-color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 5rem ;
  }
`
const videoClass = css`
  width: 98%;
  object-fit: cover;
  filter: blur(3px) brightness(30%);
  overflow: hidden;
  height: 86vh;
  @media (max-width: 768px) {
    height: 91vh; 
  }
`
const textVideoClass = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  position: absolute;
  width: 100%;
  height: 100%;

  > * {
    white-space: nowrap;
    color: #FFFFFF;
  }

  h1 {
    animation: ${videoTextForward} 2s forwards;
    @media (max-width: 768px) {
      font-size: 3rem;

    }
  }

  h3 {
    animation: ${videoTextBackward} 2s forwards;
    font-weight: 100;
    @media (max-width: 768px) {
      font-size: 1rem;

    }
  }
`


function VideoHomePage() {

    return (
        <React.Fragment>
            <section css={videoSectionClass}>
                <video css={videoClass} src={'./videos/Video.mp4'} type="video/mp4" autoPlay={true} loop={true}
                       muted={true}>
                    مرورگر
                    شما امکان پخش این ویدئو را
                    ندارد
                </video>
                <div css={textVideoClass}>
                    <h1>ستاره اول</h1>
                    <h3> پیشرو در ارائه خدمات پرداخت یاری</h3>
                </div>
            </section>

        </React.Fragment>
    );
}

export default VideoHomePage;
