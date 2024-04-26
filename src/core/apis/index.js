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

export const getStudentProfile = async (id) => {
  const res = await instance.get(
    `${BASE_URL}/api/accounts/get_user?user_id=${id}`
  );
  return res;
};

export const UpdateStudentAPI = async (values) => {
  const res = await instance.post(
    `${BASE_URL}/api/accounts/update_user`,
    values
  );
  return res;
};

export const getCourses = async () => {
  const res = await instance.get(`${BASE_URL}/api/courses/get_courses_list`);
  return res;
};
export const RegisterModuleAPI = async (values) => {
  const res = await instance.post(
    `${BASE_URL}/api/courses/add_student_module_register`,
    values
  );
  return res;
};
