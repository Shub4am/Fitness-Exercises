import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/stockImage.jpg';

//Photo by <a href="https://unsplash.com/@samuelgirven?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Samuel Girven</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//red color code: #FF262 5

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '212px', xs: '70px' },
        m1: { sm: '50px' },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#006CEC" fontWeight="600" fontSize=" 26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
        mb="23px"
        mt="30px"
      >
        <span className="gradient-text">Sweat Smile Workout Repeat</span>
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb="12px">
        <span
          style={{
            color: '#006CEC',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          Get Fit
        </span>
        , STRONG AND HEALTHY!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="#exercises"
        sx={{
          backgroundColor: '#006CEC',
          padding: '10px',
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#006CEC"
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none' },
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
