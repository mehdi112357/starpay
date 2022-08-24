/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';


function Loading() {
    const loadingCss = css`
     
      display: flex;
      justify-content: center;
      
      align-items: center;
      height: 100vh;
      >img{
        width: 250px;
        height: 250px;
      }
      @media (max-width: 768px) {
     
        >img{
          height: auto;
          width: 50%;
        }
      }
    `
    return (

        <section css={loadingCss}>
            <img  src={'./gifs/paymentLoading2.gif'} alt="لطفا منتظر بمانید"/>
        </section>
    );
}

export default Loading;
