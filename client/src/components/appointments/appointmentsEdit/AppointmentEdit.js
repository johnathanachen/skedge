import React, { Component } from 'react';
import axios from 'axios';

import { reduxForm } from 'redux-form';


import { Link } from 'react-router-dom';

import TopBar from '../../dashboard/TopBar';
import LeftPanel from '../../dashboard/LeftPanel';
import RightPanel from '../../dashboard/RightPanel';

import { Input } from 'react-materialize'


let theAptId = window.location.href.split('').reverse().join('');
const aptI = theAptId.indexOf('/');

theAptId = theAptId.substring(0, aptI);
theAptId = theAptId.split('').reverse().join('');

const axiosUrl = '/api/appointment/' + theAptId;


class AppointmentEdit extends Component {


  state = {
    appointments: []
  }

  componentDidMount() {
    axios.get(axiosUrl).then((res) => {
      this.setState({ appointments : res.data })
      console.log(res.data);
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  render() {
    return (
      <div className="row-this higher">
        <LeftPanel wambo="active-sec" />

        <div className="container formFlex">
        <TopBar style={{paddingTop: '1.5rem', paddingBottom: '1.5rem'}} header="Edit Appointment" />

          <div className="inside">

            <form method="POST" action={'/api/appointment/edit/' + theAptId}>
              <label for="customer">Customer Name</label>
              <input type="text" name="customer" onChange={(event) => {this.setState({appointments: {customer: event.target.value}})}} value={this.state.appointments.customer}></input>
              <label for="employee">Employee</label>
              <input type="text" name="employee" onChange={(event) => {this.setState({appointments: {employee: event.target.value}})}} value={this.state.appointments.employee}></input>
              <label for="phone">Phone</label>
              <input type="text" name="phone" onChange={(event) => {this.setState({appointments: {phone: event.target.value}})}} value={this.state.appointments.phone}></input>
              <label for="Date">Date</label>
              <Input type="date" name="date" onChange={(event) => {this.setState({appointments: {start: event.target.value}})}} value={this.state.appointments.date}></Input>
              <label for="startTime">Start Time</label>
              <Input type="time" name="startTime" onChange={(event) => {this.setState({appointments: {startTime: event.target.value}})}} value={this.state.appointments.startTime}></Input>
              <label for="EndTime">End Time</label>
              <Input type="time" name="endTime" onChange={(event) => {this.setState({appointments: {endTime: event.target.value}})}} value={this.state.appointments.endTime}></Input>
              <label for="desc">Additional Notes</label>
              <Input type="text" name="desc" onChange={(event) => {this.setState({appointments: {desc: event.target.value}})}} value={this.state.appointments.desc}></Input>
              <Link to="/dashboard" className="red btn-flat white-text hoverable waves-effect waves-light">
                Cancel
              </Link>
              <button type="submit" className="green white-text btn-flat right waves-effect waves-light">
                Edit Appointment
                <i className="material-icons right">event_available</i>
              </button>

            </form>

          </div>

        </div>
        <RightPanel />
      </div>
    );
  }
}

export default AppointmentEdit
