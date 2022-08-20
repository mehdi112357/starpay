/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';



function SelectForm({inputOnchangeSelect, title, option, required, disabled, property}) {
    return (
        <select onChange={(e) => inputOnchangeSelect(e, property)}
                required={required} disabled={disabled}>
            <option value="" disabled selected hidden>{title}</option>
            {option.map((item,index) => <option key={index} value={item.value}>{item.title}</option>)}
        </select>
    );
}

export default SelectForm;
