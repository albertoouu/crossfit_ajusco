import React, { useState } from 'react';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

export const AdPhoto = () => {
  const styles = {
    cursor: 'pointer',
    marginTop: '3%',
    marginLeft: '2%',
    marginBottom: '2%',
    cursor: 'pointer',
  };

  const [photo, setPhoto] = useState('');

  const handlePhoto = () => {
    console.log('adding photo');
  };

  return (
    <div style={styles}>
      <IconButton>
        <PhotoCameraIcon onClick={handlePhoto} />
      </IconButton>
    </div>
  );
};