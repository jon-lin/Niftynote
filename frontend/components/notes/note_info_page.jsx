import React from 'react';

class NoteInfoPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.note.title}</h1>
         <ul>
           <li>{this.props.note.created_at}</li>
           <li>{this.props.note.updated_at}</li>
         </ul>
         <button onClick={this.props.closeModal}>CLOSE</button>
      </div>
    );
  }
}

export default NoteInfoPage;
