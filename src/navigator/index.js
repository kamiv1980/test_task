import React, { memo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Home, SignIn, SignUp, Products, ProductItem, NewProduct, EditProduct } from '../pages';

const NotAuth = memo(() => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign_in" exact component={SignIn} />
      <Route path="/sign_up" exact component={SignUp} />
      <Redirect to="/" />
    </Switch>
  );
});

const IsAuth = memo(() => {
  return (
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/products'} component={Products} />
      <Route exact path={'/products/:productId'} component={ProductItem} />
      <Route exact path={'/new'} component={NewProduct} />
      <Route exact path={'/products/:productId/edit'} component={EditProduct} />
      <Redirect to="/" />
    </Switch>
  );
});

export const Navigator = memo(({ isAuth }) => {
  return isAuth ? <IsAuth /> : <NotAuth />;
});
