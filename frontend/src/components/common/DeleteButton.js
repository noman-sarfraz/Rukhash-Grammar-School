import { IconButton } from '@mui/material';
import React from 'react'
import { FiEdit } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';

function DeleteButton({onClick, href}) {
  return (
    <IconButton
      sx={{
        p: 0,
        display: "flex",
        alignItems: "center",
      }}
      href={href ? href : null}
      onClick={onClick ? onClick : null}
    >
      <ImCross color="#FC6871" size={12} />
    </IconButton>
  );
}

export default DeleteButton
