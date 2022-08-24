/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */
import React, {useState} from "react";
import {jsx, css} from '@emotion/react'
import FormInput from "../../component/inputs/FormInput";
import FormButton from "../../component/buttons/FormButton";
import IdentifyingValidation from "./IdentifyingValidation" ;
import PageHint from "../../component/PageHint";
import DatePicker from "../../component/inputs/DatePicker";


const identifying = css`
  button {
    margin-top: 4rem;
    width: 8rem;
  }
`
const inputs = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 20px auto;

  > * {
    width: 45%;
    margin: .5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    > * {
      width: 90%;
    }
  }
`

function Identifying({handleNext}) {
    const [identify, setIdentify] = useState({
        firstName: "",
        lastName: "",
        nationalId: "",
        birthDay: "",
        enFirstName: "",
        enLastName: "",
        fatherName: "",
        enFatherName: "",
        mobile: "",
        phone: "",
    })
    let initialStateError = {
        firstName: "",
        lastName: "",
        nationalId: "",
        birthDay: "",
        enFirstName: "",
        enLastName: "",
        fatherName: "",
        enFatherName: "",
        mobile: "",
        phone: "",
    }
    const [error, setError] = useState(initialStateError)
    const inputOnchange = (value, property) => {
        setIdentify({
            ...identify,
            [property]: value,
        })
    }
    const formIdentifyHandler = (e) => {
        e.preventDefault()
        IdentifyingValidation(identify)
            .then((resolve) => handleNext(resolve))
            .catch((err) => setError(err))
    }
    return (
        <div css={identifying}>
            <PageHint title={"اطلاعات اولیه"} description={"لطفا اطلاعات را صحیح وارد نمایید."}/>
            <form onSubmit={formIdentifyHandler} action="" method="" css={inputs}>
                <FormInput type={"text"} placeholder={"نام به فارسی"} inputOnchange={inputOnchange}
                           property={"firstName"} error={error.firstName}/>
                <FormInput type={"text"} placeholder={"نام خانوادگی به فارسی"} inputOnchange={inputOnchange}
                           property={"lastName"} error={error.lastName}/>
                <FormInput type={"text"} placeholder={"کد ملی"} inputOnchange={inputOnchange}
                           property={"nationalId"} error={error.nationalId}/>
                <DatePicker placeholder={"تاریخ تولد"} inputOnchange={inputOnchange}
                            property={"birthDay"} error={error.birthDay}/>
                <FormInput type={"text"} placeholder={"نام به انگلیسی"} inputOnchange={inputOnchange}
                           property={"enFirstName"} error={error.enFirstName}/>
                <FormInput type={"text"} placeholder={"نام خانوادگی به انگلیسی"} inputOnchange={inputOnchange}
                           property={"enLastName"} error={error.enLastName}/>
                <FormInput type={"text"} placeholder={"نام پدر به فارسی"} inputOnchange={inputOnchange}
                           property={"fatherName"} error={error.fatherName}/>
                <FormInput type={"text"} placeholder={"نام پدر به انگلیسی"} inputOnchange={inputOnchange}
                           property={"enFatherName"} error={error.enFatherName}/>
                <FormInput type={"text"} placeholder={"شماره موبایل مانند ...0912123"} inputOnchange={inputOnchange}
                           property={"mobile"} error={error.mobile}/>
                <FormInput type={"text"} placeholder={"شماره تلفن ثابت با پیش شماره مانند ...021444"} inputOnchange={inputOnchange}
                           property={"phone"} error={error.phone}/>
                <FormButton content={"ثبت اطلاعات"} type={"submit"}/>
            </form>
        </div>
    );
}

export default Identifying;
