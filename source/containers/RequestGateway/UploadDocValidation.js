const UploadDocValidation = (upload) => {
    const imageCheckValidation = /[\/.](jpg|jpeg|png)$/i

    return new Promise((resolve, reject) => {

        let errors = {};
        if (upload.nationalCard === "" || upload.nationalCard === undefined) {
            errors['nationalCard'] = 'لطفا عکس کارت ملی خود را بارگذاری فرمایید.';
            reject(errors);
        } else if (!imageCheckValidation.test(upload.nationalCard.type)) {
            errors['nationalCard'] = 'فایل شما باید فرمت jpg یا png باشد';
            reject(errors);
        }
        if (upload.birthCertificate === "" || upload.birthCertificate === undefined) {
            errors['birthCertificate'] = 'لطفا عکس شناسنامه خود را بارگذاری فرمایید.';
            reject(errors);
        } else if (!imageCheckValidation.test(upload.birthCertificate.type)) {
            errors['birthCertificate'] = 'فایل شما باید فرمت jpg یا png باشد';
            reject(errors);
        }
        resolve(true)
    })
}

export default UploadDocValidation;