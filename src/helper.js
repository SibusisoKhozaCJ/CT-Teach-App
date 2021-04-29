export const getAppBaseUrl = () => {
    if (process.env.REACT_APP_HOST_ENV === 'staging') {
      return process.env.REACT_APP_APIBASE_STAGING;
    } else if (process.env.REACT_APP_HOST_ENV === 'production') {
      return process.env.REACT_APP_APIBASE_LIVE;
    }
    return process.env.REACT_APP_APIBASE;
  }