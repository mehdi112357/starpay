/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../source/constants/FixVariables';
import HeaderAndFooter from "../source/hoc/HeaderAndFooter";
import PageTitle from "../source/containers/PageTitle";


function Rules() {


    const rules = css`
      width: 70%;
      margin: auto;
      padding: 1.5em 0;
      line-height: 2.2em;
      color: ${Variable.navFontColor};
      @media (max-width: 768px) {
        width: 90%;
      }

      li {
        margin-right: 4em;
        margin-top: .3em;
        list-style-type: circle;
      }
    `
    return (

        <React.Fragment>
            <header>
                <title>قوانین و مقررات</title>
            </header>
            <HeaderAndFooter content={
                <React.Fragment>
                    <PageTitle title={"قوانین و مقررات"}/>
                    <main css={rules}>
                        <p>لطفا پیش از استفاده از خدمات دیجی‌پی، قوانین و مقررات را مطالعه کنید. در‌صورتی‌که به راهنمایی
                            و یا مشاوره نیاز دارید، می‌توانید از طریق صفحه «تماس با ما»، پرسش‌های خود را با ما در میان
                            بگذارید:
                        </p>
                        <p>دیجی‌پی به عنوان یک ارائه‌دهنده سرویس‌های پرداخت از جمله کارت به کارت، پرداخت قبض، خرید شارژ،
                            پرداخت به فروشگاه‌ها و غیره، تابع کلیه قوانین و مقررات جمهوری اسلامی ایران است. توافق‌نامه
                            زیر برای استفاده مناسب و ایمن از اپلیکیشن دیجی‌پی و جلوگیری از هرگونه سوءاستفاده احتمالی
                            تدوین شده است.
                        </p>
                        <p>این توافق در قالب تعیین‌کننده تعهدات و تکالیف طرفین، بین شرکت نوآوران پرداخت مجازی ایرانیان
                            به شماره ثبت ۵۲۷۸۰۳ به عنوان طرف اول و کاربر اپلیکیشن دیجی‌پی به عنوان طرف دوم، منعقد
                            می‌شود.
                        </p>
                        <p>شرکت نوآوران پرداخت مجازی ایرانیان، صاحب‌امتیاز اپلیکیشن دیجی‌پی است که از این پس در متن
                            «دیجی‌پی» نامیده می‌شود و کاربر اپلیکیشن دیجی‌پی «کاربر». تایید شرایط استفاده به منزله قبول
                            و امضای الکترونیکی توافق‌نامه خواهد بود.
                        </p>
                        <p>
                            1. کلیه حقوق مادی و معنوی دیجی‌پی و علائم تجاری آن متعلق به شرکت نوآوران پرداخت مجازی
                            ایرانیان (سهامی خاص) به شماره ثبت ۵۲۷۸۰۳ است.
                        </p>
                        <p>
                            2. هرگونه کپی‌برداری، استفاده غیرمجاز از نام، مطالب، مستندات و علائم تجاری دیجی‌پی بدون مجوز
                            کتبی این شرکت و سعی در نفوذ به داده‌های دیجی‌پی، مطابق کلیه قوانین جاری کشور، غیرمجاز تلقی
                            شده و دیجی‌پی حق پی‌گرد قانونی در مراجع ذی‌صلاح را برای خود محفوظ می‌دارد.
                        </p>
                        <ul>
                            3. حقوق مالکیت معنوی و فکری همه علائم تجاری ثبت شده، اجزای فنی اپلیکیشن و جزییات هویت برند
                            دیجی‌پی، متعلق به شرکت نوآوران پرداخت مجازی ایرانیان (سهامی خاص) به شماره ثبت ۵۲۷۸۰۳ است و
                            کاربر مجاز به استفاده از آن‌ها برای کاربردهای شخصی نخواهد بود.
                            <li>
                                گفتنی است نادیده گرفتن این حقوق با عناوینی مثل صدور اجازه یا حق ضمنی و تلویحی، یا انکار
                                پس از قبول و غیره، قابل توجیه نیست.
                            </li>
                        </ul>
                        <p>
                            4. هر کاربر دیجی‌پی می‌تواند با شماره‌ تلفنی که به نام و منطبق با کد ملی اوست، در دیجی‌پی
                            ثبت‌نام کند به شرط آن‌که هر کارت باتکی ثبت شده در پروفایل کاربر نیر به نام او و قابل انطباق
                            با شماره ملی باشد.
                            به دستور بانک مرکزی کشور، در هر بار فرایند پرداخت کارت به کارت تطابق شماره ملی کاربر با
                            شماره کارت بانکی و شماره تلفن همراه کنترل خواهد شد.
                        </p>
                        <p>
                            <ul>
                                5. هرگونه استفاده غیرمجاز از خدمات اپلیکیشن دیجی‌پی که طبق قوانین موجود کشور مجرمانه
                                شناخته شود، ممنوع است:
                                <li>خرید و فروش کارت‌های بخت‌آزمایی، و شرکت در هر گونه قمار و شرط‌‌بندی.</li>
                                <li>استفاده از شبکه خصوصی مجازی (وی پی ان) و خرید و فروش نرم افزار های عبور از فیلترینگ
                                    جمهوری اسلامی ایران.
                                </li>
                                <li>استفاده از خدمات برای هرگونه هک و نفوذ و دسترسی غیرمجاز.</li>
                                <li>خرید و فروش کالاهایی که به نحوی حقوق ناشر، مالک، مولف، پدیدآورنده اثر و امثال آنها
                                    را رعایت نمی‌‌کنند (خلاف قوانین کپی‌رایت).
                                </li>
                                <li>خرید و فروش سیگار و سایر مواد دخانی.</li>
                                <li>خرید و فروش انواع سلاح‌های گرم و سرد.</li>
                                <li>خرید و فروش کالاها و خدماتی که مبادله آن‌ها دارای مقررات و نظامات خاص است.</li>
                                <li>خرید و فروش کالاهایی که برای مصرف‌کننده خطر جدی در پی دارد.</li>
                                <li>خرید و فروش کالاهایی که مبادله آن‌ها طبق قانون ممنوع است از قبیل مواد مخدر، مشروبات
                                    الکلی، روان گردان ها، مواد سکرآور، کالاهای قاچاق.
                                </li>
                                <li>خرید و فروش کالاهایی که مبادله آن‌ها مغایر با آداب اسلامی است.</li>
                                <li>خرید و فروش کالاها و خدماتی که انجام فعالیت‌های غیرقانونی را به نحوی تشویق یا تسهیل
                                    می‌کنند.
                                </li>
                                <li>خرید و فروش کالاهای به‌دست‌آمده از ارتکاب جرم یا نقض مقررات کشوری و لشگری.</li>
                                <li>خرید و فروش کلیه کالاها یا خدماتی که ارائه آنها نیازمند اخذ مجوز یا پروانه است.</li>
                            </ul>
                        </p>
                        <p>
                            6. اگر کاربر تخلفی مرتکب شود که به تشخیص دیجی‌پی صدور دستور برخورد از سوی مراجع قضایی را در
                            پی داشته باشد، دیجی‌پی مجاز است ارائه خدمات به کاربر را متوقف کند.
                        </p>
                        <p>
                            7. انجام هرگونه اقدام مرتبط با سوءاستفاده مالی و پول‌شویی یا ایجاد اختلال در حوزه پولی و
                            بانکی کشور به تشخیص دیجی‌پی، موجب توقف ارائه خدمات به کاربر خواهد شد.
                        </p>
                        <p>
                            8. هرگونه اقدام منجر به اختلال در جریان نقدینگی به تشخیص دیجی‌پی، موجب توقف ارائه خدمات به
                            کاربر خواهد شد.
                        </p>
                        <p>
                            9. دیجی‌پی تنها ملزم به پی‌گیری مشکلات نسخه‌های موجود اپلیکیشن در بازارهای شناخته شده همچون
                            «Google Play»، «کافه‌بازار»، «مایکت»، «چارخونه»، «سیبچه»، «سیب ایرانی»، «سیب‌بانک» و «سیب
                            اپ» است. در صوررت افزوده شدن موارد، این فهرست به روزرسانی می‌شود.
                        </p>
                        <p>
                            10. دیجی‌پی در مقابل خسارت‌های احتمالی ناشی از افشای اطلاعات کاربر که در اثر محافظت نکردن و
                            سهل‌انگاری شخصی یا سرقت و مفقود شدن تلفن همراه رخ دهد، هیچ‌گونه مسئولیتی نخواهد داشت. کاربر
                            موظف است در صورت مفقود شدن یا سرقت تلفن همراه، مراتب را به بانک مورد نظر اطلاع دهد تا حساب
                            معرفی شده در دیجی‌پی مسدود شود.
                            کاربر همچنین می‌تواند در تماس تلفنی با پشتیبانی فنی دیجی‌پی، درخواست خود را برای غیرفعال شدن
                            حساب کاربری دیجی‌پی اعلام کند.
                        </p>

                    </main>

                </React.Fragment>


            }/>

        </React.Fragment>
    );
}

export default Rules;
