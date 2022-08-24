/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React, {useState} from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../source/constants/FixVariables';
import HeaderAndFooter from "../source/hoc/HeaderAndFooter";
import PageTitle from "../source/containers/PageTitle";
import Footer from "../source/containers/HOCHeader/Footer";
import Dashboard from '../source/containers/Panel/Dashboard'
import {RiNotificationLine, RiLogoutBoxLine, RiWallet3Line} from "react-icons/ri";
import {GoDashboard} from "react-icons/go";
import {TbUserCircle} from "react-icons/tb";
import {MdOutlinePayment, MdOutlineSecurity} from "react-icons/md";
import {BsCashCoin} from "react-icons/bs";
import {BiCodeAlt, BiSupport} from "react-icons/bi";
import {AiOutlineSetting} from "react-icons/ai";
import {FiUsers} from "react-icons/fi";
import Tooltip from '@mui/material/Tooltip';


import Link from "next/link";
import Image from "next/image";
import Gateway from "../source/containers/Panel/Gateway";
import Users from "../source/containers/Panel/Users";
import FinancialReports from "../source/containers/Panel/FinancialReports";
import Security from "../source/containers/Panel/Security";
import Support from "../source/containers/Panel/Support";
import Settings from "../source/containers/Panel/Settings";
import IconButton from "@mui/material/IconButton";
import avatar from '../public/img/avatarPhoto.png'

function Panel() {
    const [mainPage, setMainPage] = useState('dashboard')

    const handlePanel = (title) => {
        setMainPage(title)
    }
    const showMainPanelPage = () => {
        if (mainPage === 'dashboard') return <Dashboard/>
        if (mainPage === 'gateway') return <Gateway/>
        if (mainPage === 'users') return <Users/>
        if (mainPage === 'financialReports') return <FinancialReports/>
        if (mainPage === 'security') return <Security/>
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
            flex-direction: column;
            justify-content: center;
          }

          &:hover {
            > * {
              color: ${Variable.underlineBtn};
            }
          }

          p {
            @media (max-width: 768px) {
              font-size: 8px;
              text-align: center;
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
    const leftIconsNav = css`
      display: flex;
      align-items: center;

      > div {
        position: relative;

        > span {

          position: absolute;
          font-size: 10px;
          white-space: nowrap;
          top: 130%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          background-color: rgba(61, 61, 61, 0.7);
          transition: .15s;
          color: #ffffff;
          padding: 2px 5px;
          border-radius: 5px;
        }

        &:hover {
          > span {
            transform: translate(-50%, -50%) scale(1);
          }
        }
      }
    `
    const profilePanel = css`
      background-image: url("./img/bgProfilePanel.png");
      background-size: cover;
      border-radius: ${Variable.radius};
      position: relative;
      overflow: hidden;

      * {
        color: #ffffff !important;
      }

      > div {
        position: absolute;
        right: 0;
        top: 0;
        font-size: 12px;
        @media (max-width: 768px) {
          display: none !important;
        }
      }

      h6 {
        font-size: 16px;
        @media (max-width: 768px) {
          display: none;
        }
      }

      img {
        position: absolute;
        left: -75px;
        top: 0;
        height: 100%;
        @media (max-width: 768px) {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    `
    const today = new Date().toLocaleDateString('fa-IR')


    return (
        < React.Fragment>
            < header>
                < title> پنل کاربری < /title>
            </header>
            <div css={panel}>
                <nav css={navPanel}>
                    <Link href="/">
                        <a>
                            <Image src={'/img/01 - SetareAval.png'} alt="Stereh Avval Logo"
                                   width='60px' height="60px"/>
                        </a>
                    </Link>
                    <div css={leftIconsNav}>
                        <div>
                            <IconButton style={{fontSize: '28px'}}>
                                <RiNotificationLine/>
                            </IconButton>
                            <span>پیام ها</span>
                        </div>
                        <div>
                            <IconButton style={{fontSize: '28px'}}>
                                <RiLogoutBoxLine/>
                            </IconButton>
                            <span>خروج</span>
                        </div>
                    </div>
                </nav>
                <main css={mainPanel}>
                    <aside>
                        <span css={profilePanel}>
                            <div>امروز : {today} </div>
                            <img src='/img/avatarPhoto.png' alt=""/>
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
                        <div css={mainPage === 'users' ? selectedSidebar : null}
                             onClick={() => handlePanel('users')}>
                            <FiUsers/>
                            <p>کاربران</p>
                        </div>
                        <div css={mainPage === 'financialReports' ? selectedSidebar : null}
                             onClick={() => handlePanel('financialReports')}>
                            <BsCashCoin/>
                            <p>گزارشات مالی</p>
                        </div>
                        <div css={mainPage === 'security' ? selectedSidebar : null}
                             onClick={() => handlePanel('security')}>
                            <MdOutlineSecurity/>
                            <p>امنیت</p>
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
    )
        ;
}

export default Panel;
