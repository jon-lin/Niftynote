import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.receiveField = this.receiveField.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      this.props.receiveErrors([]);
      this.setState({email: "", password: ""});
    }
  }

  receiveField(field) {
    return (e) => (
      this.setState({[field]: e.target.value})
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.router.push('/'));
  }

  render() {
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


}

export default SessionForm;
