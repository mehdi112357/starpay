import NavBar from "../navBar";
import { ToastContainer } from "react-toastify";
import Footer from "../footer";
import MobileMenu from "../mobileMenu";
import Link from "next/link";

const BodyLayout = ({ children, navbarProps }) => {
  return (
    <>
      <div className="bg-black" style={{ backgroundColor: navbarProps.bg }}>
        <NavBar navbarProps={navbarProps} />
        <div className="lg:sr-only xs:not-sr-only">
          <MobileMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
            <Link href="/" className="pt-[12px] ml-4">
                پیام نگار
            </Link>
        </div>
        <div className="">{children}</div>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        ltr
        pauseOnFocusLoss
        draggable
        pauseOnHover
        hideProgressBar
        theme="colored"
      />
      {navbarProps && navbarProps.footer !== false && <Footer />}
    </>
  );
};

export default BodyLayout;
