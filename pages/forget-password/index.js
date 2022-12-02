import * as Yup from "yup";
import Link from "next/link";
import BodyLayout from "../../components/bodyLayout";
import Button from "../../components/button";
import { Field, Form, Formik } from "formik";
import { useRetrivePassword } from "../../hooks/useAuthenticationReactQueryHook";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useEffect } from "react";
import HeadTitle from "../../components/head";

const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const forgetPasswordSchema = Yup.object().shape({
  emailAdrValue: Yup.string()
    .matches(emailRegExp, "ایمیل وارد شده صحیح نیست")
    .required("ایمیل را وارد نکرده اید"),
});

const RetrivePassword = () => {
  const [confirmPasswordResetMsg, setConfirmPasswordResetMsg] = useState(false);

  useEffect(() => {}, [confirmPasswordResetMsg]);
  const navbarProps = {
    bg: "#EBEBEB",
    footer: true,
    Authenticated: false,
  };

  const onSuccess = (response) => {
    toast.success(response.data.message);
    setConfirmPasswordResetMsg(true);
  };

  const onError = (error) => {
    if (error.response.data.detail) {
      toast.error(error.response.data.detail);
    } else if (error.response.data.message) {
      toast.error(error.response.data.message);
    }
  };

  const { mutate: mutateRetrivePassword, isLoading } = useRetrivePassword(
    onSuccess,
    onError
  );

  const retrivePassword = (values) => {
    const formData = new FormData();
    formData.append("email", values.emailAdrValue);
    mutateRetrivePassword(formData);
  };


  return (
    <BodyLayout navbarProps={navbarProps}>
      <HeadTitle title='پیام نگار | فراموشی کلمه عبور' />
      {confirmPasswordResetMsg === false && (
        <div className="auth-page pt-12 pb-20">
          <div className="flex justify-center">
            <h1 className=" text-center lg:text-5xl xs:text-2xl	mb-8 break-words w-[28rem] leading-[3.5rem]">
              فراموشی کلمه عبور
            </h1>
          </div>
          <div className="flex justify-center mb-8">
            <p className="w-[26.5rem] text-center text-[16px] text-[#333]">
              لطفا ایمیل خود را وارد نمایید تا لینک بازیابی کلمه عبور برای شما ارسال شود
            </p>
          </div>
          <div className="flex justify-center ">
            <div className="card my-card lg:w-[40.5rem] xs:w-11/12 bg-base-100 col-start-2 col-span-1">
              <div className="card-body lg:px-28 pt-10 pb-12">
                <Formik
                  initialValues={{
                    emailAdrValue: "",
                  }}
                  validationSchema={forgetPasswordSchema}
                  onSubmit={(values) => {
                    retrivePassword(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="did-floating-label-content pb-4">
                        <Field
                          name="emailAdrValue"
                          className="did-floating-input"
                          placeholder=" "
                        />
                        <label className="did-floating-label text-right">
                          ایمیل
                        </label>
                        {errors.emailAdrValue && touched.emailAdrValue ? (
                          <div className="text-left text-xs text-[#DA2F24] mt-1 mr-1">
                            {errors.emailAdrValue}
                          </div>
                        ) : null}
                      </div>
                      <div className="flex justify-center">
                        <Button
                          className=" w-32 text-center border  bg-black-900 text-white text-[16px] rounded-full font-bold mb-4 mt-8 relative h-14"
                          isLoading={isLoading}
                        >
                          تایید
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>

                <p className="flex justify-center text-[14px] font-bold">
                  <Link href="/" className="cursor">
                    بازگشت به صفحه ورود
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {confirmPasswordResetMsg === true && (
        <div className="auth-page h-[calc(100vh-400px)]  place-items-center grid">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[48px]  text-center">بازیابی کلمه عبور انجام شد</h3>
            <p className="text-[#5c5c5c] mt-4 w-full text-center">
              لطفا ایمیل کاربری خود را بررسی نمایید
            </p>
          </div>
        </div>
      )}
    </BodyLayout>
  );
};

export default RetrivePassword;
