import React from 'react';
import { connect } from 'react-redux';

class NoteInfoPage extends React.Component {
  constructor(props) {
    super(props);
    this.roughSizeOfObject = this.roughSizeOfObject.bind(this);
  }

    roughSizeOfObject( object ) {

      var objectList = [];

      var recurse = function( value )
      {
          var bytes = 0;

          if ( typeof value === 'boolean' ) {
              bytes = 4;
          }
          else if ( typeof value === 'string' ) {
              bytes = value.length * 2;
          }
          else if ( typeof value === 'number' ) {
              bytes = 8;
          }
          else if
          (
              typeof value === 'object'
              && objectList.indexOf( value ) === -1
          )
          {
              objectList[ objectList.length ] = value;
              let i;
              for( i in value ) {
                  bytes+= 8; // an assumed existence overhead
                  bytes+= recurse( value[i] )
              }
          }

          return bytes;
      }

      return recurse( object );
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
           <li>Created: {(new Date(this.props.note.created_at).toLocaleString())}</li>
           <li>Updated: {(new Date(this.props.note.updated_at).toLocaleString())}</li>
           <li>Size: {this.roughSizeOfObject(this.props.note)} bytes</li>
           <li>Belongs to Notebook: {this.props.notebooksObj[this.props.note.notebook_id].title}</li>
         </ul>
         <button onClick={this.props.closeModal}>CLOSE</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notebooksObj: state.notebooks
  }
}

export default connect(mapStateToProps, null)(NoteInfoPage);
