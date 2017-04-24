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
            <a href="https://github.com/jclin2013">Github</a>
            <a href="https://www.linkedin.com/in/jclin2013/">LinkedIn</a>
            <a href="">Resume</a>
            <a href="">Website</a>
          </div>
        </div>

      </div>
    )
  }
}

export default SplashSidebar;
