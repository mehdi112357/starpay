/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */
import React, {useState} from "react";
import {jsx, css} from '@emotion/react'
import * as Variable from '../../constants/FixVariables';
import FormInput from "../../component/inputs/FormInput";
import FormButton from "../../component/buttons/FormButton";
import uploadLogo from "../../../public/img/Image upload-logo.svg"
import PageHint from "../../component/PageHint";
import SelectForm from "../../component/inputs/SelectForm";
import FileInput from "../../component/inputs/FileInput";
import ShopDocValidation from "./ShopDocValidation";
import DatePicker from "../../component/inputs/DatePicker";

const shopDocuments = css`
  margin: auto;
  text-align: center;

  > :last-child {
    margin-top: 5rem;
  }

`
const shopInfoCss = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  margin: auto;

  > * {
    width: 45%;
    margin: .5rem auto;
    @media (max-width: 768px) {
      width: 90%;

    }
  }

  > select {
    appearance: none;
    padding: 1rem;
    outline: none;
    border: ${Variable.border};
    transition: all .5s;
    border-radius: ${Variable.radius};
    cursor: pointer;
    position: relative;

  }

  @media (max-width: 768px) {
    flex-direction: column;

  }

`
const accountInfo = css`
  input {
    width: 98%;
    margin-top: 1rem;
  }
`
const taxInfo = css`
  input {
    width: 98%;
    margin-top: 1rem;
  }
`


function ShopDoc({handleNext}) {
    const [shopInfo, setShopInfo] = useState({
        shopName: "",
        enShopName: "",
        webSiteURL: "",
        callBack: "",
        emailShop: "",
        phoneShop: "",
        postalCodeShop: "",
        classCode: "",
        subClassCode: "",
        activity: "",
        noContract: "",
        endDateContract: "",
        uploadLogo: "",
        accountNo: "",
        taxCode: "",
    })
    const [error, setError] = useState({
        shopName: "",
        enShopName: "",
        webSiteURL: "",
        callBack: "",
        emailShop: "",
        phoneShop: "",
        postalCodeShop: "",
        classCode: "",
        subClassCode: "",
        activity: "",
        noContract: "",
        endDateContract: "",
        uploadLogo: "",
        accountNo: "",
        taxCode: "",
    })
    const inputOnchange = (e, property) => {
        setShopInfo({
            ...shopInfo,
            [property]: e.target.files[0],
        })
    }
    const inputOnchangeInput = (value, property) => {
        setShopInfo({
            ...shopInfo,
            [property]: value,
        })
    }
    const inputOnchangeSelect = (e, property) => {
        setShopInfo({
            ...shopInfo,
            [property]: e.target.value,
        })
    }
    const formShopHandler = (e) => {
        e.preventDefault()
        ShopDocValidation(shopInfo)
            .then((resolve) => handleNext(resolve))
            .catch((err) => setError(err))
    }
    return (
        <form onSubmit={formShopHandler} css={shopDocuments}>
            <PageHint title={"درخواست درگاه پرداخت"} description={"لطفا اطلاعات را صحیح وارد نمایید."}/>
            <section css={shopInfoCss}>
                <FormInput type={"text"} placeholder={"نام فروشگاه به فارسی"} inputOnchange={inputOnchangeInput}
                           property={"shopName"} error={error.shopName}/>
                <FormInput type={"text"} placeholder={"نام فروشگاه به انگلیسی"} inputOnchange={inputOnchangeInput}
                           property={"enShopName"} error={error.enShopName}/>
                <FormInput type={"text"} placeholder={"آدرس وب سایت"} inputOnchange={inputOnchangeInput}
                           property={"webSiteURL"} error={error.webSiteURL}/>
                <FormInput type={"text"} placeholder={"آدرس Call Back"} inputOnchange={inputOnchangeInput}
                           property={"callBack"} error={error.callBack}/>
                <FormInput type={"text"} placeholder={"ایمیل فروشگاه"} inputOnchange={inputOnchangeInput}
                           property={"emailShop"} error={error.emailShop}/>
                <FormInput type={"text"} placeholder={"شماره تلفن ثابت"} inputOnchange={inputOnchangeInput}
                           property={"phoneShop"} error={error.phoneShop}/>
                <FormInput type={"text"} placeholder={"کد پستی"} inputOnchange={inputOnchangeInput}
                           property={"postalCodeShop"} error={error.postalCodeShop}/>
                <SelectForm title={"کد صنف"} required={true} disabled={false}
                            inputOnchangeSelect={inputOnchangeSelect} property={"classCode"}
                            option={[{value: "001", title: "فروشگاه ها و لوازم باغبانی"},
                                {value: "002", title: "سازمان های سیاسی"},
                                {value: "003", title: "مبلمان اداری و تجاری"},
                                {value: "004", title: "خدمات حرفو چینی"},
                            ]}/>
                <SelectForm title={"نوع مالکیت"} required={true} disabled={false}
                            inputOnchangeSelect={inputOnchangeSelect} property={"activity"}
                            option={[{value: "001", title: "اجاره ای"},
                                {value: "002", title: "مالک"},
                                {value: "003", title: "در رهن"},
                            ]}/>
                <FormInput type={"text"} placeholder={"شماره قرارداد اجاره"} inputOnchange={inputOnchangeInput}
                           property={"classCode"} error={error.classCode}/>
                <DatePicker placeholder={"تاریخ اتمام قرارداد اجاره"} inputOnchange={inputOnchange}
                            property={"subClassCode"} error={error.birthDay}/>
            </section>
            <section>
                <PageHint title={"بارگذاری لوگوی فروشگاه"} description={"لطفا از فرمت های JPG و PNG استفاده فرمایید."}/>
                <FileInput inputOnchange={inputOnchange} property={"uploadLogo"} photo={uploadLogo} altImage={"logo"}
                           error={error.uploadLogo}/>
            </section>
            <section css={accountInfo}>
                <PageHint title={"اطلاعات حساب"} description={"شماره شبای بانکی خود را اعلام فرمایید."}/>
                <FormInput type={"text"} placeholder={"شماره شبای بانکی خود را بدون IR وارد کنید."} inputOnchange={inputOnchangeInput}
                           property={"accountNo"} error={error.accountNo}/>
            </section>
            <section css={taxInfo}>
                <PageHint title={"کد رهگیری مالیاتی"}
                          description={"برای نهایی کردن ثبت نام و دریافت درگاه پرداخت طبق قوانین شاپرک الزامی است که کد رهگیری مالیاتی داشته باشید."}/>
                <FormInput type={"text"} placeholder={"کد رهگیری مالیاتی"} inputOnchange={inputOnchangeInput}
                           property={"taxCode"} error={error.taxCode}/>
                <PageHint title={"کد رهگیری مالیاتی ندارم و تمایل دارم از طریق دیجی‌پی نسب به دریافت آن اقدام کنم."}
                          description={"برای اینکه بتوانید نسبت به دریافت کد رهگیری مالیاتی اقدام کنید باید تمامی اطلاعات مربوط به مراحل قبل و این مرحله را به صورت کامل وارد کنید."}/>
                <FormButton content={"دریافت کد رهگیری مالیاتی"}/>
            </section>
            <FormButton content={"ثبت نهایی"} type={"submit"}/>
        </form>
    );
}

export default ShopDoc;
