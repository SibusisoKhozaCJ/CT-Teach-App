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
  country: {
    label: 'Country',
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
    label: 'UserName',
    className: 'userName',
    inputActiveClassName: 'activeControlInput',
    hiddenClass: 'controlLabelHidden',
    errorMessage: 'Can\'t be empty.',
    type: 'input',
  },
  points: {
    label: 'Points',
    type: 'div',
    className: 'userInfo',
    errorMessage: 'Can\'t be empty.',
  },
  joined: {
    label: 'Joined',
    className: 'userInfo',
    errorMessage: 'Can\'t be empty.',
    type: 'div',
  },
  aboutMe: {
    label: 'About me',
    type: 'textarea',
    className: 'controlTextarea',
    inputActiveClassName: 'activeControlTextarea',
    errorMessage: 'Can\'t be empty.',
  },
  country: {
    label: 'Country',
    type: 'div',
    className: 'userInfo',
    errorMessage: 'Can\'t be empty.',
  },
  question: {
    label: 'Why I’m learning coding?',
    type: 'textarea',
    className: 'controlTextarea',
    inputActiveClassName: 'activeControlTextarea',
    errorMessage: 'Can\'t be empty.',
  }
};
