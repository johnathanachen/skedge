import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';

import axios from 'axios';

import TopBar from '../TopBar';
import LeftPanel from '../LeftPanel';
import RightPanel from '../RightPanel';

import CampaignBox from './CampaignBox';

import './styles.css';

class Campaign extends Component {
  constructor(props) {
    super(props)

    this.state = {renderInfo : false}

  }

  componentDidMount() {
    axios.get('/api/current_business').then((res) => {
      this.setState({campaigns : res.data.business.campaigns})
    })
  }



  renderFields() {
    if (this.state.campaigns) {
      return (
        <div className="cal-container container-campaigns">
          <CampaignBox text={this.state.campaigns[0].text} active={this.state.campaigns[0].active} camp={this.state.campaigns[0].name} when={this.state.campaigns[0].when} title="Reminders" time="Hours before appointment" toolTipMsg="Send a text reminder to help prevent no-shows"/>
          <CampaignBox text={this.state.campaigns[1].text} active={this.state.campaigns[1].active} camp={this.state.campaigns[1].name} when={this.state.campaigns[1].when} title="Reviews" time="Hours after appointment" toolTipMsg="Send a text to encourage your clients to leave a review" />
          <CampaignBox text={this.state.campaigns[2].text} active={this.state.campaigns[2].active} camp={this.state.campaigns[2].name} when={this.state.campaigns[2].when} title="Revisits" time="Days after last appointment" toolTipMsg="Send a text to get clients back who haven't scheduled in a speccified time period"/>
          <CampaignBox text={this.state.campaigns[3].text} active={this.state.campaigns[3].active} camp={this.state.campaigns[3].name} when={this.state.campaigns[3].when} title="Promotions" time="Hours from now" toolTipMsg="Send a general promotional text"/>


          <div className="key-box">
          <div className="key-top-bar">
            <div>Key</div>
              <ReactTooltip id="key-info" place="top" type="dark" effect="solid">Use these in your campaign messages</ReactTooltip>
              <i data-tip="key-info" data-for='key-info' className="material-icons keyname-info">info</i>
            </div>
            <div className="key-table">

              <div className="key-titles">
                <p className="key-word"><b>*name*</b>:</p>
                <p className="key-word"><b>*employee*</b>:</p>
                <p className="key-word"><b>*business*</b>:</p>
                <p className="key-word"><b>*time*</b>:</p>
              </div>

              <div className="key-descriptions">
                <p className="key-word"> Name of Client</p>
                <p className="key-word">Name of Employee</p>
                <p className="key-word">Name of Business</p>
                <p className="key-word">Time of appointment</p>
              </div>

            </div>
          </div>

        </div>
      )
    } else {
      return (
        <div>
          Loading
        </div>
      )
    }
  }

  render() {
      return (

        <div className="row-this">

        <LeftPanel index3="active-sec"/>


         <div className="dash-con">
           <TopBar header="Campaigns"/>
            {this.renderFields()}

         </div>

         <RightPanel />





         </div>
      )
    }
  }



export default Campaign;
