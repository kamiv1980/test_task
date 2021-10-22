/** @format */

import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import styles from './styles.module.css';

import { ListProducts } from './components';
import { BasicButton, Loader } from '../../components';
import { getLimitProducts, getAllProducts } from '../../services/products/operations';
import { selectorProducts, selectorHasProducts } from '../../services/products/selectors';
import { selectorIsPublication, selectorNewProducts } from '../../services/newProducts/selectors';
import { selectorIsLoading } from '../../services/overlay/selectors';
import { isPublication } from '../../services/newProducts/actions';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export const Products = memo(({ history }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectorIsLoading);
  const hasProducts = useSelector(selectorHasProducts);
  const list = useSelector(selectorProducts);
  const newList = useSelector(selectorNewProducts);
  const isPublic = useSelector(selectorIsPublication);

  const visible = (() => {
    if (isPublic) {
      return list;
    } else {
      return newList;
    }
  })();

  const handleProducts = () => {
    dispatch(isPublication(!isPublic));
  };

  const handleLoad = (number) => () => {
    dispatch(getLimitProducts(number));
  };

  const handleLoadAll = () => {
    dispatch(getAllProducts());
  };

  useEffect(() => {
    dispatch(getLimitProducts(8));
    localStorage.setItem('newProducts', JSON.stringify(newList));
  }, [dispatch, newList]);

  return (
    <>
      <div className={styles.wrapper}>
        {!isLoading && (
          <FormControlLabel
            control={<Switch checked={isPublic} onChange={handleProducts} name="Publication" />}
            label="Publication"
          />
        )}
        {isLoading ? <Loader /> : hasProducts && <ListProducts list={visible} />}
        {!isLoading && (
          <Stack spacing={2} direction="row">
            {isPublic && (
              <>
                <BasicButton onClick={handleLoad(16)} title={'Load 16'} />
                <BasicButton onClick={handleLoad(20)} title={'Load 20'} />
                <BasicButton onClick={handleLoadAll} title={'Load all'} />
              </>
            )}
            <BasicButton onClick={() => history.goBack()} title={'Go back'} />
          </Stack>
        )}
      </div>
    </>
  );
});
