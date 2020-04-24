export default {
  palette: {
    primary: {
      light: '#9e9e9e',
      main: '#212121',
      dark: '#424242',
      contrastText: '#fff'
    },
    secondary: {
      light: '#f44336',
      main: '#f44336',
      dark: '#b71c1c',
      contrastText: '#fff'
    }
  },
  classes: {
    form: {
      textAlign: 'center'
    },
    pageTitle: {
      margin: '20px auto 20px auto'
    },
    textfield: {
      margin: '10px auto 10px auto'
    },
    button: {
      marginTop: 20,
      postion: 'relative'
    },
    customError: {
      color: 'red',
      fontSize: '0.8rem',
      marginTop: 10
    },
    progress: {
      position: 'absolute'
    },
  invisibleSperator: {
    border: "none",
    margin: 4,
  },
  visibleSeperator: {
    width: '100%',
    borderBottom: '1px solid black',
    marginBottom: 20
  }, paper: {
    padding: 20,
    textAlign: 'center'
  },
  profile: {
    '& .image-wrapper': {
      textAlign: 'center',
      position: 'relative',
      '& button': {
        position: 'absolute',
        top: '80%',
        left: '70%'
      }
    },
    '& .profile-image': {
      width: 200,
      height: 200,
      objectFit: 'cover',
      maxWidth: '100%',
      borderRadius: '50%'
    },
    '& .profile-details': {
      textAlign: 'center',
      '& span, svg': {
        verticalAlign: 'middle'
      },
      '& a': {
        color: '#29b6f6'
      }
    },
    '& hr': {
      border: 'none',
      margin: '0 0 10px 0'
    },
    '& svg.button': {
      '&:hover': {
        cursor: 'pointer'
      }
    }
  },
  buttons: {
    textAlign: 'center',
    '& a': {
      margin: '20px 20px'
    }
  }
  }
}