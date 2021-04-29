import React from 'react'
import Calendar from '../../../assets/icons/profile-icon/calendar.png';
import Code from '../../../assets/icons/profile-icon/code.png';
import Country from '../../../assets/icons/profile-icon/country.png';
import Bachlor from '../../../assets/icons/profile-icon/bachlor.png';
import Twitter from '../../../assets/icons/profile-icon/twitter.png';
import Tiktok from '../../../assets/icons/profile-icon/tiktok.png';
import Instagram from '../../../assets/icons/profile-icon/instagram.png';
import Discard from '../../../assets/icons/profile-icon/discard.png';
import atRate from '../../../assets/icons/profile-icon/atRate.png'
export const formPrivateControlsProfilePage = {
  firstname: {
    label: 'First Name',
    className: 'controlInputPrivateForm',
    inputActiveClassName: 'activeControlInput',
    type: 'input'
  },
  lastname: {
    label: 'Last Name',
    className: 'controlInputPrivateForm',
    inputActiveClassName: 'activeControlTextarea',
    type: 'input'
  },
  email: {
    label: 'Email',
    optional: true,
    className: 'controlInputPrivateForm',
    inputActiveClassName: 'activeControlTextarea',
    type: 'input'
  },
  phone: {
    label: 'Phone',
    optional: true,
    className: 'controlInputPrivateForm',
    inputActiveClassName: 'activeControlTextarea',
    type: 'input'
  },
  schoolName: {
    label: 'School Name',
    className: 'controlInputPrivateForm',
    inputActiveClassName: 'activeControlTextarea',
    type: 'input'
  },
  city: {
    label: 'City',
    className: 'controlInputPrivateForm',
    inputActiveClassName: 'activeControlTextarea',
    type: 'input'
  }
};

export const formPublicControlsProfilePage = {
  userName: {
    label: 'ME:',
    className: 'userName',
    inputActiveClassName: 'activeControlInput',
    hiddenClass: 'controlLabelHidden',
    errorMessage: 'Can\'t be empty.',
    type: 'input',
    placeholder:'username'
  },
  atRate: {
    label: <img src={atRate} width="21px" />,
    className: 'userName',
    inputActiveClassName: 'activeControlInput',
    hiddenClass: 'controlLabelHidden',
    errorMessage: 'Can\'t be empty.',
    type: 'input',
    placeholder:'username'
  },
  Date: {
    label: <img src={Calendar} width="21px" />,
    className: 'userName',
    inputActiveClassName: 'activeControlInput',
    hiddenClass: 'controlLabelHidden',
    errorMessage: 'Can\'t be empty.',
    type: 'input',
    placeholder:'Date Joined'
  },
  Bio: {
    label: 'Bio:',
    className: 'Descrption',
    inputActiveClassName: 'activeControlTextarea',
    hiddenClass: 'controlLabelHidden',
    errorMessage: 'Can\'t be empty.',
    type: 'textarea',
    placeholder:'I like short giraffes and abnormally large icecream cones.'
  },
  Code: {
    label: <img src={Code} width="21px" />,
    className: 'Descrption',
    inputActiveClassName: 'activeControlTextarea',
    hiddenClass: 'controlLabelHidden',
    errorMessage: 'Can\'t be empty.',
    type: 'textarea',
    placeholder:'Why are you learning to code? Or what do you hope to gain from it?'
  },
  Country: {
    label: <img src={Country} width="21px" />,
    className: 'userName',
    inputActiveClassName: 'activeControlInput',
    hiddenClass: 'controlLabelHidden',
    errorMessage: 'Can\'t be empty.',
    type: 'input',
    placeholder:'What country are you in?'
  },
  School: {
    label: <img src={Bachlor} width="21px" />,
    className: 'userName',
    inputActiveClassName: 'activeControlInput',
    hiddenClass: 'controlLabelHidden',
    errorMessage: 'Can\'t be empty.',
    type: 'input',
    placeholder:'Part of a school, org or club ?'
  },
  twitter: {
    label: <img src={Twitter} width="21px"/>,
    className: 'userName',
    inputActiveClassName: 'activeControlInput',
    hiddenClass: 'controlLabelHidden',
    errorMessage: 'Can\'t be empty.',
    type: 'input',
    placeholder:'Add your twitter handle here'
  },
  Tiktok: {
    label: <img src={Tiktok} width="21px"/>,
    className: 'userName',
    inputActiveClassName: 'activeControlInput',
    hiddenClass: 'controlLabelHidden',
    errorMessage: 'Can\'t be empty.',
    type: 'input',
    placeholder:'Add your tiktok user here'
  },
  instagram: {
    label: <img src={Instagram} width="21px" />,
    className: 'userName',
    inputActiveClassName: 'activeControlInput',
    hiddenClass: 'controlLabelHidden',
    errorMessage: 'Can\'t be empty.',
    type: 'input',
    placeholder:'Add your Instgram username here'
  },
  Discord: {
    label: <img src={Discard} width="21px" />,
    className: 'userName',
    inputActiveClassName: 'activeControlInput',
    hiddenClass: 'controlLabelHidden',
    errorMessage: 'Can\'t be empty.',
    type: 'input',
    placeholder:'Add your Discord username'
  }
  // points: {
  //   label: 'Points',
  //   type: 'div',
  //   className: 'userInfo',
  //   errorMessage: 'Can\'t be empty.',
  // },
  // joined: {
  //   label: 'Joined',
  //   className: 'userInfo',
  //   errorMessage: 'Can\'t be empty.',
  //   type: 'div',
  // },
  // aboutMe: {
  //   label: 'About me',
  //   type: 'textarea',
  //   className: 'controlTextarea',
  //   inputActiveClassName: 'activeControlTextarea',
  //   errorMessage: 'Can\'t be empty.',
  // },
  // country: {
  //   label: 'Country',
  //   type: 'input',
  //   className: 'controlInputPublicForm',
  //   inputActiveClassName: 'activeControlTextarea',
  //   errorMessage: 'Can\'t be empty.',
  // },
  // question: {
  //   label: 'Why I’m learning coding?',
  //   type: 'textarea',
  //   className: 'controlTextarea',
  //   inputActiveClassName: 'activeControlTextarea',
  //   errorMessage: 'Can\'t be empty.',
  // }
};
