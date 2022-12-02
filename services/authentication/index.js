const APP_URL = process.env.APP_URL;

export const userLoginApi = () => APP_URL + "/login/";

export const userRegisterApi = () => APP_URL + "/register/";

export const userRetriveApi = () => APP_URL + "/forgot-password/";
