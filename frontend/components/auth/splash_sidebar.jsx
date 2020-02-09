import React from 'react';
import { Link } from 'react-router';

class SplashSidebar extends React.Component {
  render() {
    return (
      <div className='splashSidebarContainer'>

        <div className='buttonContainer'>
          <button onClick={this.props.closeModal}>CLOSE</button>
        </div>

        <div className='splashSidebarLinks'>
          <div className='linksgroup1'>
            <Link to='/signin'>SIGN IN</Link>
            <Link to='/signup'>SIGN UP</Link>
          </div>

          <div className='linksgroup2'>
            <a href="https://github.com/jon-lin" target="_blank">Github</a>
            <a href="https://www.linkedin.com/in/jon-lin/" target="_blank">LinkedIn</a>
            <a href="https://drive.google.com/file/d/0B2wkz0QyfcNAem95ZGdEUEFnMFU/view?usp=sharing" target="_blank">Resume</a>
            <a href="https://www.jon-lin.com/" target="_blank">Website</a>
          </div>
        </div>

      </div>
    )
  }
}

export default SplashSidebar;
