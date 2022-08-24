/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {useRouter} from "next/router";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../source/constants/FixVariables';
import HeaderAndFooter from "../../source/hoc/HeaderAndFooter";
import PageTitle from "../../source/containers/PageTitle";
import ZItems from "../../source/containers/ZItems";


function ServicePage() {
    const servicePage = css`
 
      @media (max-width: 768px) {
       
      }

    `
    const router = useRouter()
    const {title} = router.query
    return (

        <React.Fragment>
            <header>
                <title>{title}</title>
            </header>
            <HeaderAndFooter content={
                <div css={servicePage}>
                    <PageTitle title={title}/>
                </div>
            }/>
        </React.Fragment>
    );
}

export default ServicePage;
