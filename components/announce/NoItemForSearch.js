import React from "react";
import {useSelector} from "react-redux";


const NoItemForSearch = () => {

    const searchParam = useSelector(state =>
        state.organisationListReducer.searchResult.searchParam);

    return(
        <div className='flex flex-col w-full items-center mb-36'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 my-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            <p className='text-base	font-bold'>
                {`Sorry – there are no results for your 
                    search "${searchParam}"`}
            </p>
            <p className='text-base	font-bold'>
                Please try again.
            </p>
        </div>
    )
}

export default NoItemForSearch;