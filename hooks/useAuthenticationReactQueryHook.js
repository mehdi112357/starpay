import { useQuery, useMutation } from "react-query";
import axios from "axios";
import {
  userLoginApi,
  userRegisterApi,
  userRetriveApi,
  userResetPasswordApi,
  userActivationApi,
} from "../services/authentication";

const fetchAuthentication = (formData) => {
  return axios.post(userLoginApi(), formData);
};

const fetchRegister = (formData) => {
  return axios.post(userRegisterApi(), formData, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("generalToken")}`,
    },
  });
};

const fetchRetrivePassword = (formData) => {
  return axios.post(userRetriveApi(), formData, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("generalToken")}`,
    },
  });
};

const fetchResetPassword = ({ formData, uidb64, token }) => {
  return axios.post(userResetPasswordApi({ uidb64, token }), formData, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("generalToken")}`,
    },
  });
};

const fetchActivationUser = ({uidb64, token}) => {
  return axios.get(userActivationApi({ uidb64, token }), {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("generalToken")}`,
    },
  })
};

/////////////////////////////////////////////

export const useAuthentication = (onSuccess, onError) => {
  return useMutation(fetchAuthentication, {
    onSuccess,
    onError,
  });
};

export const useRegister = (onSuccess, onError) => {
  return useMutation(fetchRegister, {
    onSuccess,
    onError,
  });
};

export const useRetrivePassword = (onSuccess, onError) => {
  return useMutation(fetchRetrivePassword, {
    onSuccess,
    onError,
  });
};
