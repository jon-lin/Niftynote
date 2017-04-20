import React from 'react';
import { Link, hashHistory } from 'react-router';
import * as splashContent from './splash_form_content';

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
    let header, altLink, altText, buttontext,
      video, splashMessage, splashFooter;

    switch (this.props.formType) {
      case 'splashSignUp':
        buttontext = 'SIGN UP FOR FREE';
        header = 'NIFTYNOTE';
        altLink = '/signin';
        altText = `Sign in`;
        video = splashContent.video;
        splashMessage = splashContent.splashMessage;
        splashFooter = splashContent.splashFooter;
        break;
      case 'plainSignUp':
        header = buttontext = 'Sign Up';
        altLink = '/signin';
        altText = `Already signed up? Sign in.`;
        [video, splashMessage, splashFooter] = [null, null, null];
        break;
      case 'signin':
        header = buttontext = 'Sign In';
        altLink = '/signup';
        altText = `Don't have an account? Sign Up.`;
        [video, splashMessage, splashFooter] = [null, null, null];
        break;
      default:
        console.log("formType isn't catching in auth_form");
    }

    let errors = this.props.errors.map( (err, idx) => <li key={idx}>{err}</li> );

    return (
        <div className="entireformpage">

          <nav className="navbar">
            <h1>{header}</h1>
            <Link to={altLink}>{altText}</Link>
          </nav>

          {video}

          <div className="centerPanelContainer">
            <div className="centerPanel">

              {splashMessage}

              <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    value={this.state.email}
                    placeholder="Email"
                    onChange={this.receiveField('email')}>
                  </input>

                  <input
                    type="password"
                    value={this.state.password}
                    placeholder="Password"
                    onChange={this.receiveField('password')}>
                  </input>

                <ul>
                  {errors}
                </ul>

                <input type="submit" value={buttontext}></input>
              </form>

              <span className="lineforOR">
                <hr className="leftwhiteline"></hr>
                  <p>or</p>
                <hr className="rightwhiteline"></hr>
              </span>


              <button onClick={this.loginAsGuest}>Sign In as Guest</button>

            </div>
          </div>
          <footer>{splashFooter}</footer>
        </div>
    );
  }
}

export default AuthForm;
