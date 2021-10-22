import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { useStyles } from './styles';
import { selectorUsers } from '../../services/users/selectors';
import { setIsAuth } from '../../services/users/actions';

export const SignIn = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectorUsers);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleName = ({ target: { value } }) => setName(value);
  const handlePassword = ({ target: { value } }) => setPassword(value);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (users.find((user) => user.name === name && user.password === password)) {
      dispatch(setIsAuth(true));
    } else {
      alert('Incorrect name or password');
    }
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            autoComplete="email"
            autoFocus
            fullWidth
            id="name"
            label="Name"
            margin="normal"
            name="name"
            onChange={handleName}
            required
            value={name}
            variant="outlined"
          />
          <TextField
            autoComplete="current-password"
            fullWidth
            id="password"
            label="Password"
            margin="normal"
            name="password"
            onChange={handlePassword}
            required
            type="password"
            value={password}
            variant="outlined"
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/sign_up">Don't have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
