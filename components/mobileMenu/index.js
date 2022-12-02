/* eslint-disable @next/next/no-html-link-for-pages */
import {slide as Menu} from "react-burger-menu";
import Link from "next/link";
import Image from "next/image";
import Button from "../button";

const MobileMenu = () => {
    return (
        <Menu width={"100%"} right>
            <Link href="">
                پیام نگار
            </Link>
            <li className="border-b border-[#E2E2E2] pb-5">
                <Link href='/' className="menu-item">
                    درباره ما
                </Link>
            </li>
            <li className="border-b border-[#E2E2E2] pb-5">
                <Link href='/' id="Organisation" className="menu-item">
                    تعرفه ها
                </Link>
            </li>
                <div className="fixed w-full left-0 bottom-0 flex">
                    <Link href="/sign-up">
                        <Button
                            className=" bg-orange4 pt-4 pb-4 pr-7 pl-7 text-black-900  mt-4 bg-[#F5F5F5] border rounded-full font-extrabold text-[13px]">
                            ثبت نام
                        </Button>
                    </Link>
                    <li className="text-[13px] font-bold ml-5 mt-4">
                        <Link href="/">ورود</Link>
                    </li>
                </div>
        </Menu>
);
};
export default MobileMenu;
