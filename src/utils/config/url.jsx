const AUTH_PREFIX = "/auth";
const USER_PREFIX = "/user";
const SPECIALITY_PREFIX = "/speciality";
const QUIZ_PREFIX = "/quiz";

export const LOCAL_DRIVE = "http://10.0.2.2:3333/uploads/";

export const API_ACCESS = {
  login: AUTH_PREFIX + "/login/admin",
  register: AUTH_PREFIX + "/register/admin",
  userAdmin: USER_PREFIX + "/admin",
  specialityDefault: SPECIALITY_PREFIX + "/",
  getSubSpeciality: SPECIALITY_PREFIX + "/sub",
  subSpecialityDefault: SPECIALITY_PREFIX + "/sub",
  quizDefault: QUIZ_PREFIX,
  quizQuestion: QUIZ_PREFIX + "/questions",
};
