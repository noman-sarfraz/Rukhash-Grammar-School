import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog({
  open,
  setOpen,
  title,
  message,
  onSuccess,
}) {
  // const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {title ? title : "Alert"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message ? message : "Are you sure?"}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          color="error"
          variant="contained"
          sx={{
            // bgcolor: "teal",
            width: "25%",
          }}
          onClick={() => {
            onSuccess();
            handleClose();
          }}
        >
          Yes
        </Button>
        <Button
          variant="contained"
          sx={{ width: "25%" }}
          onClick={handleClose}
          autoFocus
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}
