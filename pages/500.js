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

      > img {
        height: calc(100vh - 90px);
      }

      h1 {
        position: absolute;
        top: 10px;
      }
    `
    return (

        <React.Fragment>
            <header>
                <title>500</title>
            </header>
            <HeaderAndFooter content={ <section css={notFoundCss}>
                <h1>سرور قاد به پاسخگویی نمیباشد لطفا مجدد تلاش فرمایید</h1>
                <img src={"./img/404 error.svg"} alt="این صفحه وجود ندارد"/>
            </section>}/>

        </React.Fragment>
    );
}

export default NotFoundServer;
