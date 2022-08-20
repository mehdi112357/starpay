/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */
import React from "react";
import {BrowserRouter, Switch} from 'react-router-dom';
import Loading from "../Containers/Loading";

function Routes() {
    const Home = React.lazy(() =>
        import('../../pages'));
    const ContactUs = React.lazy(() =>
        import('../../pages/contactUs'));
    const RequestGateway = React.lazy(() =>
        import('../../pages/requestGateway'));
    const HeaderAndFooter = React.lazy(() =>
        import('./../HOC/HeaderAndFooter'));
    const AboutUs = React.lazy(() =>
        import('../../pages/aboutUs'));
    const Faq = React.lazy(() =>
        import('../../pages/faq'));
    const NotFound = React.lazy(() =>
        import('../../pages/404'));


    return (
        <React.Fragment>
            <BrowserRouter>
                <React.Suspense fallback={<Loading/>}>
                    <Switch>
                        <HeaderAndFooter exact path="/" component={Home}/>
                        <HeaderAndFooter path="/ContactUs" component={ContactUs}/>
                        <HeaderAndFooter path="/RequestGateway" component={RequestGateway}/>
                        <HeaderAndFooter path="/AboutUs" component={AboutUs}/>
                        <HeaderAndFooter path="/Faq" component={FAQ}/>
                        <HeaderAndFooter component={NotFound}/>
                    </Switch>
                </React.Suspense>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default Routes;
