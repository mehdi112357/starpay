import React, { useEffect } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Link from "next/link";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BodyLayout from "../components/bodyLayout";
import HeadTitle from "../components/head";
import Button from "../components/button";
import {useAuthentication} from "../hooks/useAuthenticationReactQueryHook";

const passwordRegExp =
  /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/;
const emailRegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
const loginSchema = Yup.object().shape({
  emailAdrValue: Yup.string()
    .matches(emailRegExp, "نام کاربری وارد شده باید ایمیل باشد")
    .required("نام کاربری را وارد نکرده اید"),
  passwordValue: Yup.string()
    .matches(passwordRegExp, "فرمت کلمه عبور صحیح نمی باشد")
    .required("کلمه عبور را وارد نکرده اید"),
});

const SignIn = () => {

  const [passwordShown, setPasswordShown] = useState(false);


  const navbarProps = {
    bg: "#EBEBEB",
    footer: true,
    Authenticated: false,
  };
  const onSuccess = (response) => {
    // payam haye zamane succese login inja miad
  };
  const onError = (error) => {
    // dar surate khataye login inja action ro mizarim
  };

  const { mutate: mutateAuthentication, isLoading } = useAuthentication(
    onSuccess,
    onError
  );

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };


  const login = (values) => {
    const formData = new FormData();
    formData.append("username", values.emailAdrValue);
    formData.append("password", values.passwordValue);
    mutateAuthentication(formData);
  };

  return (
    <BodyLayout navbarProps={navbarProps}>
      <HeadTitle title='سامانه ارسال پیام کوتاه' />
      <div className="pt-12 pb-20">
        <div className="flex justify-center">
          <h1 className=" text-center lg:text-4xl xs:text-2xl mb-8 break-words w-[28rem] leading-[3.5rem]">
            ورود به سامانه
          </h1>
        </div>
        <Formik
          initialValues={{
            emailAdrValue: "",
            passwordValue: "",
          }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            login(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="flex justify-center ">
                <div className="card my-card lg:w-[40.5rem] xs:w-11/12 bg-base-100 col-start-2 col-span-1">
                  <div className="card-body lg:px-28 pt-10 pb-12">
                    <div className="did-floating-label-content pb-4">
                      <Field
                        name="emailAdrValue"
                        className="did-floating-input text-right"
                        placeholder=" "
                      />
                      <label className="did-floating-label">
                        {" "}
                        نام کاربری{" "}
                      </label>
                      {errors.emailAdrValue && touched.emailAdrValue ? (
                        <div className="text-right text-xs text-[#DA2F24] mt-1 mr-1">
                          {errors.emailAdrValue}
                        </div>
                      ) : null}
                    </div>
                    <div className="did-floating-label-content mt-8 flex justify-end items-end">
                      <input
                        className="did-floating-input text-right"
                        name='passwordValue'
                        type={passwordShown ? "text" : "password"}
                        placeholder=" "
                      />
                      <label className="did-floating-label">
                        کلمه عبور
                      </label>
                      <button
                        className={`absolute left-0 bottom-0 bg-no-repeat w-10 h-8	${
                          passwordShown
                            ? "bg-[url('/icons/eyeOn.svg')]"
                            : "bg-[url('/icons/eyeOff.svg')]"
                        } `}
                        onClick={togglePassword}
                      />
                    </div>
                    <div className="flex mt-4 flex justify-end">
                      <span className="cursor text-[14px] text-black-900  font-bold">
                        <Link href="/forget-password">فراموشی کلمه عبور؟</Link>
                      </span>
                    </div>
                    <div className="flex justify-center">
                      <Button
                        className=" w-32 text-center border  bg-black-900 text-white text-[16px] rounded-full font-bold mb-4 mt-8 relative h-14"
                        isLoading={isLoading}
                      >
                        ورود
                      </Button>
                    </div>

                    <div className="flex justify-center">
                      <span className="cursor text-[14px] font-bold pl-2">
                        <Link href="/sign-up">ثبت نام</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </BodyLayout>
  );
};

export default SignIn;
