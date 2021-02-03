import * as yup from 'yup';
import {phoneRegexp} from '../regExp';

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
  phone: yup.string().matches(phoneRegexp, 'Phone number is not valid. +(123) - 456-78-90'),
  schoolName: yup.string().required("Field school name can't be empty"),
  city: yup.string().required("Field city can't be empty"),
})
