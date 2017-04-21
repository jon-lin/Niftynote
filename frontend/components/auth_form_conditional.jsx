import React from 'react';
import AuthForm from './auth_form'

class AuthFormConditional extends React.Component {
	render() {
		let authForm = () => (
				<AuthForm
				signInAsGuest={this.props.signInAsGuest}
				processForm={this.props.processForm}
				receiveErrors={this.props.receiveErrors}
				errors={this.props.errors}
				formType={this.props.formType}
				pathname={this.props.location.pathname}
				router={this.props.router}/>
			);

			// baseAuthData={...this.props}
			//consider using splat operator to transfer props

		let cssTag = (this.props.formType === 'splashSignUp') ? 'splashForm' : 'plainForm';

		return (<div className={cssTag}>{authForm()}</div>)
	}
}

export default AuthFormConditional;

	// if(splash){
	// 	return(
	// 		div className='splash-form'>
	// 			<SplashForm props={props}
	// 				prop1: asdf
	// 				prop2: asdfasdf
	//
	// 				/>
	// 		</div>
	// 	)
	// } else{
	// 	return(
	// 		<div className='plain-form'>
	// 			<SplashForm props={props}/<
	// 			</div>
	// 	)
	// }
	//
	// .someInputClass {
	//
	// }

	// plainForm() {
	//
	// 	);
	// }
	//
	// splashForm() {
	// 	let errors = this.props.errors.map( (err, idx) => <li key={idx}>{err}</li> );
	// 	return (
	// 			<div>
	// 				<h1>NIFTYNOTE SIGNUP SPASH PAGE</h1>
	//
	// 				<form onSubmit={this.handleSubmit}>
	// 					<label>Email:
	// 						<input
	// 							type="text"
	// 							value={this.state.email}
	// 							onChange={this.receiveField('email')}>
	// 						</input>
	// 					</label>
	// 					<br/>
	//
	// 					<label>Password:
	// 						<input
	// 							type="password"
	// 							value={this.state.password}
	// 							onChange={this.receiveField('password')}>
	// 						</input>
	// 					</label>
	// 					<br/>
	//
	// 					<input type="submit" value="SIGN UP FOR FREE"></input>
	// 				</form>
	//
	// 				<ul>
	// 					{errors}
	// 				</ul>
	//
	// 				<button onClick={this.loginAsGuest}>Sign In as Guest</button>
	//
	// 				<Link to='/signin'>Or Sign In Here</Link>
	// 			</div>
	// 	);
	// }
	//
  // render() {
	// 	return this.props.formType === 'splashSignUp' ? this.splashForm() : this.plainForm()
  // }
