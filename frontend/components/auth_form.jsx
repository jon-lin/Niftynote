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
    let header, altLink, altText, buttontext;

    let video = (
      <div className='videocontainer'>
        <video className="splash" autoPlay="autoplay" loop="loop" poster="https://cdn1.evernote.com/evernote.com/img/homepage/homepage-hero-video-desktop-still@2x.jpg">
          <source type="video/webm" src="https://cdn1.evernote.com/evernote.com/video/homepage/homepage-hero-video@2x.webm"/>
          <source type="video/mp4" src="https://cdn1.evernote.com/evernote.com/video/homepage/homepage-hero-video@2x.mp4"/>
        </video>
      </div>
    );

    switch (this.props.formType) {
      case 'splashSignUp':
        buttontext = 'SIGN UP FOR FREE';
        header = 'NIFTYNOTE SIGNUP SPLASH PAGE';
        altLink = '/signin';
        altText = `Already signed up? Sign in.`;
        break;
      case 'plainSignUp':
        header = buttontext = 'Sign Up';
        altLink = '/signin';
        altText = `Already signed up? Sign in.`;
        video = null;
        break;
      case 'signin':
        header = buttontext = 'Sign In';
        altLink = '/signup';
        altText = `Don't have an account? Sign Up.`;
        video = null;
        break;
      default:
        console.log("formType isn't catching in auth_form");
    }

    let errors = this.props.errors.map( (err, idx) => <li key={idx}>{err}</li> );

    return (
        <div className="entireformpage">
          <h1>{header}</h1>

          {video}
          <div className="centerPanel">
            <form onSubmit={this.handleSubmit}>
              <label>Email:
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.receiveField('email')}>
                </input>
              </label>

              <label>Password:
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.receiveField('password')}>
                </input>
              </label>

              <ul>
                {errors}
              </ul>

              <input type="submit" value={buttontext}></input>
              <Link to={altLink}>{altText}</Link>
            </form>
            <button onClick={this.loginAsGuest}>Sign In as Guest</button>
          </div>
        </div>
    );
  }
}

export default AuthForm;
