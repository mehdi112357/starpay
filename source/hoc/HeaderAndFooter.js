import React from "react";
import News from "../containers/HOCHeader/News";
import Header from "../containers/HOCHeader/Header";
import Footer from "../containers/HOCHeader/Footer";


export default function HeaderAndFooter({content}) {

    return (
        <main>
            <News/>
            <Header/>
            {content}
            <Footer/>
        </main>
    )
}
