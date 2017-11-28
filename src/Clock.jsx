import React, { Component } from 'react';
import './App.css';


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    console.log('time', time);
    const seconds = Math.floor((time/1000) %60);
    const minutes = Math.floor((time/1000/60) %60);
    const hours = Math.floor(time/(1000*60*60) %24);
    const days = Math.floor(time/(1000*60*60*24));

    console.log('seconds', seconds, 'minutes', minutes, 'hours', hours, 'days', days);
  }



  render() {
    this.getTimeUntil(this.props.deadline);

    return (
      <div>
        <div className="Clock-days">{this.state.days} 14 days</div>
        <div className="Clock-hours">{this.state.hours} 30 hours</div>
        <div className="Clock-minutes">{this.state.minutes} 15 minutes</div>
        <div className="Clock-seconds">{this.state.seconds} 10 seconds</div>
      </div>
    )
  }
}

export default Clock;
