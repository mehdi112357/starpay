import React from 'react';
import Head from "next/head";


const HeadTitle = ({title}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content=""/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    )
}

export default HeadTitle;