/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../constants/FixVariables';
import Image from 'next/image'
import {GrTransaction} from "react-icons/gr";


function Dashboard() {

    const dashboard = css`
      padding: 1em;
    `
    const mainPanelPageHeader = css`
      border-radius: ${Variable.radius};
      box-shadow: ${Variable.boxShadow};
      padding: .5em;
      text-align: center;
    `
    const dashboardReports = css`
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 1em;
      @media (max-width: 992px) {
       flex-wrap: wrap;

      }
    `
    const dashboardCardReports = css`
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 24%;
      height: 200px;
      border-radius: ${Variable.radius};
      box-shadow: ${Variable.boxShadow};
      border: ${Variable.border};
      padding: 1em;
      margin-bottom: 10px;
      @media (max-width: 992px) {
        width: 48%;
      }
      @media (max-width: 768px) {
        width: 100%;
        flex-direction: row;
height: auto;
      }
      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
      
        @media (max-width: 1200px) {
          flex-direction: column;
        
        }
        @media (max-width: 768px) {
       
          flex-direction: row;

        }

        svg {
          font-size: 2em;
          color: ${Variable.navFontColor};

        }
      }

      h6 {
        text-align: center;
        font-size: 1em;
        white-space: nowrap;

        @media (max-width: 992px) {
          font-size: .8em;
        }
      }
    `
    return (

        <React.Fragment>
            <main css={dashboard}>
                <h6 css={mainPanelPageHeader}>پیشخوان</h6>
                <div css={dashboardReports}>
                    <div css={dashboardCardReports}>
                        <div>
                            <h6>تعداد تراکنش روز</h6>
                            <Image src='/img/transactionCounts.png' alt='تعداد تراکنش روز' width='75px'
                                   height='75px'/>
                        </div>
                        <h6>0</h6>
                    </div>
                    <div css={dashboardCardReports}>
                        <div>
                            <h6>مبلغ تراکنش روز</h6>
                            <Image src='/img/amountTransaction.png' alt='مقدار تراکنش روز' width='75px'
                                   height='75px'/>
                        </div>
                        <h6>0 ریال</h6>
                    </div>
                    <div css={dashboardCardReports}>
                        <div>
                            <h6>موجودی کیف پول</h6>
                            <Image src='/img/wallet.png' alt='مقدار تراکنش روز' width='75px'
                                height='75px'/>
                        </div>
                        <h6>0 ریال</h6>
                    </div>
                    <div css={dashboardCardReports}>
                        <div>
                            <h6>موجودی کیف پول</h6>
                            <Image src='/img/wallet.png' alt='مقدار تراکنش روز' width='75px'
                                   height='75px'/>
                        </div>
                        <h6>0 ریال</h6>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
}

export default Dashboard;
