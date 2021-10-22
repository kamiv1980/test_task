/** @format */

import React, { memo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.css';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { deleteProduct, editProduct } from '../../services/products/operations';
import { deleteProductCopy, editProductCopy } from '../../services/newProducts/actions';
import { AlertDialog, BasicButton } from '../../components';
import { selectorNewProducts } from '../../services/newProducts/selectors';

export const EditProduct = memo(
  ({
    history,
    match: {
      params: { productId },
    },
  }) => {
    const newList = useSelector(selectorNewProducts);
    const product = newList.find((el) => el.id == productId);
    const [editItem, setEditItem] = useState(product);
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const goBack = () => history.goBack();

    const handleChange = (event) => {
      setEditItem((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
    };
    const handlePublication = (event) => {
      setEditItem((prevState) => ({ ...prevState, [event.target.name]: event.target.checked }));
    };

    const handleDelete = (id) => () => {
      // dispatch(deleteProduct(id));
      dispatch(deleteProductCopy(id));
    };

    const handleSubmit = (evt) => {
      evt.preventDefault();
      goBack();
      dispatch(editProduct(editItem));
      dispatch(editProductCopy(editItem));
    };

    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>Title</label>
        <input type="text" name="title" value={editItem.title} className={styles.input} onChange={handleChange} />
        <label className={styles.label}>Category</label>
        <input type="text" name="category" value={editItem.category} className={styles.input} onChange={handleChange} />
        <label className={styles.label}>Prise</label>
        <input type="text" name="price" value={editItem.price} className={styles.input} onChange={handleChange} />
        <label className={styles.label}>Description</label>
        <TextareaAutosize
          maxRows={4}
          aria-label="maximum height"
          placeholder="Maximum 4 rows"
          type="text"
          name="description"
          value={editItem.description}
          onChange={handleChange}
          className={styles.input}
        />
        <FormControlLabel
          control={<Switch checked={editItem.publication} onChange={handlePublication} name="publication" />}
          label="Publication"
        />
        <Stack spacing={2} direction="row">
          <BasicButton onClick={handleSubmit} title={'Edit product'} />
          <BasicButton onClick={handleClickOpen} title={'Delete'} />
          <BasicButton onClick={goBack} title={'Go back'} />
        </Stack>
        <AlertDialog open={open} handleDisagree={handleClose} handleAgree={handleDelete(product.id)} />
      </form>
    );
  },
);
