import Image from "next/image";
import Link from "next/link";
import { useEffect,useState } from "react";

const NavBar = () => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  useEffect(() => {
    setUserAuthenticated(false)
  }, []);

  return (
    <div className={`navbar lg:py-2.5 lg:not-sr-only xs:sr-only bg-indigo-900`}>
      <div className="flex-1 pl-16 flex justify-start">
        <ul className="flex w-full justify-start align-middle ">
          {userAuthenticated === true && (
            <li className=" items-center mr-6 font-bold flex">
              <span>
                <Image
                  src="/icons/user.svg"
                  width={24}
                  height={24}
                  alt="linkedin"
                />
              </span>
              <Link href="/my-account">
                <span className="ml-2 cursor-pointer">حساب کاربری</span>
              </Link>
            </li>
          )}
          {userAuthenticated === false && (
            <>
              <li className="flex items-center pb-3">
                <Link href="/sign-up">
                  <button className="bg-orange4 pt-2 pb-2 pr-4 pl-4 border mt-4 bg-[#f8f8f8] text-black-900 text-[14px] rounded-full font-bold">
                    ثبت نام
                  </button>
                </Link>
              </li>
              <li className="grid items-center ml-6 text-slate-200">
                <Link href="/">ورود</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="flex-1 pr-16 flex justify-end items-center">
        <div className="grid items-center mr-6 text-slate-300">
          <Link href="/">تعرفه ها</Link>
        </div>
        <div className="grid items-center mr-12 ml-6 text-slate-300">
          <Link className="text-[14px] text-[#333]" href="/">
            درباره سامانه
          </Link>
        </div>
        <div className='flex items-center'>
          <div className="ml-4 text-2xl text-white flex items-center mr-2">
            <Link href="/home" className='mr-10'>
              پیام نگار
            </Link>
          </div>
          <Image
              src='/images/mainLogo.png'
              width={30}
              height={30}
              alt='' />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
