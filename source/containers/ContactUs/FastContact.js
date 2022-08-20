/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../constants/variables';



const fastContact = css`

  width: 100%;

  > * {
    padding: .5rem;
    margin: 1rem auto;
  }

  > img {
    width: 100%;
    object-fit: cover;
    margin: 0;
    padding: 0;
  }

//   > div {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//     width: 100%;
//     margin-top: 3rem;
//
//     > a {
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//       width: 90%;
//       cursor: pointer;
//       transition: .25s;
//       color: ${Variable.navFontColor};
//
//       span {
//         @media (max-width: 768px) {
//           font-size: 1rem;
//         }
//       }
//
//       &:hover {
//         box-shadow: ${Variable.boxShadow};
//       }
//
//       > img {
//         margin: auto ;
//         width: 3rem;
//         height: 100%;
//         @media (max-width: 768px) {
//           margin: auto 5%;
//         }
//       }
//     }
//   }
`

function FastContact() {

    return (
        <React.Fragment>
                    <div css={fastContact}>
                        <img src={'./gifs/contactUs.gif'} alt="Contact Us"/>
                        {/*<div>*/}
                        {/*    <a href={"tel:+989199001193"}>*/}
                        {/*        <img src={Mobile} alt="call us"/>*/}
                        {/*    </a>*/}
                        {/*    <a href="#">*/}
                        {/*        <img src={WhatsApp} alt="whatsapp contact line"/>*/}
                        {/*    </a>*/}
                        {/*    <a href="#">*/}
                        {/*        <img src={Instagram} alt="instagram contact line"/>*/}
                        {/*    </a>*/}
                        {/*    <a href="#">*/}
                        {/*        <img src={Telegram} alt="Telegram contact line"/>*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </div>

        </React.Fragment>
    );
}

export default FastContact;
