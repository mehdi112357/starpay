/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../constants/FixVariables';
import DatePicker from "react-datepicker2";
import moment from "moment-jalaali"

const datePickerInputContainer = css`
  display: flex;
  flex-direction: column;
`
const errorContext = css`
  width: 100%;
  color: ${Variable.fontColorError};
  font-size: .7rem;
  margin-top: .5rem;
`
const datePickerInput = (error) => css`
  padding: 1rem;
  outline: none;
  border: ${(error === "" || error === undefined) ? `${Variable.border}` : `${Variable.borderError}`};
  transition: all .5s;
  border-radius: ${Variable.radius};
  width: 100%;

  &:focus {
    box-shadow: ${Variable.boxShadow};
    border: ${(error === "" || error === undefined) ? `${Variable.activeBorder}` : `${Variable.borderError}`};
  }
  `
const datePicker = css`
  border: none;
  outline: none;
  text-align: right;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
  font-size: .9rem;
  &::placeholder {
    color: ${Variable.placeholderColor};
    font-size: ${Variable.placeholderFontSize};
  }

`

function FormInput({placeholder, inputOnchange, property, error}) {
    return (
        <div css={datePickerInputContainer}>
            <div css={datePickerInput(error)}>
                <DatePicker
                    onChange={e =>inputOnchange(moment(e ).format('jYYYY/jMM/jDD'),property) }
                    isGregorian={false}
                    timePicker={false}
                    // value={date}
                    css={datePicker}
                    placeholder={placeholder}

                />
            </div>
            {(error === "" || undefined) ? null : <span css={errorContext}>{error}</span>}
        </div>
    );
}

export default FormInput;
