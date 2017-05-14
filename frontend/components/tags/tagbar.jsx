import React from 'react';

class Tagbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='entireTagBar'>
        <i className="fa fa-tags" aria-hidden="true"></i>
        <input placeholder='New tag...'></input>
      </div>
    )
  }
}

export default Tagbar;
