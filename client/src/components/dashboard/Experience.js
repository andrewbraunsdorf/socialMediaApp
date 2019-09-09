import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Experience extends Component {
  render() {
    const experience = this.pros.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>{exp.from} - {exp.to}</td>
        <td><button className="btn btn-danger">Delete</button></td>
      </tr>
    ))
    return (
      <div>
        <h4 className="mb-4"></h4>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th></th>
            </tr>
            <tbody>
              {experience}
            </tbody>
          </thead>
        </table>
      </div>
    )
  }
}

export default connect(null)(withRouter(Experience));
