import * as Yup from "yup";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import BodyLayout from "../../components/bodyLayout";
import Button from "../../components/button";
import { Field, Form, Formik } from "formik";
import { useRegister } from "../../hooks/useAuthenticationReactQueryHook";
import { toast } from "react-toastify";
import HeadTitle from "../../components/head";

const emailRegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
const passwordRegExp =
  /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/;

const registerSchema = Yup.object().shape({
  firstNameValue: Yup.string().required("نام را وارد نکرده اید"),
  lastNameValue: Yup.string().required("نام خانوادگی را وارد نکرده اید"),
  emailAdrValue: Yup.string()
  .matches(emailRegExp, "ایمیل وارد شده معتبر نیست")
  .required("ایمیل را وارد نکرده اید"),
  passwordValue: Yup.string()
    .matches(passwordRegExp, "فرمت کلمه عبور وارد شده صحیح نیست")
    .required("کلمه عبور را وارد نکرده اید"),
  termsAndConditions: Yup.bool().oneOf(
    [true],
    "شرایط و ضوابط رو نپذیرفته اید"
  ),
});

const SignUp = () => {

  const [confirmSignUpMessage, setConfirmSignUpMessage] = useState(false);

  useEffect(() => {}, [confirmSignUpMessage]);

  const navbarProps = {
    bg: "#EBEBEB",
    footer: true,
    Authenticated: false,
  };

  const onSuccess = (response) => {
    toast.success(response.data.message);
    setConfirmSignUpMessage(true);
  };

  const onError = (error) => {
    if (error.response.data.detail) {
      toast.error(error.response.data.detail);
    } else if (error.response.data.message) {
      toast.error(error.response.data.message);
    }
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const { mutate: mutateRegister, isLoading } = useRegister(onSuccess, onError);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const register = (values) => {
    const formData = new FormData();
    formData.append("first_name", values.firstNameValue);
    formData.append("last_name", values.lastNameValue);
    formData.append("password", values.passwordValue);
    formData.append("email", values.emailAdrValue);
    mutateRegister(formData);
  };

  return (
    <BodyLayout navbarProps={navbarProps}>
      <HeadTitle title='پیام نگار |  ثبت نام' />
      {!confirmSignUpMessage && (
        <div className="auth-page pt-12 pb-20">
          <div className="flex justify-center">
            <h1 className=" text-center lg:text-4xl xs:text-2xl	mb-8 break-words w-[28rem] leading-[3.5rem]">
              ثبت نام در سامانه
            </h1>
          </div>

          <Formik
            initialValues={{
              firstNameValue: "",
              lastNameValue: "",
              emailAdrValue: "",
              passwordValue: "",
              termsAndConditions: false
            }}
            validationSchema={registerSchema}
            onSubmit={(values) => {
              register(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="flex justify-center ">
                  <div className="card my-card lg:w-[40.5rem] xs:w-11/12 bg-base-100 col-start-2 col-span-1">
                    <div className="card-body lg:px-28 pt-10 pb-12">
                      <div className="did-floating-label-content pb-4">
                        <Field
                          name="firstNameValue"
                          className="did-floating-input text-right"
                          placeholder=" "
                        />
                        <label className="did-floating-label">نام</label>
                        {errors.firstNameValue && touched.firstNameValue ? (
                          <div className="text-right text-xs text-[#DA2F24] mt-1 mr-1">
                            {errors.firstNameValue}
                          </div>
                        ) : null}
                      </div>
                      <div className="did-floating-label-content pb-4">
                        <Field
                          name="lastNameValue"
                          className="did-floating-input text-right"
                          placeholder=" "
                        />
                        <label className="did-floating-label">نام خانوادگی</label>
                        {errors.lastNameValue && touched.lastNameValue ? (
                          <div className="text-right text-xs text-[#DA2F24] mt-1 mr-1">
                            {errors.lastNameValue}
                          </div>
                        ) : null}
                      </div>
                      <div className="did-floating-label-content pb-4">
                        <Field
                          name="emailAdrValue"
                          className="did-floating-input"
                          placeholder=" "
                        />
                        <label className="did-floating-label">
                          ایمیل
                        </label>
                        {errors.emailAdrValue && touched.emailAdrValue ? (
                          <div className="text-right text-xs text-[#DA2F24] mt-1 mr-1">
                            {errors.emailAdrValue}
                          </div>
                        ) : null}
                      </div>
                      <div className="did-floating-label-content pb-4 ">
                        <div className="relative">
                          <Field
                            name="passwordValue"
                            type={passwordShown ? "text" : "password"}
                            className="did-floating-input "
                            placeholder=" "
                          />
                          <label className="did-floating-label">
                            کلمه عبور
                          </label>
                          <button
                            className={`absolute right-0 bottom-0 bg-no-repeat w-10 h-8	${
                              passwordShown
                                ? "bg-[url('/icons/eyeOn.svg')]"
                                : "bg-[url('/icons/eyeOff.svg')]"
                            } `}
                            onClick={togglePassword}
                          />
                        </div>
                        {errors.passwordValue && touched.passwordValue ? (
                          <div className="text-right text-xs text-[#DA2F24] mt-1 mr-1">
                            {errors.passwordValue}
                          </div>
                        ) : null}
                      </div>
                      <div className="flex justify-end mt-8">
                        <div className='flex justify-end'>
                          <label>
                            شرایط و ضوابط را پذیرفته ام
                            <Field type="checkbox" name="termsAndConditions" className="mr-2"/>
                          </label>
                          {errors.termsAndConditions && (
                            <div className="text-left text-xs text-[#DA2F24] mt-1 mr-1">
                              {errors.termsAndConditions}
                            </div>
                          )}
                        </div>
                      </div>
                      {/* </Form> */}
                      <div className="flex justify-center">
                        <Button
                          className=" w-32 text-center border  bg-black-900 text-white text-[16px] rounded-full font-bold mb-4 mt-8 relative h-14"
                          isLoading={isLoading}
                        >
                          ثبت نام
                        </Button>
                      </div>
                      <div className="flex justify-center">
                        <span className="cursor text-[14px] font-bold pr-2">
                          <Link href="/">ورود</Link>
                        </span>
                        <span className=" text-[14px] ">
                          قبلا ثبت نام کرده اید؟{" "}
                        </span>

                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>)}
      {confirmSignUpMessage === true && (
          <div className="auth-page h-[calc(100vh-400px)]  place-items-center grid">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-[48px]  text-center">ثبت نام شما انجام شد!</h3>
              <p className="text-[#5c5c5c] mt-4 w-full text-center">
                برای فعالسازی لطفا ایمیل خود را بررسی نمایید.
              </p>
            </div>
          </div>
      )}
    </BodyLayout>
  );
};

export default SignUp;
