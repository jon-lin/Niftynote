import React from 'react';

class NoteInfoPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <div className="noteInfoHeader3">
          <figure>
            <i className="fa fa-info-circle" aria-hidden="true"></i>
            <text>NOTE INFO</text>
          </figure>
            <h1>{this.props.note.title}</h1>
        </div>

         <ul>
           <li>CREATED: {(new Date(this.props.note.created_at).toLocaleString())}</li>
           <li>UPDATED: {(new Date(this.props.note.updated_at).toLocaleString())}</li>
         </ul>
         <button onClick={this.props.closeModal}>CLOSE</button>
      </div>
    );
  }
}

export default NoteInfoPage;
