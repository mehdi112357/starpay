/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React, {useEffect} from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../Constants/Variables';
import headquarter from "../Assets/Img/headquarter.png"
import Office from "../Assets/Img/help-desk.png"
import PageTitle from "../Containers/PageTitle";
import {AiOutlineMail} from "react-icons/ai"
import {BsBuilding} from "react-icons/bs"
import {MdOutlineSupportAgent, MdRecordVoiceOver} from "react-icons/md"
import TehranLoc from "../Assets/Img/TehranLoc.PNG"
import KishLoc from "../Assets/Img/KishLoc.PNG"
import FastContact from "../Containers/ContactUs/FastContact";
import FormTitle from "../Containers/ContactUs/FormTitle";
import ContactForm from "../Containers/ContactUs/ContactForm";
import Address from "../Containers/ContactUs/Address";
import ContactManagers from "../Containers/ContactUs/ContactManagers";

const contactUsCSS = css`
  width: 100%;
  margin: 3rem auto;
  @media (max-width: 768px) {
    margin: 6rem auto;
  }

`
const callSectionCSS = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 2rem auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  > :nth-child(1) {
    width: 55%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  > :nth-child(2) {
    width: 40%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  > * {
    @media (max-width: 600px) {
      width: 80%;
      margin: auto;
    }
  }

  h2 {
    @media (max-width: 768px) {
      font-size: 1.5rem !important;
    }
  }
`
const address = css`
  padding: 1rem;
`


function ContactUs() {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    return (
        <React.Fragment>
            <div css={contactUsCSS}>
                <PageTitle title={"تماس با ما"}/>
                <section css={callSectionCSS}>
                    <FastContact/>
                    <div>
                        <FormTitle icon={<AiOutlineMail/>} title={"فرم تماس"}/>
                        <ContactForm/>
                    </div>
                </section>
                <section>
                    <div css={address}>
                        <FormTitle icon={<BsBuilding/>} title={"دفتر مرکزی"}/>
                        <Address mainImg={headquarter} altMainImg={"headquarterBuilding"}
                                 address={"جزیره کیش، مجتمع اداری سارینا ۱، طبقه هفتم، واحد ۷۱۵"}
                                 phone={"تلفن : 1-44482080 - 076"} fax={"دورنگار: 44482082 - 07"}
                                 postalCode={" کد پستی: ۷۹۴۱۸۹۷۱۶۷"} email={"ایمیل: info@setareaval.ir"} map={KishLoc}
                                 altMap={"Kish Location"}
                                 mapHref={"https://www.google.com/maps/place/Sarina+1/@26.5319529,54.0219738,17z/data=!3m1!4b1!4m5!3m4!1s0x3e50aa4b42d3a6ad:0xee433b841ad8fc5e!8m2!3d26.5319481!4d54.0241625"}/>

                    </div>
                    <div css={address}>
                        <FormTitle icon={<MdOutlineSupportAgent/>} title={"دفتر هماهنگی"}/>
                        <Address mainImg={Office} altMainImg={"Coordinating Office"}
                                 address={"تهران، سعادت آباد، خیابان کیان ۱۳ شرقی، پلاک ۲"}
                                 phone={"تلفن: ۷۹۱۸۲۰۰۰ - ۰۲۱"} fax={"دورنگار: ۲۶۷۴۲۳۱۲ - ۰۲۱"}
                                 postalCode={" کد پستی: ۱۹۹۸۸۳۷۸۰۱"} email={"ایمیل: info@setareaval.ir"} map={TehranLoc}
                                 altMap={"Tehran Location"}
                                 mapHref={"https://www.google.com/maps/place/%D8%B3%D8%AA%D8%A7%D8%B1%D9%87+%DB%8C%DA%A9%E2%80%AD/@35.779708,51.3748626,19.5z/data=!4m13!1m7!3m6!1s0x3f8e07c426c458a5:0x95a75027bda5d26f!2z2YXbjNiv2KfZhiDaqdin2KzYjCBUZWhyYW4sIElyYW4!3b1!8m2!3d35.7818471!4d51.3750394!3m4!1s0x3f8e077df52d20bb:0xb41d4b97fc84bc2c!8m2!3d35.7796364!4d51.3750377"}/>
                    </div>
                    <div css={address}>
                        <FormTitle icon={<MdRecordVoiceOver/>} title={"تماس با مدیران"}/>
                        <ContactManagers/>
                    </div>
                </section>

            </div>
        </React.Fragment>
    );
}

export default ContactUs;
