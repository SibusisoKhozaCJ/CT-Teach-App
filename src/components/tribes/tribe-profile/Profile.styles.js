const buttonStyles = {
  marginTop: 15,
  marginRight: '5%',
  marginLeft: '5%',
  width: '40%',
  height: 30,
  color: '#ffffff',
  '&:hover': {
    opacity: 0.8
  }
};

const btnModalCancel = {
...buttonStyles,
    background: 'gray',
    '&:hover': {
    background: 'gray',
  }
};

const btnModalSave = {
...buttonStyles,
    background: '#75cf6d',
    '&.Mui-disabled': {
    background: 'gray',
      color: '#ffffff',
  },
  '&:hover': {
    background: '#75cf6d',
  }
};

const controlStyles = {
  fontWeight: 'bold',
  fontSize: 21
}

const activeControl = {
  background: '#ffffff',
  border: '1px solid #cccccc',
  borderRadius: 5,
  padding: '1px 15px 1px 5px',
  boxSizing: 'border-box'
}

export const ProfileStyles = () => ({
  root: {
    width: '100%',
  },
})

export const HeaderProfileStyles = theme => ({
  profileHeader: {
    height: 188,
    width: '100%',
    [theme.breakpoints.down("sm")]: {
      height: 180,
    }
  },
  containerIcon: {
    height: 0,
    background: '#ffffff'
  },
  circleHome: {
    width: '100%',
    position: 'relative',
    top: -120,
    justifyContent: 'left',
    paddingLeft: 73,
    display: 'flex',
    [theme.breakpoints.down("sm")]: {
      top: -65,
      padding: 0,
      justifyContent: 'center'
    }
  },
  editIcon: {
    position: 'absolute',
    width: 28,
    height: 28,
    bottom: 80,
    right: 58,
    [theme.breakpoints.down("sm")]: {
      bottom: 62,
      right: 23,
    }
  },
  circleHomeIcon: {
    background: '#ffffff',
    border: '5px solid #fbdd3f',
    boxSizing: 'border-box',
    borderRadius: '50%',
    alignItems: 'center',
    width: 180,
    height: 175,
    justifyContent: 'center',
    display: 'flex',
    [theme.breakpoints.down("sm")]: {
      width: 101,
      height: 98,
    }
  },
  textArea: {
    border: '1px solid #eaeaeb',
    background: '#364954',
    color: '#ffffff',
    fontSize: 17,
    boxSizing: 'border-box',
    width: '100%',
    padding: '14px 17px',
    resize: 'none',
    '&::placeholder': {
      color: '#ffffff',
      fontSize: 17,
    }
  },
  inputWrapper: {
    background: '#364954',
    width: '100%',
    fontSize: 12,
    boxSizing: 'border-box',
    '& input': {
      height: 44,
      padding: '0 10px',
      fontSize: 17,
      color: '#ffffff',
    }
  },
  btnModalCancel,
  btnModalSave,
  modalContent: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    [theme.breakpoints.down("sm")]: {
      width: '100% !important',
      margin: '0 !important'
    }
  },
  modalPrivate: {
    backgroundColor: '#ffffff',
    padding: 30,
  },
  personalize: {
    '& > h5': {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: '28px',
      marginBottom: 25
    },
    '& > h6': {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: '21px',
    },
    '& > p': {
      fontSize: 18,
      lineHeight: 1,
    }
  },
  tipNote: {
    fontSize: 14,
    lineHeight: '16px',
    letterSpacing: '0.6px',
    margin: '20px auto',
    '& > a' : {
      fontWeight: 700,
      color: '#0198ED',
    }
  },
  textareaError: {
    color: '#ff0000',
    fontSize: 12,
    margin: 0
  },
  warning: {
    margin: 15,
    marginBottom: 0,
    textAlign: 'center',
    color: 'red'
  }
});

export const FormProfileStyles = theme => ({
  wrapperForm: {
    marginTop: 93,
    padding: 25,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    background: '#FFFFFF',
    // border: ({borderColor}) => `5px solid ${borderColor}`,
    boxSizing: 'border-box',
    margin: '0 auto',
 
    [theme.breakpoints.down("sm")]: {
      width: '100%',
      border: 'none !important',
      marginTop: 14,
      padding: 0,
      height: '100%'
    }
  },
  form: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    background: ({ background }) => background,
    paddingTop: ({paddingTop}) => paddingTop,
    boxSizing: 'border-box',
    '& .MuiFormControl-root': {
      width: '100%'
    },
    '& svg': {
      position: 'absolute',
      top: 15,
      right: 29,
      cursor: 'pointer',
      [theme.breakpoints.down("sm")]: {
        top: 12,
        right: 10
      }
    },
    [theme.breakpoints.down("sm")]: {
      background: 'none',
      paddingTop: '11px !important'
    }
  },
  control: {
    display: 'inline-block',
    marginLeft: 26,
    marginRight: 29,
    marginBottom: 23,
    '& div': {
      display: 'inline-block',
    },
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      marginBottom: 8
    }
  },
  controlLabel: {
    ...controlStyles,
    textTransform: 'uppercase',
    color: '#0198ED',
    marginBottom: 10,
    '& > span': {
      textTransform: 'none'
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
      marginBottom: 7
    }
  },
  controlLabelHidden: {
    [theme.breakpoints.down("sm")]: {
     
    }
  },
  Tribe: {
    ...controlStyles,   
    marginLeft: 20,
    width: 200,
    [theme.breakpoints.down("sm")]: {
      width: 140,
      textAlign: 'end',
      border: 'none !important',
      marginTop: 14,
      padding: 0,
      background: 'none',
      position: 'absolute',
      top: 0,
      right: 0,
      fontSize: 18
    }
  },
  tribeHandle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 13
    }
  },
  controlTextarea: {
    display: 'block !important',
    width: '100%',
    height: 100,
    background: '#ffffff',
    padding: 5,
    boxSizing: 'border-box',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14
  },
  activeControlInput: {
    ...activeControl,
    minWidth: 170,
    [theme.breakpoints.down("sm")]: {
      minWidth: 140,
      padding: 0
    }
  },
  activeControlTextarea: {
    ...activeControl,
    width: '100%',
    padding: 5,
  },
  btnButtons: {   
    [theme.breakpoints.down("sm")]: {
      position: 'absolute',
      bottom: '-71vh'
    }
  },
  btnCancel: {
    ...btnModalCancel,
    marginTop: 0,
    marginBottom: 15
  },
  btnSave: {
    ...btnModalSave,
    marginTop: 0,
    marginBottom: 15
  },
  invalid: {
    borderColor: '#ff0000',
    borderRadius: 5,
    '&:focus': {
      outline: 'none'
    }
  },
  errorMessage: {
    color: '#ff0000',
    fontSize: 12
  },
  controlInputPrivateForm: {
    display: 'block',
    width: '100%',
    height: 32,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 18,
    lineHeight: '32px',
    paddingLeft: 6,
    paddingRight: 6,
    boxSizing: 'border-box',
    paddingTop: 0,
    border: '1px solid #cccccc',
    borderRadius: 5,
    [theme.breakpoints.down("sm")]: {
      height: 27,
      lineHeight: '27px',
      fontSize: 15
    }
  },
  header: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 14,
    paddingBottom: 14,
    flexDirection: 'column',
    width: '100%',
    height: 57,
    background: '#c4c4c4',
    boxSizing: 'border-box',
    '& > p': {
      margin: 0,
      fontSize: 13,
      fontWeight: 700,
      color: '#364954'
    },
    '& svg': {
      position: 'absolute',
      top: 14,
      right: 22,
      cursor: 'pointer',
    }
  },
  wrapperIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    width: 36,
    height: 36,
    border: '5px solid #a6a6a6',
    borderRadius: '50%',
    boxSizing: 'border-box',
    background: '#ffffff',
    '& svg': {
      position: 'relative',
      top: 0,
      right: 0,
    }
  }
})
