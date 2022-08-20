/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css, keyframes} from '@emotion/react'

const featuresContainerCSS = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 100px auto;
`
const featureCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 300px;
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.15) 0 2px 8px;
  border-radius: 50%;
  border-right: 15px solid rgba(33, 93, 91, 0.5);

  h5 {
    width: auto;
    background-image: linear-gradient(to left, #FFFFFF, #e9f3f3, #e3eeef, #c7d4d5, #d7e5e7);
    border-radius: 55px;
    padding: 5px;
    box-shadow: rgb(17 12 46 / 15%) 0px 48px 100px 0px;
    height: 40px;
    margin-top: 20px;
    text-align: center;
    line-height: 33px;
    white-space: nowrap;
  }

  h6 {
    width: 80%;
    margin: 10px auto;


  }
`
const vector = css`
  position: absolute;
  width: 125px;
  height: 125px;
  background-image: linear-gradient(to right top, #6c9693, #57807b, #b8ccc8);
  padding: 5px;
  border-radius: 50%;
  right: 75px;
  top: -50px;

  img {
    background-color: #FFFFFF;
    border-radius: 50%;
  }
`
const pulse = keyframes
    `
      0% {
        box-shadow: 0 0 0 0 rgba(163, 177, 198, 0.3),
        0 0 0 1em rgba(163, 177, 198, 0.3),
        0 0 0 3em rgba(163, 177, 198, 0.03),
        0 0 0 5em rgba(163, 177, 198, 0.01);
      }
      100% {
        box-shadow: 0 0 0 1em rgba(163, 177, 198, 0.3),
        0 0 0 3em rgba(163, 177, 198, 0.03),
        0 0 0 5em rgba(163, 177, 198, 0.03),
        0 0 0 8em rgba(163, 177, 198, 0.01);
      }

    `
const pulseBtnCss = css`
  position: absolute;
  width: 30px;
  height: 30px;
  background-image: linear-gradient(to right top, #f6f6f6, #e9ebee, #dae1e7, #cad7dd, #b9ced1);
  border-radius: 50%;
  right: 120px;
  bottom: -12px;
  animation: ${pulse} 1.5s linear infinite;
`


function Features() {
    return (
        <React.Fragment>
            <section css={featuresContainerCSS}>
                <div css={featureCss}>
                    <div css={vector}><img src={'./img/Calling-amico.svg'} alt="callCenter"/></div>
                    <h5>پشتیبانی 24 ساعته</h5>
                    <h6>تیم فنی ما به صورت تمام وقت در خدمت شما عزیزان هستند.</h6>
                    <div css={pulseBtnCss}/>
                </div>
                <div css={featureCss}>
                    <div css={vector}><img src={'./img/Cash Payment-bro.svg'} alt="callCenter"/></div>
                    <h5>تصویه روزانه بعد از یک روزه کاری </h5>
                    <h6>بعد از یک روز کاری به صورت کامل پول در حساب شما قرار خواهد گرفت.</h6>
                    <div css={pulseBtnCss}/>
                </div>
                <div css={featureCss}>
                    <div css={vector}><img src={'./img/Certification-rafiki.svg'} alt="callCenter"/></div>
                    <h5>دریافت مجوز پرداخت یاری</h5>
                    <h6>از اول تا آخر گرفتن مجوز پرداخت یاری در کنار شما مشتریان عزیز هستیم.</h6>
                    <div css={pulseBtnCss}/>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Features;
