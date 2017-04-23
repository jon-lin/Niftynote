import React from 'react';

class SplashSidebar extends React.Component {
  render() {
    return (
      <div className='splashSidebarContainer'>
        <div className='splashSidebar'>
          <ul>
            <li>Hello</li>
            <li>this</li>
            <li>is</li>
            <li>a</li>
            <li>list</li>
          </ul>
        </div>
        <div className='splashSidebarEmptyBox'></div>
      </div>
    )
  }
}

export default SplashSidebar;
