/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React, {useState} from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../source/constants/variables';
import HeaderAndFooter from "../source/hoc/HeaderAndFooter";
import PageTitle from "../source/containers/PageTitle";
import Footer from "../source/containers/HOCHeader/Footer";
import Dashboard from '../source/containers/Panel/Dashboard'
import {RiNotificationLine, RiLogoutBoxLine, RiWallet3Line} from "react-icons/ri";
import {GoDashboard} from "react-icons/go";
import {TbUserCircle} from "react-icons/tb";
import {MdOutlinePayment} from "react-icons/md";
import {BsCashCoin} from "react-icons/bs";
import {BiCodeAlt, BiSupport} from "react-icons/bi";
import {AiOutlineSetting} from "react-icons/ai";


import Link from "next/link";
import Image from "next/image";
import Gateway from "../source/containers/Panel/Gateway";
import Wallet from "../source/containers/Panel/Wallet";
import CashOut from "../source/containers/Panel/CashOut";
import Developers from "../source/containers/Panel/Developers";
import Support from "../source/containers/Panel/Support";
import Settings from "../source/containers/Panel/Settings";


function Panel() {
    const [mainPage, setMainPage] = useState('dashboard')

    const handlePanel = (title) => {
        setMainPage(title)
    }
    const showMainPanelPage = () => {
        if (mainPage === 'dashboard') return <Dashboard/>
        if (mainPage === 'gateway') return <Gateway/>
        if (mainPage === 'wallet') return <Wallet/>
        if (mainPage === 'cashOut') return <CashOut/>
        if (mainPage === 'developers') return <Developers/>
        if (mainPage === 'support') return <Support/>
        if (mainPage === 'settings') return <Settings/>


    }
    const panel = css`

    `
    const navPanel = css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: .5em 2.5em;
      box-shadow: ${Variable.boxShadow};

      > div {
        > * {
          color: ${Variable.navFontColor};
          margin-right: .5em;
          cursor: pointer;
          font-size: 1.5em;
        }
      }

      > img {
        cursor: pointer;
      }
    `
    const mainPanel = css`
      width: 95%;
      display: flex;
      justify-content: space-around;
      margin: 2em auto 2em auto;

      aside {
        box-shadow: ${Variable.boxShadow};
        border: ${Variable.border};
        border-radius: ${Variable.radius};
        width: 20%;
        @media (max-width: 768px) {
          width: 15%;
        }

        span {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 180px;
          border-bottom: ${Variable.border};
          margin-bottom: 1em;
          box-shadow: ${Variable.boxShadow};
          @media (max-width: 768px) {
            height: 100px;
          }

          svg {
            font-size: 3em;
            color: ${Variable.navFontColor};
            margin-bottom: .2em;
            @media (max-width: 768px) {
              font-size: 2em;
            }
          }
        }


        div {
          display: flex;
          align-items: center;
          cursor: pointer;
          padding: .4em;
          transition: .1s;
          @media (max-width: 768px) {
            justify-content: center;
          }

          &:hover {
            > * {
              color: ${Variable.underlineBtn};
            }
          }

          p {
            @media (max-width: 768px) {
              display: none;
            }
          }

          svg {
            margin-bottom: .2em;
            font-size: 1.1em;
            color: ${Variable.navFontColor};
            margin-left: 1em;
            @media (max-width: 768px) {
              font-size: 2.5em;
              margin-left: 0;

            }
          }
        }
      }

      section {
        width: 75%;
        box-shadow: ${Variable.boxShadow};
        @media (max-width: 768px) {
          width: 80%;
        }
      }
    `
    const selectedSidebar = css`
      border-left: 3px solid ${Variable.underlineBtn};
      box-shadow: 0 10px 14px -10px #c5c5c5;

      * {
        color: ${Variable.underlineBtn};
      }
    `
    return (

        <React.Fragment>
            <header>
                <title>پنل کاربری</title>
            </header>
            <div css={panel}>
                <nav css={navPanel}>
                    <Link href="/">
                        <a>
                            <Image src={'/img/01 - SetareAval.png'} alt="Stereh Avval Logo"
                                   width='60px' height="60px"/>
                        </a>
                    </Link>
                    <div>
                        <RiNotificationLine/>
                        <RiLogoutBoxLine/>
                    </div>
                </nav>
                <main css={mainPanel}>
                    <aside>
                        <span>
                            <TbUserCircle/>
                            <h6>رضا کاملی</h6>
                        </span>
                        <div css={(mainPage === 'dashboard') ? selectedSidebar : null}
                             onClick={() => handlePanel('dashboard')}>
                            <GoDashboard/>
                            <p>پیشخوان</p>
                        </div>
                        <div css={mainPage === 'gateway' ? selectedSidebar : null}
                             onClick={() => handlePanel('gateway')}>
                            <MdOutlinePayment/>
                            <p>درگاه پرداخت</p>
                        </div>
                        <div css={mainPage === 'wallet' ? selectedSidebar : null}
                             onClick={() => handlePanel('wallet')}>
                            <RiWallet3Line/>
                            <p>کیف پول</p>
                        </div>
                        <div css={mainPage === 'cashOut' ? selectedSidebar : null}
                             onClick={() => handlePanel('cashOut')}>
                            <BsCashCoin/>
                            <p>تسویه حساب</p>
                        </div>
                        <div css={mainPage === 'developers' ? selectedSidebar : null}
                             onClick={() => handlePanel('developers')}>
                            <BiCodeAlt/>
                            <p>توسعه دهندگان</p>
                        </div>
                        <div css={mainPage === 'support' ? selectedSidebar : null}
                             onClick={() => handlePanel('support')}>
                            <BiSupport/>
                            <p>پشتیبانی</p>
                        </div>
                        <div css={mainPage === 'settings' ? selectedSidebar : null}
                             onClick={() => handlePanel('settings')}>
                            <AiOutlineSetting/>
                            <p>تنظیمات</p>
                        </div>
                    </aside>
                    <section>
                        {showMainPanelPage()}
                    </section>
                </main>
                <Footer/>
            </div>
        </React.Fragment>
    );
}

export default Panel;
