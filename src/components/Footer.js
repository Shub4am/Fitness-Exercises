import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/dumbbell.png';

const Footer = () => (
  <Box mt="80px" m="0 40px">
    <Stack
      gap="20px"
      sx={{
        alignItems: 'center',
      }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: '100px', height: '60px' }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: '22px', xs: '16px' } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Made with ❤️ in React
    </Typography>
    <Stack alignItems="center" display="none">
      <a href="https://www.flaticon.com/free-icons/gym" title="gym icons">
        Gym icons created by Darius Dan - Flaticon
      </a>
      <br />
      <a href="https://www.flaticon.com/free-icons/gym" title="gym icons">
        Gym icons created by Freepik - Flaticon
      </a>
      <br />
      <a href="https://www.flaticon.com/free-icons/abs" title="abs icons">
        Abs icons created by Freepik - Flaticon
      </a>
      <br />
      <a
        href="https://www.flaticon.com/free-icons/shoulder"
        title="shoulder icons"
      >
        Shoulder icons created by max.icons - Flaticon
      </a>
      <br />
      <a href="https://www.flaticon.com/free-icons/legs" title="legs icons">
        Legs icons created by Freepik - Flaticon
      </a>
      <br />
      <a href="https://www.flaticon.com/free-icons/muscle" title="muscle icons">
        Muscle icons created by Bert Flint - Flaticon
      </a>
      <br />
      <a href="https://www.flaticon.com/free-icons/neck" title="neck icons">
        Neck icons created by max.icons - Flaticon
      </a>
      <br />
      <a href="https://www.flaticon.com/free-icons/cardio" title="cardio icons">
        Cardio icons created by ultimatearm - Flaticon
      </a>
      <br />
      <a href="https://www.flaticon.com/free-icons/back" title="back icons">
        Back icons created by Darius Dan - Flaticon
      </a>
      <br />
      <a href="https://www.flaticon.com/free-icons/chest" title="chest icons">
        Chest icons created by Darius Dan - Flaticon
      </a>
      <br />
      <a href="https://www.flaticon.com/free-icons/next" title="next icons">
        Next icons created by Roundicons - Flaticon
      </a>
      <br />
      <a href="https://www.flaticon.com/free-icons/back" title="back icons">
        Back icons created by Roundicons - Flaticon
      </a>
    </Stack>
  </Box>
);

export default Footer;
