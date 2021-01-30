export const tribeFormPrivateControlsProfilePage = {
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

export const tribeFormPublicControlsProfilePage = {
  tribe: {
    label: 'tribe',
    className: 'Tribe',
    inputActiveClassName: 'activeControlInput',
    hiddenClass: 'controlLabelHidden',
    errorMessage: 'Can\'t be empty.',
    type: 'input',
  },
  tribeHandle: {
    label: 'Tribe Handle',
    type: 'div',
    className: 'tribeHandle',
    errorMessage: 'Can\'t be empty.',
  },
  founded: {
    label: 'Founded',
    className: 'userInfo',
    errorMessage: 'Can\'t be empty.',
    type: 'div',
  },
  aboutTribe: {
    label: 'About Tribe',
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
  ourJourney: {
    label: 'Our Journey',
    type: 'textarea',
    className: 'controlTextarea',
    inputActiveClassName: 'activeControlTextarea',
    errorMessage: 'Can\'t be empty.',
  },
  schoolOrg: {
    label: 'School/Org',
    type: 'div',
    className: 'userInfo',
    errorMessage: 'Can\'t be empty.',
  },
  joinTribe: {
    label: 'joinTribe',
    type: 'textarea',
    className: 'controlTextarea',
    inputActiveClassName: 'activeControlTextarea',
    errorMessage: 'Can\'t be empty.',
  },
  question: {
    label: 'Message Tribe Admin',
    type: 'textarea',
    className: 'controlTextarea',
    inputActiveClassName: 'activeControlTextarea',
    errorMessage: 'Can\'t be empty.',
  }
};
