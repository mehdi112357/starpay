/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../source/constants/FixVariables';
import PageTitle from "../source/containers/PageTitle";
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import HeaderAndFooter from "../source/hoc/HeaderAndFooter";


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
        {...props}
    />
))(({theme}) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const FAQContainer = css`
  margin: 50px auto;

  > :nth-child(1) {
    margin: 30px auto 50px;
  }

`


const FAQItems = css`
  width: 90%;
  margin: auto;
  font-size: 1.1rem;
  color: ${Variable.sloganColor};
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: .9rem;
  }

  * {
    font-family: IRANSans;
  }

  svg {
    margin: auto 10px;
    font-size: 1.4rem;
    color: ${Variable.sloganColor};

  }
`
const FAQTitle = css`
  font-family: IRANSans;
  padding: 10px 0;
`
const answerFAQ = css`
  font-size: 1rem;
  font-weight: 100;
`

function Faq() {

    const [expanded, setExpanded] = React.useState('');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (

        <React.Fragment>
            <header>
                <title>سوالات متداول</title>
            </header>
            <HeaderAndFooter content={<section css={FAQContainer}>
                <PageTitle title={"سوالات متداول"}/>
                <Accordion css={FAQItems} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <span css={FAQTitle}>ستاره پی چیست؟</span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p css={answerFAQ}>
                            شرکت ستاره درخشان همراه کیش با نام تجاری ستاره پی به عنوان پرداخت‌ یار
                            بانک مرکزی و از
                            شرکت‌های
                            فعال در حوزه
                            فین‌تک از سال 94 تاکنون می‌کوشد تا خدمات دریافت و پرداخت پول را به ساده‌ترین شکل ممکن در
                            بستری
                            امن
                            به افراد و سازمان‌ها ارائه کند.
                            - با انتخاب یک نام کاربری یکتا در ستاره پی می‌توانید درگاه اختصاصی پرداخت خودتان را
                            داشته‌باشید.
                            setarehPay.ir/@yourname
                            - با ثبت ‌نام در ستاره پی دیگر نیازی نیست برای دریافت پول اطلاعات بانکی خود را در اختیار
                            دیگران
                            قرار
                            دهید.
                            مجموعه‌ایی از سرویس‌های ستاره پی :
                            <br/>
                            ۱- ارائه انواع وب‌سرویس‌های پرداخت برای وب‌سایت‌ها و اپلیکیشن‌ها
                            <br/>
                            ۲- ارائه فاکتور رسمی آنلاین به مشتریان
                            <br/>
                            ۳- ارائه نرم افزار نسخه موبایل و دسکتاپ فاکتور با قابلیت اتصال به انواع پوز (pcPOS , mPOS)
                            <br/>
                            ۴- ارائه درگاه به نام و تسویه اتوماتیک روزانه
                            <br/>
                            ۵- استفاده از آیتم مالی برای فروش در شبکه‌های اجتماعی
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion css={FAQItems} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel21d-content" id="panel2d-header">
                        <span css={FAQTitle}>نحوۀ ثبت‌نام در پی‌پینگ و روند فعال‌سازی چگونه است؟</span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p css={answerFAQ}>
                            برای ثبت‌نام در وب‌سایت ستاره پی ابتدا باید نوع پنلی که می‌خواهید را انتخاب کنید.
                            <br/>
                            بعد از تکمیل فرم ثبت‌نام اولیه و وارد کردن ایمیل و شماره تماس که توسط خود شما تایید می‌شود،
                            اطلاعات هویتی، بانکی و محلی را وارد کنید. (با توجه به قوانین جدید شاپرک ارائه تمامی اطلاعات
                            محلی شامل کدپستی، آدرس و شماره تماس ثابت الزامیست).
                            <br/>
                            همچنین در صورتی‌که یک کسب‌وکار ثبت شده و دارای مجوز باشید باید تصویر مجوزها را در سامانه
                            بارگذاری کنید. در صورتی‌که پنل ثبت‌نامی شما پنل تسویه خودکار روزانه باشد کارشناسان ما برای
                            ارسال قرارداد همکاری با شما تماس خواهند گرفت.
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion css={FAQItems} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <span css={FAQTitle}>علت دریافت مشخصات هویتی چیست؟</span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p css={answerFAQ}>
                            به دلیل جلوگیری از تخلفاتی نظیر پول‌شویی و عملیات خلاف قوانین جمهوری اسلامی ایران و همچنین
                            به دلیل انجام نقل و انتقالات مالی نیاز است تا دریافت‌کننده پول کاملا تایید هویت شود.
                        </p>
                    </AccordionDetails>
                </Accordion>
            </section>}/>
        </React.Fragment>
    );
}

export default Faq;
