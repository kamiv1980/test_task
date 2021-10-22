import * as React from 'react';
import Button from '@mui/material/Button';

export const BasicButton = ({ title, onClick }) => {
  return (
    <Button onClick={onClick} variant="contained">
      {title}
    </Button>
  );
};
