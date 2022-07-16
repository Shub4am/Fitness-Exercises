import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img
      src={exercise.gifUrl}
      alt={exercise.name}
      loading="lazy"
      style={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
    />
    <Stack direction="row" alignItems="center" justifyContent="center">
      <Button
        sx={{
          color: '#fff',
          background: '#006cec',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize',
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        sx={{
          ml: '20px',
          mr: '20px',
          color: '#fff',
          background: '#0575E6',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize',
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      ml="21px"
      color="#000"
      fontWeight="bold"
      sx={{ fontSize: { lg: '24px', xs: '20px' } }}
      mt="11px"
      pb="10px"
      textTransform="capitalize"
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
