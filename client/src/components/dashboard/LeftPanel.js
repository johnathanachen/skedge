import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class LeftPanel extends Component {


  render() {

    return (
      <div className="left-panel">
        <p className="grayer">Sections</p>
        <Link className="sec-link" to="/dashboard"><i className="material-icons">event</i> Calendar</Link>
        <Link className="sec-link" to="/dashboard/employees"><i className="material-icons">person</i> Employees</Link>
        <a className="sec-link" href="#"><i className="material-icons">assessment</i> Statistics</a>
        <a className="sec-link" href="#"><i className="material-icons">library_books</i> Campaigns</a>
        <a className="sec-link" href="#"><i className="material-icons">contacts</i> Manage Contacts</a>
      </div>
    )
  }
}

export default LeftPanel;
