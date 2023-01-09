import { IconButton } from "@mui/material";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { ImCross } from "react-icons/im";

function EditButton({ onClick, href }) {
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
      <FiEdit color="grey" size={14} />
    </IconButton>
  );
}

export default EditButton;
