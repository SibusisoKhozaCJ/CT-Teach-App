var url = require('url');

export default ({
    pathname,
    query,
}) => {
    return url.format({
        protocol: 'https',
        host: process.env.REACT_APP_HOST,
        pathname: `/${process.env.REACT_APP_ENV_PATH}${pathname}`,
        query,
    });
};
