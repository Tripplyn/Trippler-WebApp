import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";

// interface Props {
//   onClose: () => void;
// }

// const SimpleDeleteDialog: React.FC<Props> = ({ onClose }) => {
const SimpleDeleteDialog: React.FC = () => {


  const [open, setOpen] = React.useState(false);

  function handleUpdateOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
      <Dialog open={open} onClose={handleClose} />
  );
}

export default SimpleDeleteDialog;