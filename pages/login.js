/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React, {useState} from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../source/constants/variables';
import validator from "validator/";
import HeaderAndFooter from "../source/hoc/HeaderAndFooter";
import PageTitle from "../source/containers/PageTitle";
import FormInput from "../source/component/inputs/FormInput";
import FormButton from "../source/component/buttons/FormButton";


function Login() {
    const [loginForm, setLoginForm] = useState({
        phoneNo: "",
        otp: "",
    })
    const [error, setError] = useState({
        phoneNo: "",
        otp: "",
    })
    const [otpSending, setOtpSending] = useState(false)


    const inputOnchange = (value, property) => {
        setLoginForm({
            ...loginForm,
            [property]: value,
        })

    }
    const handleLoginForm = (e) => {
        e.preventDefault()
        if (loginForm.phoneNo === "" || loginForm.phoneNo === undefined) {
            setError((prevState) => ({
                ...prevState,
                phoneNo: 'لطفا شماره موبایل خود را وارد نمایید.',
            }));

        } else if (!validator.isMobilePhone(loginForm.phoneNo, 'fa-IR')) {
            setError((prevState) => ({
                ...prevState,
                phoneNo: 'شماره موبایل نا معتبر است.',
            }));
        } else {
            setOtpSending(true);
            setError((prevState) => ({
                ...prevState,
                phoneNo: '',
            }));
            setLoginForm((prevState) => ({
                ...prevState,
                phoneNo: '',
            }));

        }
    }
    const handleOtpForm = (e) => {
        e.preventDefault()
        if (loginForm.otp === "" || loginForm.otp === undefined) {
            setError((prevState) => ({
                ...prevState,
                otp: 'لطفا کد ارسال شده را وارد فرمایید.',
            }));
        } else {
            setOtpSending(false)
            setError((prevState) => ({
                ...prevState,
                otp: '',
            }));
        }
    }


    const login = css`
      width: 70%;
      margin: 3em auto;
      padding: 2em;
      box-shadow: ${Variable.boxShadow};
      display: flex;
      flex-direction: column;

      input {
        margin: auto;
        width: 80%;
      }
    `
    return (

        <React.Fragment>
            <header>
                <title>ورود به سایت</title>
            </header>
            <HeaderAndFooter content={
                <React.Fragment>
                    <PageTitle title={"ورود به سایت"}/>
                    <main>
                        {
                            otpSending ?
                                <form css={login} onSubmit={handleOtpForm}>
                                    <FormInput type={"text"}
                                               placeholder={"لطفا کد ارسال شده را وارد فرمایید."}
                                               inputOnchange={inputOnchange}
                                               property={"otp"}
                                               error={error.otp}/>
                                    <FormButton content={"ارسال"}
                                                type={"submit"}/>
                                </form>
                                : <form css={login} onSubmit={handleLoginForm}>
                                    <FormInput type={"text"}
                                               placeholder={"شماره موبایل خود را وارد فرمایید."}
                                               inputOnchange={inputOnchange}
                                               property={"phoneNo"}
                                               error={error.phoneNo}/>
                                    <FormButton content={"تایید"}
                                                type={"submit"}/>
                                </form>
                        }


                    </main>
                </React.Fragment>


            }/>

        </React.Fragment>
    );
}

export default Login;
