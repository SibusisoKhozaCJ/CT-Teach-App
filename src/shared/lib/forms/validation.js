import * as yup from 'yup';

export const publicFormProfile = yup.object().shape({
  userName: yup.string().required("Field user name can't be empty"),
  points: yup.string(),
  joined: yup.string(),
  aboutMe: yup.string(),
  country: yup.string(),
  question: yup.string(),
});

export const privateFormProfile = yup.object().shape({
  firstname: yup.string().required("Field first name can't be empty"),
  lastname: yup.string().required("Field last name can't be empty"),
  email: yup.string(),
  country: yup.string().required("Field country me can't be empty"),
  phone: yup.string(),
  schoolName: yup.string().required("Field school name can't be empty"),
  city: yup.string().required("Field city can't be empty"),
})
