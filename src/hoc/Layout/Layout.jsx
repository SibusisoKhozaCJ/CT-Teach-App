import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const Layout = ({children, pathname}) => {
  let routes;
  let foundPos = pathname.indexOf('profile');

  if (foundPos !== -1) {
    routes = children
  } else {
    routes = (
      <Box m={1} width={"100%"}>
        <Container>
          {children}
        </Container>
      </Box>
    )
  }

  return routes;
}

export default Layout;
