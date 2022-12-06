import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function DialogueBox(props) {
  const { title, children, open, setOpen, onConfirm, onConfirmState, confirmText, cancelText} = props;

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="confirm-dialog"
    >
      <DialogTitle id="confirm-dialog">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={() =>{ setOpen(false);  onConfirm(onConfirmState);}}
          
          color="secondary"
        >
          {confirmText}
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setOpen(false);
            
          }}
          color="default"
        >
          {cancelText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
