/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import HeaderAndFooter from "../source/hoc/HeaderAndFooter";
import Image from 'next/image'


function NotFound() {
    const notFoundCss = css`
      display: flex;
      justify-content: center;
      width: 90%;
      margin: auto;
      position: relative;


      h2 {
        position: absolute;
        top: 60px;
        left: 50%;
        transform: translate(-50%, -50%);
        white-space: nowrap;
        z-index: 1000;
        @media (max-width: 768px) {
          top: 95%;

          font-size: 20px;
        }
      }
    `

    return (

        <React.Fragment>
            <header>
                <title>404</title>
            </header>
            <HeaderAndFooter content={
                <section css={notFoundCss}>
                    <h2>این صفحه موجود نمی باشد</h2>
                    <Image src={"/img/404 error.svg"}
                           alt="این صفحه وجود ندارد"
                           width={800}
                           height={800}
                    />
                </section>
            }/>

        </React.Fragment>
    );
}

export default NotFound;
