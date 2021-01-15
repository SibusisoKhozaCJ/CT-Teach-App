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
}

export const ProfileStyles = theme => ({
  root: {
    width: '100%',
  },
  profileHeader: {
    height: 140,
    width: '100%'
  },
  containerIcon: {
    height: 0,
    background: '#ffffff'
  },
  circleHome: {
    width: '100%',
    position: 'relative',
    top: -65,
    justifyContent: 'left',
    paddingLeft: 30,
    display: 'flex',
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      justifyContent: 'center'
    }
  },
  editIcon: {
    position: 'absolute',
    width: 28,
    height: 28,
    bottom: 58,
    right: 84,
    [theme.breakpoints.down("sm")]: {
      bottom: 63,
      right: 49,
    }
  },
  circleHomeIcon: {
    background: '#ffffff',
    border: '5px solid #fbdd3f',
    boxSizing: 'border-box',
    borderRadius: 50,
    alignItems: 'center',
    width: 101,
    height: 98,
    justifyContent: 'center',
    display: 'flex'
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
  btnModalCancel: {
    ...buttonStyles,
    background: 'gray',
    '&:hover': {
      background: 'gray',
    }
  },
  btnModalSave: {
    ...buttonStyles,
    background: '#75cf6d',
    '&.Mui-disabled': {
      background: 'gray',
      color: '#ffffff',
    },
    '&:hover': {
      background: '#75cf6d',
    }
  },
  modalContent: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    [theme.breakpoints.down("sm")]: {
      width: '100% !important',
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
  }
})
