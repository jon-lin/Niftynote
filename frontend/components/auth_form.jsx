import React from 'react';
import { Link } from 'react-router';

class AuthForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.receiveField = this.receiveField.bind(this);
    this.plainForm = this.plainForm.bind(this);
    this.splashForm = this.splashForm.bind(this);
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
    this.props.processForm(this.state).then(() => this.props.router.push('/home'));
  }

	plainForm() {
		let text, altLink, altText;

		if (this.props.formType === 'signin') {
				text = 'Sign In';
				altLink = '/signup';
				altText = `Don't have an account? Sign Up.`;
		} else {
				text = 'Sign Up';
				altLink = '/signin';
				altText = `Already signed up? Sign in.`;
		}

		let errors = this.props.errors.map( (err, idx) => <li key={idx}>{err}</li> );

		return (
				<div>
					<h1>{text}</h1>

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

					<Link to={altLink}>{altText}</Link>
				</div>
		);
	}

	splashForm() {
		let errors = this.props.errors.map( (err, idx) => <li key={idx}>{err}</li> );
		let test = (
				<div>
					<h1>NIFTYNOTE SIGNUP SPASH PAGE</h1>

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

						<input type="submit" value="SIGN UP FOR FREE"></input>
					</form>

					<ul>
						{errors}
					</ul>

					<Link to='/signin'>Or Sign In Here</Link>
				</div>
		);
		return test
	}

  render() {
		return this.props.formType === 'splashSignUp' ? this.splashForm() : this.plainForm()
  }
}

export default AuthForm;
