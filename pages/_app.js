/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import {jsx, css, Global} from '@emotion/react';
import React, {useEffect, useState} from "react";
import { useRouter } from 'next/router';
import * as Variable from "../source/constants/variables";
import Loading from "../source/containers/Loading";



const global = () => css`
  @font-face {
    font-family: "IRANSans";
    src: local('IRANSans'), url('./fonts/iransans.woff') format('truetype');
  }

  body {
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'IRANSans';
    text-decoration: none;
    direction: rtl;
    scroll-behavior: smooth;

    :after :before {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    h1, h2, h3, h4, h5, h6, p {
      text-align: justify;
      color: ${Variable.navFontColor};
    }

    h1 {
      font-size: 2.8em;
      @media (max-width: 768px) {
        font-size: 2.6em;
      }
    }

    h2 {
      font-size: 2.5em;
      @media (max-width: 768px) {
        font-size: 2.3em;
      }

    }

    h3 {
      font-size: 2.2em;
      @media (max-width: 768px) {
        font-size: 2em;
      }
    }

    h4 {
      font-size: 1.9em;
      @media (max-width: 768px) {
        font-size: 1.7em;
      }
    }

    h5 {
      font-size: 1.6em;
      @media (max-width: 768px) {
        font-size: 1.4em;
      }
    }

    h6 {
      font-size: 1.3em;
      @media (max-width: 768px) {
        font-size: 1.1em;
      }
    }

    p {
      font-size: 1em;
      @media (max-width: 768px) {
        font-size: .8em;
      }
    }
  }
`

export default function MyApp({Component, pageProps}) {
    const router = useRouter();
    const [pageLoading, setPageLoading] = useState(false);
    useEffect(() => {
        const handleStart = () => { setPageLoading(true); };
        const handleComplete = () => { setPageLoading(false); };
        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);
    }, [router]);
    return (
        <React.Fragment>
            <Global styles={global}/>
            { pageLoading
                ? <Loading/>
                : <Component {...pageProps} />
            }
        </React.Fragment>
    )
}
