/** @format */

import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import styles from './styles.module.css';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { addProduct } from '../../services/products/operations';
import { addProductCopy } from '../../services/newProducts/actions';
import { BasicButton } from '../../components';

export const NewProduct = memo(({ history }) => {
  const dispatch = useDispatch();
  const [newItem, setNewProduct] = useState({
    date: Date.now(),
    id: uuid(),
    image: 'https://i.pravatar.cc/420',
    title: '',
    price: '',
    description: '',
    category: '',
    publication: false,
  });

  const goBack = () => history.goBack();

  const handleChange = (event) => {
    setNewProduct((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  const handlePublication = (event) => {
    setNewProduct((prevState) => ({ ...prevState, [event.target.name]: event.target.checked }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addProduct(newItem));
    dispatch(addProductCopy(newItem));
    goBack();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>Title</label>
      <input type="text" name="title" value={newItem.title} className={styles.input} onChange={handleChange} />
      <label className={styles.label}>Category</label>
      <input type="text" name="category" value={newItem.category} className={styles.input} onChange={handleChange} />
      <label className={styles.label}>Prise</label>
      <input type="text" name="price" value={newItem.price} className={styles.input} onChange={handleChange} />
      <label className={styles.label}>Description</label>
      <TextareaAutosize
        maxRows={4}
        aria-label="maximum height"
        placeholder="Maximum 4 rows"
        type="text"
        name="description"
        value={newItem.description}
        onChange={handleChange}
        className={styles.input}
      />
      <FormControlLabel
        control={<Switch checked={newItem.publication} onChange={handlePublication} name="publication" />}
        label="Publication"
      />
      <Stack spacing={2} direction="row">
        <BasicButton onClick={handleSubmit} title={'Add product'} />
        <BasicButton onClick={goBack} title={'Go back'} />
      </Stack>
    </form>
  );
});
