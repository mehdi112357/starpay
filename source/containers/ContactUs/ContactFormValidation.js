import validator from "validator/es";

const ContactFormValidation = (contactUsInfo) => {

    return new Promise((resolve, reject) => {

        let errors = {};

        if (contactUsInfo.name === "" || contactUsInfo.name === undefined) {
            errors['name'] = 'لطفا نام و نام خانوادگی خود را وارد فرمایید.';
            reject(errors);
        }
        if (contactUsInfo.phone === "" || contactUsInfo.phone === undefined) {
            errors['phone'] = 'لطفا شماره تماس خود را وارد فرمایید.';
            reject(errors);
        }else if (!validator.isMobilePhone(contactUsInfo.phone,'fa-IR')) {
            errors['phone'] = 'شماره موبایل نا معتبر است.';
            reject(errors);
        }
        if (contactUsInfo.message === "" || contactUsInfo.message === undefined) {
            errors['message'] = 'لطفا پیغام خود را وارد فرمایید.';
            reject(errors);
        }
        resolve(true)
    })
}

export default ContactFormValidation;