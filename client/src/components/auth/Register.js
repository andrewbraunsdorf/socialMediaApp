//  have values of state but have to assign change events to add text
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {
  constructor() {
    super();
    // this.state will be an object with some values
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    // Allows you to type.  Since we didnt know what .this was binds this 
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('dashboard');
    }
  }

  // test for certain properties, test for errors
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      // get errors from Redux state and puts errors in props with map state to props, then once we receive new properties we set it to the component state. errors will be coming from the component state
      this.setState({ errors: nextProps.errors })
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    this.props.registerUser(newUser, this.props.history);

    // will remove axios, implement redux and would be implemented through redux, and set up error handling what will change is where we make the request
    // This gives a promise so we want to use .then

    // axios
    //   .post('/api/users/register', newUser)
    //   .then(res => console.log(res.data))
    //   // .response.data will give you the data that you send back
    //   .catch(err => this.setState({ errors: err.response.data }))
  }

  render() {
    // destruct
    // the below are the same the curly braces just pull errors from the this.state
    // const errors = this.state.errors
    const { errors } = this.state;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create your DevConnector account
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextFieldGroup
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                  info="This side uses Gravatar.  If you want a profile image, use a Gravatar email."
                />
                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <TextFieldGroup
                  placeholder="Confirm Password"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={this.onChange}
                  error={errors.password2}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}
// registerUser is actually a user and a prop type

const mapStateToProps = (state) => ({
  // state.auth comes from the route reducer
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));