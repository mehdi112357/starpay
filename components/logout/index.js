import React from 'react';
import {useRouter} from 'next/router';
import Button from "../button";
import {setUserInfoAction} from "../../redux/authentication/authenticationAction";
import {useDispatch} from "react-redux";


const LogoutComponent = () => {

    const router = useRouter();
    const dispatch = useDispatch();

    const logOutFunction = async () => {
        await sessionStorage.clear();
        await dispatch(
            setUserInfoAction({
                user_id: "",
                first_name: "",
                last_name: "",
                email: "",
                logged: false
            })
        );
        router.push('/');
    }

    return(
        <div className="card w-full py-20 bg-base-100 rounded-lg shadow-none border border-[#E2E2E2] ml-5 mb-6 xs:ml-0">
            <div className='flex flex-col items-center justify-center'>
                <p className='my-10 text-xl text-black'>برای خروج مطمئن هستید</p>
                <Button onClick={() => logOutFunction()}
                        className="btn btn-outline btn-error">خروج</Button>
            </div>
        </div>
    )
}

export default LogoutComponent;