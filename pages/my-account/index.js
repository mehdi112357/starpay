import BodyLayout from "../../components/bodyLayout";
import VerticalTab from "../../components/verticalTabs";
import {TabPanel} from "react-tabs";
import LogoutComponent from "../../components/logout";
import HeadTitle from "../../components/head";
import DashboardLayout from "../../components/DashboardLayout";
import {useSelector} from "react-redux";

const MyAccount = () => {

    const tabItemsHeader = [
        {
            name: "منوی شماره 1",
            style: "bg-[url('/icons/Organisation.svg')] bg-no-repeat pl-8",
        },
        {
            name: "منوی شماره 2",
            style: "bg-[url('/icons/account.svg')] bg-no-repeat pl-8",
        },
        {
            name: "خروج",
            style: "bg-[url('/icons/logOut.svg')] bg-no-repeat pl-8",
        },
    ];

    const navbarProps = {
        footer: true,
        bg: "#f5f5f5",
        Authenticated: true,
    };

    return (
        <DashboardLayout>
            <BodyLayout navbarProps={navbarProps}>
                <HeadTitle title='پیام نگار | داشبورد'/>
                <div className="mt-[5rem] xl:px-14 pb-20 xs:px-2">
                    <VerticalTab tabItemsHeader={tabItemsHeader}>
                        <TabPanel>
                            <div className="panel-content xl:mt-0 xs:mt-10">
                                <h3>منوی شماره 1</h3>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="panel-content xl:mt-0 xs:mt-10">
                                <h3>منوی شماره 2</h3>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="panel-content xl:mt-0 xs:mt-10">
                                <LogoutComponent/>
                            </div>
                        </TabPanel>
                    </VerticalTab>
                </div>
            </BodyLayout>
        </DashboardLayout>
    );
};

export default MyAccount;
