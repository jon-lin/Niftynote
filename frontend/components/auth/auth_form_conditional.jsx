import React from 'react';
import AuthForm from './auth_form'

class AuthFormConditional extends React.Component {
	render() {
		let cssTag = (this.props.formType === 'splashSignUp') ? 'splashForm' : 'plainForm';

		return (<div className={cssTag}>
							<AuthForm {...this.props} />
						</div>)
	}
}

export default AuthFormConditional;
