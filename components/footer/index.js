import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="pt-20 lg:pl-16 lg:pr-16 xs:px-4  lg:pb-20 xs:pb-12 lg:divide-y divide-[#EBEBEB] bg-white">
      <div className="flex flex-row-reverse justify-between lg:grid-cols-3 xs:grid-cols-2 gap-2 pb-10">
        <div className='flex items-center'>
          <div className="ml-4 text-xl text-slate-700 flex items-center mr-2">
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
        <div className="flex space-x-11 justify-center xs:hidden lg:flex">
          <Link href="/">درباره سامانه</Link>
          <Link href="/">تعرفه ها</Link>
          <Link href="/">حساب کاربری</Link>
        </div>
        <div className="flex justify-end">
          <a href="" className="mr-8">
            <Image
              src="/icons/linkedin.svg"
              width={22}
              height={21}
              alt="linkedin"
            />
          </a>
          <a href="">
            <Image
              src="/icons/facebook.svg"
              width={24}
              height={23}
              alt="facebook"
            />
          </a>
        </div>
      </div>
      <div className=" lg:hidden">
        <a className="block mb-[24px] mt-[24px]" href="">
          درباره سامانه
        </a>
        <a className="block mb-[24px]" href="">
          تعرفه ها
        </a>
        <a className="block mb-[24px]" href="">
          حساب کاربری
        </a>
      </div>
      <div className="grid lg:grid-cols-2 xs:grid-cols-1 pt-4">
        <div className="xs:flex xs:justify-left">
          <p className="lg:text-14px xs:text-12px font-bold">
            طراحی و توسعه | ستاره اول
          </p>
        </div>
        <div className="lg:flex justify-end xs:hidden">
          <p className="text-14px">حریم خصوصی</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
