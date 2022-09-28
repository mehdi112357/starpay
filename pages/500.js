/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import HeaderAndFooter from "../source/hoc/HeaderAndFooter";


function NotFoundServer() {
    const notFoundCss = css`
      display: flex;
      justify-content: center;
      width: 90%;
      margin: auto;
      position: relative;
padding-bottom: 50px ;

      h4 {
        position: absolute;
        top: 60px;
        left: 50%;
        transform: translate(-50%, -50%);
        white-space: nowrap;
        z-index: 1000;
        @media (max-width: 768px) {
          top: 90%;
          font-size: 20px;
          white-space: normal;
          text-align: center;
          width: 100%;
        }
      }
      img {
        width: 800px;
        height: 800px;
      }
    `
    return (

        <React.Fragment>
            <header>
                <title>500</title>
            </header>
            <HeaderAndFooter content={ <section css={notFoundCss}>
                <h4>سرور قادر به پاسخگویی نمیباشد لطفا مجدد تلاش فرمایید</h4>
                <img src={"/img/404 error.svg"} alt="این صفحه وجود ندارد" />
            </section>}/>

        </React.Fragment>
    );
}

export default NotFoundServer;
