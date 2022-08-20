/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React, {useState} from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../constants/variables';
import FormInput from "../../component/inputs/FormInput";
import TextareaForm from "../../component/inputs/TextareaForm";
import FormButton from "../../component/buttons/FormButton";
import ContactFormValidation from "./ContactFormValidation";

const sendMail = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: ${Variable.border};
  box-shadow: ${Variable.boxShadow};
  padding: 2rem;
  width: 100%;
  margin: auto;
  @media (max-width: 768px) {
    padding: 1rem;
    width: 85%;
    margin: auto;
  }

  > * {
    width: 90%;
    margin: 1rem .5rem;
  }
`


function ContactForm() {
    const [contactUsInfo, setContactUsInfo] = useState({
        name: "",
        phone: "",
        message: "",
    })
    const [error, setError] = useState({
        name: "",
        phone: "",
        message: "",
    })
    const inputOnchange = (value, property) => {
        setContactUsInfo({
            ...contactUsInfo,
            [property]: value,
        })
    }
    const handleContactUsForm = (e) => {
        e.preventDefault()
        ContactFormValidation(contactUsInfo)
            .then((resolve) => resolve)
            .catch((err) => setError(err))
    }
    return (
        <React.Fragment>
            <form css={sendMail} onSubmit={handleContactUsForm}>
                <FormInput type={"text"} placeholder={"نام و نام خانوادگی"} inputOnchange={inputOnchange}
                           property={"name"} error={error.name}/>
                <FormInput type={"text"} placeholder={"شمارموبایل"} inputOnchange={inputOnchange} property={"phone"}
                           error={error.phone}/>
                <TextareaForm name={''} id={''} row={5} column={''} placeholder={"لطفا پیام خود را ثبت کنید"}
                              inputOnchange={inputOnchange} property={"message"} error={error.message}/>
                <FormButton content={"ارسال"} type={"submit"}/>
            </form>
        </React.Fragment>
    );
}

export default ContactForm;
