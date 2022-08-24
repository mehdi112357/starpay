/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../constants/FixVariables';
import ManagerEmailBox from "./ManagerEmailBox";

const emailAddress = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: inherit;
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }

  > *:hover {
    box-shadow: ${Variable.boxShadow};
  }
`

function ContactManagers() {

    return (
        <React.Fragment>
            <div css={emailAddress}>
                <ManagerEmailBox href={"mailto:Mj.sadooghi@setareaval.ir"} position={"مدیریت عامل"}
                                 managerName={"جناب آقای صدوقی"} email={"mj.sadooghi@setareaval.ir"}/>
                <ManagerEmailBox position={"معاونت فروش و بازاریابی"}
                                 managerName={"جناب آقای قربانی"} email={"m.ghorbani@setareaval.ir"}/>
                <ManagerEmailBox position={"معاونت سرمایه انسانی "}
                                 managerName={"جناب آقای کربلایی"} email={"j.karbalaii@setareaval.ir"}/>
                <ManagerEmailBox position={"معاونت مالی و اداری"}
                                 managerName={"جناب آقای باغشاهی"} email={"s.baghshahi@setareaval.ir"}/>
                <ManagerEmailBox position={"مدیریت روابط عمومی"}
                                 managerName={"جناب آقای صالحی‌فرد"} email={"h.salehifard@setareaval.ir"}/>
            </div>
        </React.Fragment>
    );
}

export default ContactManagers;
