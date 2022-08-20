/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React, {useEffect, useState,} from "react";
import Link from "next/link";
import {jsx, css, keyframes} from '@emotion/react';
import * as Variable from '../../constants/variables';

const animation = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1
  }
  35% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }

`
const mainNews = css`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${Variable.bgNews};
  overflow: hidden;
  @media (max-width: 768px) {
    display: none;
  }
`
const newsClass = (onSlide) => css`
  display: ${onSlide ? "block" : "none"};
  text-align: center;
  animation: ${animation} 2s ease-in-out;
`
const newsLinkClass = css`
  color: ${Variable.fontColor};
  font-size: .8rem;
  cursor: pointer;
`


function News() {
    let news = ["لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.", "قبلا در مقاله ای با نام «Next.js چیست و چه کاربردی دارد؟» درباره ماهیت فریم ورک Next.js و ویژگی های آن صحبت کردیم. در این مقاله می خواهیم به صورت کلی و عملی به آموزش next js بپردازیم.", "مزیت اصلی next.js ارائه قابلیت Server-Side Rendering است که یعنی صفحات شما در سمت سرور ساخته شده و به صورت کامل شده به سمت کاربر ارسال می شوند", "در برخی از موارد crawler ها (ربات های موتورهای جست و جو) نمی توانند محتویات صفحه را بخوانند."]
    const [slide, setSlider] = useState(1)
    const autoShowSlides = () => {
        (slide < news.length - 1) ? setSlider(slide + 1) : setSlider(0)
    }

    useEffect(() => {
        setTimeout(autoShowSlides, 6000)
    })

    return (
        <React.Fragment>
            <div css={mainNews}>
                {news.map((item, index) =>
                    <div key={index} css={newsClass(index === slide)}>
                        <Link href="#">
                            <a css={newsLinkClass}>{item}</a>
                        </Link>
                    </div>)}
            </div>
        </React.Fragment>
    )
        ;
}

export default News;
