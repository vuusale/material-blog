import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// @material-ui/core
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// @material-ui/icons & lab & components
import Alert from '@material-ui/lab/Alert';
import Button from "components/CustomButtons/Button.js";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// requests
import { register } from "../../shared/request";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.error.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const history = useHistory();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registration
        </Typography>
        <Container className={classes.form}>
          <Grid container spacing={2}>
             <Grid item xs={12}>
             <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="off"
                autoFocus
                onChange={(e) => {
                    setUsername(e.target.value)
                }}
          />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="off"
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                autoComplete="off"
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="passwordConfirmation"
                label="Confirm password"
                name="passwordConfirmation"
                type="password"
                autoComplete="off"
                onChange={(e) => {
                    setPasswordConfirmation(e.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12}>
            <RadioGroup aria-label="role" name="role" onChange={(e) => setRole(e.target.value)}>
                <FormControlLabel value="READER" control={<Radio />} label="Reader" />
                <FormControlLabel value="WRITER" control={<Radio />} label="Writer" />
            </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I confirm that I have read the terms and conditions."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {
                register(username, email, password, passwordConfirmation, role)
                  .then(res => res.success ? history.push('/main/home') : setError(res.error))
            }}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                {"Already have an account? Sign in"}
              </Link>
            </Grid>
          </Grid>
          <br/>
          {error ? <Alert severity="error">{error}</Alert> : ""}
        </Container>
      </div>
    </Container>
  );
}