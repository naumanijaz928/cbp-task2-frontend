import instance from "../network/interceptor";
const BASE_URL = import.meta.env.VITE_API_KEY;
export const LoginAPI = async (values) => {
  const res = await instance.post(`${BASE_URL}/login`, values);
  return res;
};
export const RegisterStudentAPI = async (values) => {
  const res = await instance.post(`${BASE_URL}/api/accounts/add_user`, values);
  return res;
};
