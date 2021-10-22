import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';
import styles from '../../pages/EditProduct/styles.module.css';

export const AlertDialog = ({ open, handleDisagree, handleAgree }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleDisagree}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Alert'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Do you want to delete a product? </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagree}>Cancel</Button>
          <Link className={styles.link} to={{ pathname: `/products` }}>
            <Button onClick={handleAgree} autoFocus>
              Ok
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
};
