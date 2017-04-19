import React from 'react';
import { Link, hashHistory } from 'react-router';

class AuthForm extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.receiveField = this.receiveField.bind(this);
		this.loginAsGuest = this.loginAsGuest.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.pathname !== newProps.pathname) {
      this.setState({email: "", password: ""});
			if (this.props.errors.length > 0) {
				this.props.receiveErrors([]);
				console.log('ERRORS STORED IN STATE CLEARED');
			}
    }
  }

  receiveField(field) {
    return (e) => (
      this.setState({[field]: e.target.value})
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
			.then(() => hashHistory.push('/home'));
  }

	loginAsGuest() {
		this.props.signInAsGuest()
			.then(() => hashHistory.push('/home'));
	}

  render() {
    let header, altLink, altText, text;

    switch (this.props.formType) {
      case 'splashSignUp':
        header = 'NIFTYNOTE SIGNUP SPASH PAGE';
        altLink = '/signin';
        altText = `Already signed up? Sign in.`;
        break;
      case 'plainSignUp':
        header = text = 'Sign Up';
        altLink = '/signin';
        altText = `Already signed up? Sign in.`;
        break;
      case 'signin':
        header = text = 'Sign In';
        altLink = '/signup';
        altText = `Don't have an account? Sign Up.`;
        break;
      default:
        console.log("formType isn't catching in auth_form");
    }

    let errors = this.props.errors.map( (err, idx) => <li key={idx}>{err}</li> );

    return (
        <div>
          <h1>{header}</h1>

          <form onSubmit={this.handleSubmit}>
            <label>Email:
              <input
                type="text"
                value={this.state.email}
                onChange={this.receiveField('email')}>
              </input>
            </label>
            <br/>

            <label>Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.receiveField('password')}>
              </input>
            </label>
            <br/>

            <input type="submit" value={text}></input>
          </form>

          <ul>
            {errors}
          </ul>

          <button onClick={this.loginAsGuest}>Sign In as Guest</button>

          <Link to={altLink}>{altText}</Link>
        </div>
    );
  }
}

export default AuthForm;
