// import React from 'react';
// import { Link } from 'react-router';
// import * as splashContent from './splash_form_content';
// import SplashSidebar from './splash_sidebar';
// import Modal from 'react-modal';
//
// class AuthForm extends React.Component {
//   constructor(props) {
// 		super(props);
// 		this.state = {
// 			email: "",
// 			password: ""
// 		};
//
//     this.state = {
//       modalIsOpen: false
//     };
//
//     this.openModal = this.openModal.bind(this);
//     this.afterOpenModal = this.afterOpenModal.bind(this);
//     this.closeModal = this.closeModal.bind(this);
//
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.receiveField = this.receiveField.bind(this);
// 		this.loginAsGuest = this.loginAsGuest.bind(this);
//   }
//
//   openModal() {
//     this.setState({modalIsOpen: true});
//   }
//
//   afterOpenModal() {
//   }
//
//   closeModal() {
//     this.setState({modalIsOpen: false});
//   }
//
//   componentWillReceiveProps(newProps) {
//     if (this.props.location.pathname !== newProps.location.pathname) {
//       this.setState({email: "", password: ""});
// 			if (this.props.errors.length > 0) {
// 				this.props.receiveErrors([]);
// 				console.log('ERRORS STORED IN STATE CLEARED');
// 			}
//     }
//   }
//
//   receiveField(field) {
//     return (e) => (
//       this.setState({[field]: e.target.value})
//     );
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.processForm(this.state)
// 			.then(() => this.props.router.push('/home'));
//   }
//
// 	loginAsGuest() {
// 		this.props.signInAsGuest()
// 			.then(() => this.props.router.push('/home'));
// 	}
//
//   // splashSidebar() {
//   //   debugger
//   //   if (this.props.splashSidebar) {
//   //     this.props.stopSplashSidebar();
//   //   } else {
//   //     this.props.startSplashSidebar();
//   //   }
//   // }
//
//   componentWillMount() {
//     Modal.setAppElement('body');
//   }
//
//   render() {
//     // const customStyles = {
//     // content : {
//       // top                   : '0',
//       // left                  : '50%',
//       // right                 : '0',
//       // bottom                : 'auto',
//       // // marginRight           : '-50%',
//     //   transform             : 'translate(-50%, -50%)',
//     //   transition: 'all 10s ease 0s',
//     //   }
//     // };
//
//     let header, altLink, altText, buttontext,
//       backgroundImg, splashMessage, splashFooter, splashSidebar;
//
//     switch (this.props.formType) {
//       case 'splashSignUp':
//         buttontext = 'SIGN UP FOR FREE';
//         altLink = '/signin';
//         altText = `Sign in`;
//         backgroundImg = splashContent.backgroundImg;
//         splashMessage = splashContent.splashMessage;
//         splashFooter = splashContent.splashFooter;
//         break;
//       case 'plainSignUp':
//         buttontext = 'Sign Up';
//         altLink = '/signin';
//         altText = (<div><p>Already signed up?</p><p>Sign In</p></div>);
//         [backgroundImg, splashMessage, splashFooter] = [null, null, null];
//         break;
//       case 'signin':
//         buttontext = 'Sign In';
//         altLink = '/signup';
//         altText = (<div><p>Don't have an account?</p><p>Sign Up</p></div>);
//         [backgroundImg, splashMessage, splashFooter] = [null, null, null];
//         break;
//       default:
//         console.log("formType isn't catching in auth_form");
//     }
//
//     if (this.props.formType === 'splashSignUp') {
//         header = (
//           <header>
//             <div className="navbarLeft">
//               <img src='/images/N.png'></img>
//               <h1>NIFTYNOTE</h1>
//             </div>
//             <div className="navbarRight">
//               <Link to={altLink}>{altText}</Link>
//               <i onClick={this.openModal} className="fa fa-bars" aria-hidden="true"></i>
//             </div>
//           </header>
//         );
//     } else {
//         splashSidebar = null;
//
//         header = (
//           <div className="plainHeader">
//             <img src='/images/N.png'></img>
//             <h1>{buttontext}</h1>
//           </div>
//         );
//     }
//
//     let errors = this.props.errors.map( (err, idx) => <li key={idx}>{err}</li> );
//
//     return (
//         <div className="entireFormPage">
//           {header}
//
//           <div className="centerPanelContainer">
//             {backgroundImg}
//             <div className="centerPanel">
//
//               {splashMessage}
//
//               <form onSubmit={this.handleSubmit}>
//                   <input
//                     type="text"
//                     value={this.state.email}
//                     placeholder="Email"
//                     onChange={this.receiveField('email')}>
//                   </input>
//
//                   <input
//                     type="password"
//                     value={this.state.password}
//                     placeholder="Password"
//                     onChange={this.receiveField('password')}>
//                   </input>
//
//                 <ul>
//                   {errors}
//                 </ul>
//
//                 <input type="submit" value={buttontext}></input>
//               </form>
//
//               <span className="lineforOR">
//                 <span className="line"></span>
//                   <text id='ortextidforplainform'>or</text>
//                 <span className="line"></span>
//               </span>
//
//
//               <button onClick={this.loginAsGuest}>Sign In as Guest</button>
//
//               </div>
//             </div>
//             {splashFooter}
//
//             <Link id="plainFormAltLink" to={altLink}>{altText}</Link>
//
//             <Modal
//               isOpen={this.state.modalIsOpen}
//               onAfterOpen={this.afterOpenModal}
//               onRequestClose={this.closeModal}
//               className="modal"
//               OverLayclassName="overlay"
//               contentLabel="Example Modal"
//               transition={}
                //  style={{
                //           overlay: {
                //             backgroundColor: 'papayawhip'
                //           },
                //           content: {
                //             color: 'lightsteelblue'
                //           }
                //         }}
//             >
//
//             <SplashSidebar />
//           </Modal>
//
//           </div>
//     );
//   }
// }
//
// export default AuthForm;

// const customStyles = {
//     overlay : {
//       position          : 'fixed',
//       top               : 0,
//       left              : 0,
//       right             : 0,
//       bottom            : 0,
//       backgroundColor   : 'transparent'
//     },
//     content : {
//       position                   : 'absolute',
//       top                        : '0',
//       left                       : '0',
//       right                      : '0',
//       bottom                     : '0',
//       border                     : '1px solid #ccc',
//       background                 : '#fff',
//       overflow                   : 'auto',
//       WebkitOverflowScrolling    : 'touch',
//       borderRadius               : '4px',
//       outline                    : 'none',
//       padding                    : '20px'
//     }
//   };
