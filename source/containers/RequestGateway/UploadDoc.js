/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */
import React, {useState} from "react";
import {jsx, css} from '@emotion/react'
import FormButton from "../../component/buttons/FormButton";
import UploadDocValidation from "./UploadDocValidation";
import FileInput from "../../component/inputs/FileInput";
import PageHint from "../../component/PageHint";

const formUpload = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const uploadContainer = css`
  display: flex;
  flex-direction: row;
  margin: 50px auto;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }

`


function UploadDoc({handleNext}) {
    const [upload, setUpload] = useState({
        nationalCard: "",
        birthCertificate: "",

    })
    const [error, setError] = useState({
        nationalCard: "",
        birthCertificate: "",

    })

    const inputOnchange = (e, property) => {
        setUpload({
            ...upload,
            [property]: e.target.files[0],
        })
    }

    const formUploadHandler = (e) => {
        e.preventDefault()
        UploadDocValidation(upload)
            .then((resolve) => handleNext(resolve))
            .catch((err) => setError(err))
    }
    return (
        <div>
            <PageHint title={"بارگذاری مدارک"} description={"لطفا از فرمت های JPG و PNG استفاده فرمایید."}/>
            <form onSubmit={formUploadHandler} css={formUpload} action="" method="">
                <div css={uploadContainer}>
                    <FileInput title={"تصویر روی کارت ملی"} inputOnchange={inputOnchange} property={"nationalCard"}
                               photo={"/img/Imageupload1.svg"}
                               altImage={"nationalCard"}
                               error={error.nationalCard}/>
                    <FileInput title={"تصویر صفحه اول شناسنامه"} inputOnchange={inputOnchange}
                               property={"birthCertificate"}
                               photo={"/img/Imageupload2.svg"}
                               altImage={"birthCertificate"}
                               error={error.birthCertificate}/>
                </div>
                <FormButton content={"ثبت اطلاعات"} type={"submit"}/>
            </form>

        </div>
    );
}

export default UploadDoc;
