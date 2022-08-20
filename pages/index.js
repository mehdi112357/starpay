/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */
import React, {useEffect} from "react";
import {jsx, css, Global} from '@emotion/react'
import * as Variable from '../source/constants/variables';
import VideoHomePage from "../source/containers/HomePage/VideoHomePage";
import Services from "../source/containers/HomePage/Services/Services"
import Slogan from "../source/containers/Slogan"
import Features from "../source/containers/HomePage/Features/Features";
import HeaderAndFooter from "../source/hoc/HeaderAndFooter";


const backgroundHome = css`
  background-image: ${Variable.backgroundColor};
  //@media (max-width: 500px) {
  //  background-color: green;
  //}
`

function Index() {

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.scrollTo(0, 0)
        }
    }, [])

    return (
        <React.Fragment>
            <header>
                <title>ستاره پی</title>
            </header>
            <HeaderAndFooter content={<main css={backgroundHome}>
                <VideoHomePage/>
                <Services/>
                <Slogan title={"ستاره اول همراه در پرداخت"}
                        description={"از بزرگترین ارائه دهندگان خدمات پرداخت یاری"}
                        height={"400px"}/>
                <Features/>
            </main>}/>


        </React.Fragment>
    );
}

export default Index;
