/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react'
import CardFeature from "./CardFeature";


const featuresContainerCSS = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 4rem 0;
  background-color: #FFFFFF;
  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  > :nth-child(odd) {
    flex-direction: row;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  > :nth-child(even) {
    flex-direction: row-reverse;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`


function Features() {
    return (
        <React.Fragment>
            <section css={featuresContainerCSS}>
                <CardFeature icon={'./img/Calling-amico.svg'} alt={"پشتیبانی 24 ساعته"} title={"پشتیبانی 24 ساعته"}
                             description={"توجه به نیازهای مشتریان در جهت پاسخگویی موثر به نیازها و جلب رضایت و خوشنودی ایشان، ما را بر آن داشت تا با گردآوری اشخاص مجرب در زمینه پشتیبانی، به صورت ۲۴ ساعته و در تمام طول هفته سعی در برآورده کردن نیازهای مشتریان خود داشته باشیم. لذا شما قادر خواهید بود در هر ساعتی از شبانه روز جهت رفع مشکل با شماره تلفن  ۷۹۱۸۲۰۰۰ - ۰۲۱ تماس بگیرید و این اطمینان را داشته باشید که کارشناسان ما در بخش پشتیبانی، در اسرع وقت به رفع مشکل شما خواهند پرداخت."}/>
                <CardFeature icon={'./img/Cash Payment-bro.svg'} alt={"تصویه روزانه بعد از یک روزه کاری "}
                             title={"تصویه روزانه بعد از یک روزه کاری "}
                             description={"بدر راستای همراهی با کسب و کارها مدت زمان تسویه حساب ها را کاهش دادیم تا تمامی کاربران ستاره پی و تمامی کسب و کارهایی که نیاز به درگاه پرداخت اینترنتی مطمئن با تسویه سریع دارند، بتوانند از خدمات ستاره پی استفاده کنند. به این ترتیب تمامی درخواست‌های تسویه به صورت روزانه انجام می شوند و درخواست های ثبت شده در هر روز، روز بعد به حساب شما واریز خواهند شد."}/>
                <CardFeature icon={'./img/Certification-rafiki.svg'} alt={"دریافت مجوز پرداخت یاری"}
                             title={"دریافت مجوز پرداخت یاری"}
                             description={"اولین قدم برای دریافت مجوز پرداخت یاری عقد قرار داد با یکی از شرکت های ارائه دهنده خدمات پرداخت (PSP) می باشد. شرکت های PSP برای عقد قرار داد پرداخت یاری و ارسال معرفی نامه به شاپرک هر کدام شرایط و ضوابط خاص خودشان را دارند و معمولا پروپوزال و داکیومنت از مدل کسب وکار و همچنین ضمانت نامه بانکی را از شرکت های متقاضی می خواهند."}/>
            </section>
        </React.Fragment>
    );
}

export default Features;
