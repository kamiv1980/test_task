import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';

import { selectorIsLoading } from '../../services/overlay/selectors';
import { BasicButton, Loader } from '../../components';
import { selectorProducts } from '../../services/products/selectors';
import { selectorIsPublication, selectorNewProducts } from '../../services/newProducts/selectors';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

export const ProductItem = memo(
  ({
    history,
    match: {
      params: { productId },
    },
  }) => {
    const list = useSelector(selectorProducts);
    const newList = useSelector(selectorNewProducts);
    const isPublic = useSelector(selectorIsPublication);
    const isLoading = useSelector(selectorIsLoading);
    const product = [...list, ...newList].find((el) => el.id == productId);

    const goBack = () => history.goBack();

    return (
      <div className={styles.wrapper}>
        {isLoading && <Loader />}
        <img className={styles.img} src={product.image} alt={product.title} height="480px" />
        <section className={styles.about}>
          <h1>{product.title}</h1>
          <p className={styles.bold}>Category</p>
          <p>{product.category} </p>
          <p className={styles.bold}>Price</p>
          <p>{product.price} $ </p>
          <p className={styles.bold}>Description</p>
          <p>{product.description} </p>
          <Stack spacing={2} direction="row">
            {!isPublic && (
              <Link className={styles.link} to={{ pathname: `/products/${product.id}/edit` }}>
                <BasicButton title={'Edit'} />
              </Link>
            )}
            <BasicButton onClick={goBack} title={'Go back'} />
          </Stack>
        </section>
      </div>
    );
  },
);
