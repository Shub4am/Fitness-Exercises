import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';
import Back from '../assets/icons/back.png';
import Cardio from '../assets/icons/cardio.png';
import Chest from '../assets/icons/chest.png';
import Arms from '../assets/icons/arms.png';
import Legs from '../assets/icons/legs.png';
import Neck from '../assets/icons/neck.png';
import Shoulder from '../assets/icons/shoulder.png';
import Waist from '../assets/icons/waist.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const bodyPartIcons = () => {
    if (item === 'back') {
      return Back;
    } else if (item === 'chest') {
      return Chest;
    } else if (item === 'cardio') {
      return Cardio;
    } else if (item === 'lower arms' || item === 'upper arms') {
      return Arms;
    } else if (item === 'lower legs' || item === 'upper legs') {
      return Legs;
    } else if (item === 'neck') {
      return Neck;
    } else if (item === 'shoulder') {
      return Shoulder;
    } else if (item === 'waist') {
      return Waist;
    } else {
      return Icon;
    }
    // Ternary Operator chaining
    // return item === 'back'
    //   ? Back
    //   : item === 'cardio'
    //   ? Cardio
    //   : item === 'chest'
    //   ? Chest
    //   : item === 'lower arms'
    //   ? Arms
    //   : item === 'lower legs'
    //   ? Legs
    //   : item === 'neck'
    //   ? Neck
    //   : item === 'shoulders'
    //   ? Shoulder
    //   : item === 'upper arms'
    //   ? Arms
    //   : item === 'upper legs'
    //   ? Legs
    //   : item === 'waist'
    //   ? Waist
    //   : Icon;
  };
  bodyPartIcons();

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop:
          bodyPart === item ? '8px solid #006CEC' : '4px solid #000C40',
        backgroundColor: '#FFF',
        borderRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px',
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img
        src={bodyPartIcons()}
        alt="dumbbell"
        style={{ width: '60px', height: '60px' }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#122C3A"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;

// item === 'back'
//             ? Back
//             : item === 'cardio'
//             ? Cardio
//             : item === 'chest'
//             ? Chest
//             : item === 'lower arms'
//             ? Arms
//             : item === 'lower legs'
//             ? Legs
//             : item === 'neck'
//             ? Neck
//             : item === 'shoulders'
//             ? Shoulder
//             : item === 'upper arms'
//             ? Arms
//             : item === 'upper legs'
//             ? Legs
//             : item === 'waist'
//             ? Waist
//             : Icon
