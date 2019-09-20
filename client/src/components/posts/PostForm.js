import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-dom';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addPost } from '../../actions/postActions';

class PostForm extends Component {
  //constructor
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      errors { }
  }
}

render() {
  return (
    <div className="post-form mb-3">
      <div className="card card-info">
        <div className="card-header bg-info text-white">
          Say Somthing...
              </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <textarea className="form-control form-control-lg" placeholder="Create a post"></textarea>
            </div>
            <button type="submit" className="btn btn-dark">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
}

export default PostForm;