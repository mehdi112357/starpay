/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../constants/FixVariables';


const addressBox = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 15rem;
  overflow: hidden;
  border: ${Variable.border};
  border-radius: ${Variable.radius};
  box-shadow: ${Variable.boxShadow};
  width: 80%;
  margin: auto;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding-top: 1rem;
    
  }

  > img {
    width: 7rem;
    height: 7rem;
    margin-right: 1rem;
    object-fit: cover;
    @media (max-width: 768px) {
      margin-bottom: 1rem;
    }
  }

  > :nth-child(2) {
    @media (max-width: 768px) {
      padding: 0 10px;
    }
  }

  > div {
    width: 30%;
    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
      margin-bottom: 1rem;

    }
  }

  > a {
    width: 50%;
    display: flex;
    object-fit: cover;
    position: relative;
    @media (max-width: 768px) {
      width: 100%;
      justify-content: center;
    }

    > img {
      width: 100%;
      height: 15rem;
      object-fit: cover;
    }

    > div {
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.23012955182072825) 80%, rgba(255, 255, 255, 0.4962359943977591) 90%, rgba(255, 255, 255, 1) 100%);
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`


function Address({mainImg, altMainImg, address, phone, fax, postalCode, email, map, altMap, mapHref}) {

    return (
        <React.Fragment>
            <div css={addressBox}>
                <img src={mainImg} alt={altMainImg}/>
                <div>
                    <div>{address}</div>
                    <div>
                        <div>{phone}</div>
                        <div> {fax}</div>
                        <div> {postalCode}</div>
                        <div>{email}</div>
                    </div>
                </div>
                <a href={mapHref} target="_blank">
                    <img src={map} alt={altMap}/>
                    <div/>
                </a>
            </div>
        </React.Fragment>
    );
}

export default Address;
