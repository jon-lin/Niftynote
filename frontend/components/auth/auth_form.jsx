import React from 'react';
import { Link } from 'react-router';
import * as splashContent from './splash_form_content';
import Modal from 'react-modal';
import SplashSidebar from './splash_sidebar';

class AuthForm extends React.Component {
  constructor(props) {
		super(props);
		this.state = {email: "", password: "", modalIsOpen: false};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.receiveField = this.receiveField.bind(this);
		this.loginAsGuest = this.loginAsGuest.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});

  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
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
			.then(() => this.props.router.push('/home'));
  }

	loginAsGuest() {
		this.props.signInAsGuest()
			.then(() => this.props.router.push('/home'));
	}

  render() {
    let header, altLink, altText, buttontext,
      backgroundImg, splashMessage, splashFooter, splashSidebar;

    switch (this.props.formType) {
      case 'splashSignUp':
        buttontext = 'SIGN UP FOR FREE';
        altLink = '/signin';
        altText = `Sign in`;
        backgroundImg = splashContent.backgroundImg;
        splashMessage = splashContent.splashMessage;
        splashFooter = splashContent.splashFooter;
        break;
      case 'plainSignUp':
        buttontext = 'Sign Up';
        altLink = '/signin';
        altText = (<div><p>Already signed up?</p><p>Sign In</p></div>);
        [backgroundImg, splashMessage, splashFooter] = [null, null, null];
        break;
      case 'signin':
        buttontext = 'Sign In';
        altLink = '/signup';
        altText = (<div><p>Don't have an account?</p><p>Sign Up</p></div>);
        [backgroundImg, splashMessage, splashFooter] = [null, null, null];
        break;
      default:
        console.log("formType isn't catching in auth_form");
    }

    if (this.props.formType === 'splashSignUp') {
        splashSidebar = (<SplashSidebar closeModal={this.closeModal}/>);

        header = (
          <header>
            <div className="navbarLeft">
              <img src='/images/N.png'></img>
              <h1>NIFTYNOTE</h1>
            </div>
            <div className="navbarRight">
              <Link to={altLink}>{altText}</Link>
              <i onClick={this.openModal} className="fa fa-bars" aria-hidden="true"></i>
            </div>
          </header>
        );
    } else {
        splashSidebar = null;

        header = (
          <div className="plainHeader">
            <img src='/images/N.png'></img>
            <h1>{buttontext}</h1>
          </div>
        );
    }

    let errors = this.props.errors.map( (err, idx) => <li key={idx}>{err}</li> );

    return (
        <div className="entireFormPage">
          {header}

          <div className="centerPanelContainer">
            {backgroundImg}
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
                <span className="line"></span>
                  <text id='ortextidforplainform'>or</text>
                <span className="line"></span>
              </span>


              <button onClick={this.loginAsGuest}>Sign In as Guest</button>

              </div>
            </div>
            {splashFooter}

            <Link id="plainFormAltLink" to={altLink}>{altText}</Link>

              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                className="splashSidebarModal"
                style={{overlay: {backgroundColor: 'transparent'}}}
                contentLabel="splashSidebarLABEL"
              >

              {splashSidebar }
            </Modal>


          </div>
    );
  }
}

export default AuthForm;
