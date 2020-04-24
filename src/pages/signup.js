import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

// REDUX
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/userActions';

const styles = (theme) => ({
  ...theme.classes
})

class signup extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      handle: '',
      errors: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle,
    };
    this.props.signupUser(newUserData, this.props.history)
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  render() {
    const { classes, UI: { loading } } = this.props;
    const { errors } = this.state;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <Typography variant='h5' className={classes.pageTitle}>
            Signup
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id='email'
              label='Email...'
              variant='outlined'
              type='email'
              helperText={errors.email}
              error={errors.email ? true : false}
              className={classes.textfield}
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
              autoComplete="true"
            />

            <TextField
              id='handle'
              label='Handle...'
              variant='outlined'
              type='text'
              helperText={errors.handle}
              error={errors.handle ? true : false}
              className={classes.textfield}
              name='handle'
              value={this.state.handle}
              onChange={this.handleChange}
              fullWidth
              autoComplete="true"
            />

            <TextField
              id='password'
              label='Password...'
              variant='outlined'
              type='password'
              helperText={errors.password}
              error={errors.password ? true : false}
              className={classes.textfield}
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
              autoComplete="true"
            />

            <TextField
              id='confirmPassword'
              label='Confirm Password...'
              variant='outlined'
              type='password'
              helperText={errors.confirmPassword}
              error={errors.confirmPassword ? true : false}
              className={classes.textfield}
              name='confirmPassword'
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              fullWidth
              autoComplete="true"
            />

            {errors.general && (
              <Typography variant='body2' className={classes.customError}>
                {errors.general}
              </Typography>
            )}

            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.button}
              disabled={loading}>
              Signup
              {loading && <CircularProgress className={classes.progress} />}
            </Button>
            <br />

            <small>
              Already have an account? Login <Link to='/login'>here</Link>
            </small>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

signup.propTypes = {
  classes: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
})

const mapActionsToProps = {
  signupUser
};


export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(signup));
