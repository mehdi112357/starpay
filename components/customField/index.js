import {Field} from "formik";

export default function CustomField({defaultValue, label, name, errors, touched}) {
    return (
        <div className="did-floating-label-content pb-4">
            <Field
                defaultValue={defaultValue}
                name={name}
                className="did-floating-input "
                placeholder=" "
            />
            <label className="did-floating-label "> {label} </label>
            {errors && touched && touched ? (
                <div className="text-right text-xs text-red-600 mt-1 mr-1">
                    {errors}
                </div>
            ) : null}
        </div>
    );
}
