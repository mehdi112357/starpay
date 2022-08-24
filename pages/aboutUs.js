/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import Link from "next/link"
import {jsx, css, keyframes} from '@emotion/react';
import * as Variable from '../source/constants/FixVariables';
import PageTitle from "../source/containers/PageTitle";
import HeaderAndFooter from "../source/hoc/HeaderAndFooter";

import FlipCard from "../source/containers/FlipCard";


const popularServiceAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`
const aboutUsContainer = css`
  margin-top: 50px;
  @media (max-width: 768px) {
    margin-top: 100px;
  }

`
const picAndContext = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 80%;
    margin: 50px auto;
    border: ${Variable.border};
    border-radius: ${Variable.radius};
    box-shadow: ${Variable.boxShadow};
  }

  > p {
    width: 70%;
    margin: 20px auto;
    @media (max-width: 768px) {
      font-size: .75rem;
    }
  }
`
const popularContainer = css`
  margin-bottom: 50px;

  > :nth-of-type(div) {
    margin: 50px auto;
  }
`
const popularServices = css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 90%;
  margin:20px auto;
`



function AboutUs() {

    return (
        <React.Fragment>
            <header>
                <title>درباره ما</title>
            </header>
            <HeaderAndFooter content={<section css={aboutUsContainer}>
                <PageTitle title={"درباره ما"}/>
                <div css={picAndContext}>
                    <img src={'./img/TeamMember.jpg'} alt="teamPhoto"/>
                    <p>شرکت ستاره درخشان همراه کیش با نام تجاری "ستاره پی" به عنوان پرداخت‌ یار بانک مرکزی و از شرکت‌های
                        فعال در حوزه
                        فین‌تک از سال ۹۴ تاکنون می‌کوشد تا خدمات دریافت و پرداخت پول را به ساده‌ترین شکل ممکن در بستری
                        امن
                        به
                        افراد و سازمان‌ها ارائه کند. ستاره پی این روزها فقط یک ارائه‌دهندۀ سرویس‌های پرداخت آنلاین نیست
                        و
                        تلاش
                        می‌کند مجموعه‌ای از سرویس‌ها و راهکارهای متناسب با نیازهای کاربران را ارائه کند و در کنار اینکه
                        به‌عنوان
                        مجموعه‌ای معتبر شناخته می‌شود، به جایگاه نخست این حوزه هم دست یابد.
                        ستاره پی با شعار « راهکار جامع پرداخت کسب و کارها »، هدف اصلی خود را ارائه ساده‌ترین راهکارهای
                        انتقال وجه
                        آنلاین در امن‌ترین بستر ممکن قرار داده است.</p>
                </div>
                <div css={popularContainer}>
                    <PageTitle title={"راهکار های مالی"}/>
                    <div css={popularServices}>
                        <FlipCard href={'#'}
                                  image={'./img/paymentGateway.png'}
                                  altImage={""}
                                  title={"درگاه پرداخت اینترنتی"}
                                  backCardContent={'درگاه پرداخت اینترنتی و موبایلی ستاره پی به شما کمک می‌کند تا وجه کالا یا خدمات خود را به راحتی و از طریق اینترنت و توسط تمامی کارت‌های بانکی عضو شتاب دریافت نمایید.'}/>
                        <FlipCard href={'#'}
                                  image={'./img/wallet.png'}
                                  altImage={""}
                                  title={"کیف پول اینترنتی"}
                                  backCardContent={'کیف پول دیجیتال یارپی روش بسیار محبوبی برای انجام پرداخت های اینترنتی هستند و افرادی که در بستر تجارت الکترونیک فعالیت می‌کنند و یا فقط خرید انجام می‌دهند به راحتی از این روش محبوب استفاده می‌کنند.'}/>
                        <FlipCard href={'#'}
                                  image={'./img/appPayment.png'}
                                  altImage={""}
                                  title={"اپلیکیشن پرداخت موبایلی"}
                                  backCardContent={'اپلیکیشن پرداخت موبایلی یار یک اپلیکیشن پرداخت متفاوت است که به وسیله آن می‌توانید به خدمات متنوعی مانند خرید شارژ و بسته های اینترنت تلفن همراه، انجام کارت به کارت، دریافت موجودی تمام کارت‌های بانکی و بسیاری از خدمات متنوع دیگر همیشه دسترسی داشته باشید .'}/>
                        <FlipCard href={'#'}
                                  image={'./img/wallet.png'}
                                  altImage={""}
                                  title={"کیف پول اینترنتی"}
                                  backCardContent={'کیف پول دیجیتال یارپی روش بسیار محبوبی برای انجام پرداخت های اینترنتی هستند و افرادی که در بستر تجارت الکترونیک فعالیت می‌کنند و یا فقط خرید انجام می‌دهند به راحتی از این روش محبوب استفاده می‌کنند.'}/>
                        <FlipCard href={'#'}
                                  image={'./img/appPayment.png'}
                                  altImage={""}
                                  title={"اپلیکیشن پرداخت موبایلی"}
                                  backCardContent={'اپلیکیشن پرداخت موبایلی یار یک اپلیکیشن پرداخت متفاوت است که به وسیله آن می‌توانید به خدمات متنوعی مانند خرید شارژ و بسته های اینترنت تلفن همراه، انجام کارت به کارت، دریافت موجودی تمام کارت‌های بانکی و بسیاری از خدمات متنوع دیگر همیشه دسترسی داشته باشید .'}/>

                    </div>

                    {/*<Link href="#">*/}
                    {/*    <a> <img src={'./img/invoice.png'} alt="invoice"/>*/}
                    {/*        <span>فاکتور آنلاین</span>*/}
                    {/*    </a>*/}
                    {/*</Link>*/}
                    {/*<Link href="#">*/}
                    {/*    <a>*/}
                    {/*        <img src={'./img/application.png'} alt="application"/>*/}
                    {/*        <span>اپلیکیشن ها</span>*/}
                    {/*    </a>*/}
                    {/*</Link>*/}
                    {/*<Link href="#">*/}
                    {/*    <a>*/}
                    {/*        <img src={'./img/solution.png'} alt="solution"/>*/}
                    {/*        <span>راهکار مالی</span>*/}
                    {/*    </a>*/}
                    {/*</Link>*/}
                    {/*<Link href="#">*/}
                    {/*    <a>*/}
                    {/*        <img src={'./img/api.png'} alt="API"/>*/}
                    {/*        <span>وب سرویس ها</span>*/}
                    {/*    </a>*/}
                    {/*</Link>*/}
                    {/*<Link href="#">*/}
                    {/*    <a>*/}
                    {/*        <img src={'./img/organizationServices.png'} alt="organization"/>*/}
                    {/*        <span>سرویس سازمانی</span>*/}
                    {/*    </a>*/}
                    {/*</Link>*/}
                </div>

            </section>}/>
        </React.Fragment>
    );
}

export default AboutUs;
