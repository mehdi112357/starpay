/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../constants/FixVariables';

const emailBox = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: ${Variable.navFontColor};
  border: ${Variable.border};
  border-radius: ${Variable.radius};
  width: 45%;
  padding: 1rem;
  margin: 1rem auto;
  transition: .25s;


  @media (max-width: 999px) {
    flex-direction: column;

  }
  @media (max-width: 768px) {
    width: 90%;

  }

  * {
    text-align: center;
  }

  > * {
    margin: .25rem auto;
  }

  h3 {
    font-size: 1.3rem;
  }
}

h4 {
  font-size: 1rem;
  font-weight: 100;

}

`

function ManagerEmailBox({position, managerName, email}) {

    return (
        <React.Fragment>
            <a css={emailBox} href={`mailto:${email}`}>
                <div>
                    <h3>{position}</h3>
                    <h4>{managerName}</h4>
                </div>
                <h4>{email}</h4>
            </a>
        </React.Fragment>
    );
}

export default ManagerEmailBox;
