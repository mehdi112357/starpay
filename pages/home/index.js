import React from "react";
import HeadTitle from "../../components/head";
import BodyLayout from "../../components/bodyLayout";

const Home = () => {
  const navbarProps = {
    footer: true,
    bg: "#f8f8f8",
    Authenticated: true,
  };

  return (
      <>
        <HeadTitle title='پیام نگار | صفحه اصلی' />
        <BodyLayout navbarProps={navbarProps}>
          <div className="bg-[#F8F8F8] pb-28 pt-20 flex justify-center">
              <p className="text-[40px] text-center mt-4 w-6/12">
                  به سامانه ارسال پیام کوتاه پیام نگار خوش آمدید
              </p>
          </div>
        </BodyLayout>
      </>
  );
}

export default Home;