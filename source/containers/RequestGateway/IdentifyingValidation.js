import validator from "validator/es";



const IdentifyingValidation = (identify) => {
    const farsiCheckRegex = /^([\u0600-\u06FF]+\s?)+$/
    const englishCheckRegex = /^[a-zA-Z]+$/
    const numberCheckRegex = /^[0-9\b]+$/
    const fixPhoneCheckerRegex = /^\d{11}$/


    // const dateCheckRegex = /^[1-4]\d{3}\/((0[1-6]\/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))\/(30|31|([1-2][0-9])|(0[1-9]))))$/

    function isValidIranianNationalCode(input) {
        if (!/^\d{10}$/.test(input)) return false;
        const check = +input[9];
        const sum = input.split('').slice(0, 9).reduce((acc, x, i) => acc + +x * (10 - i), 0) % 11;
        return sum < 2 ? check === sum : check + sum === 11;
    }


    // console.log()
    return new Promise((resolve, reject) => {

        let errors = {};

        if (identify.firstName === "" || identify.firstName === undefined) {
            errors['firstName'] = 'لطفا نام خود را به فارسی وارد فرمایید';
            reject(errors);
        } else if (!farsiCheckRegex.test(identify.firstName)) {
            errors['firstName'] = 'لطفا نام خود را به فارسی وارد فرمایید';
            reject(errors);
        }
        if (identify.lastName === "" || identify.lastName === undefined) {
            errors['lastName'] = 'لطفا نام خانوادگی خود را به فارسی وارد فرمایید';
            reject(errors);
        } else if (!farsiCheckRegex.test(identify.lastName)) {
            errors['lastName'] = 'لطفا نام خانوادگی خود را به فارسی وارد فرمایید';
            reject(errors);
        }
        if (identify.fatherName === "" || identify.fatherName === undefined) {
            errors['fatherName'] = '"لطفا نام پدر خود را به فارسی وارد فرمایید';
            reject(errors);
        } else if (!farsiCheckRegex.test(identify.fatherName)) {
            errors['fatherName'] = 'لطفا نام پدر خود را به فارسی وارد فرمایید';
            reject(errors);
        }
        if (identify.enFirstName === "" || identify.enFirstName === undefined) {
            errors['enFirstName'] = 'لطفا نام خود را به انگلیسی وارد فرمایید';
            reject(errors);
        } else if (!englishCheckRegex.test(identify.enFirstName)) {
            errors['enFirstName'] = 'لطفا نام خود را به انگلیسی وارد فرمایید';
            reject(errors);
        }
        if (identify.enLastName === "" || identify.enLastName === undefined) {
            errors['enLastName'] = 'لطفا نام خانوادگی خود را به انگلیسی وارد فرمایید';
            reject(errors);
        } else if (!englishCheckRegex.test(identify.enLastName)) {
            errors['enLastName'] = 'لطفا نام خانوادگی خود را به انگلیسی وارد فرمایید';
            reject(errors);
        }
        if (identify.enFatherName === "" || identify.enFatherName === undefined) {
            errors['enFatherName'] = 'لطفا نام پدر خود را به انگلیسی وارد فرمایید';
            reject(errors);
        } else if (!englishCheckRegex.test(identify.enFatherName)) {
            errors['enFatherName'] = 'لطفا نام پدر خود را به انگلیسی وارد فرمایید';
            reject(errors);
        }
        if (identify.nationalId === "" || identify.nationalId === undefined) {
            errors['nationalId'] = 'لطفا کد ملی خود را وارد فرمایید';
            reject(errors);
        } else if (!isValidIranianNationalCode(identify.nationalId)) {
            errors['nationalId'] = 'کد ملی وارد شده نا معتبر است';
            reject(errors);
        }
        if (identify.birthDay === "" || identify.birthDay === undefined) {
            errors['birthDay'] = 'لطفا تاریخ تولد خود را وارد فرمایید';
            reject(errors);
        }
        if (identify.mobile === "" || identify.mobile === undefined) {
            errors['mobile'] = 'لطفا شماره موبایل خود را وارد فرمایید';
            reject(errors);
        } else if (!validator.isMobilePhone(identify.mobile,'fa-IR')) {
            errors['mobile'] = 'شماره موبایل نا معتبر است.';
            reject(errors);
        }
        if (identify.phone === "" || identify.phone === undefined) {
            errors['phone'] = 'لطفا شماره تلفن ثابت با پیش شماره را وارد فرمایید.';
            reject(errors);
        } else if (!fixPhoneCheckerRegex.test(identify.phone)) {
            errors['phone'] = 'شماره تلفن نا معتبر است.';
            reject(errors);
        }
        resolve(true)
    })
}

export default IdentifyingValidation;