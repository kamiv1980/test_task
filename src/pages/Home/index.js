import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { BasicButton } from '../../components';
import styles from '../Products/styles.module.css';
import { selectorIsAuth, selectorUsers } from '../../services/users/selectors';
import { useEffect } from 'react';

export const Home = () => {
  const isAuth = useSelector(selectorIsAuth);
  const users = useSelector(selectorUsers);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  return (
    <>
      <div className={styles.wrapper}>
        {!isAuth && <h1>HOME PAGE</h1>}
        {isAuth && (
          <>
            <h1>Welcome</h1>
            <Stack spacing={2} direction="row">
              <Link className={styles.link} to={{ pathname: '/products' }}>
                <BasicButton title={'Go to products'} />
              </Link>
              <Link className={styles.link} to={{ pathname: '/new' }}>
                <BasicButton title={'Add product'} />
              </Link>
            </Stack>
          </>
        )}
      </div>
    </>
  );
};
