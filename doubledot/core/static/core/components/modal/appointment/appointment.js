
import React from 'react';
import { ScheduleMeeting } from 'react-schedule-meeting';
import classes from './appointment.module.css'
import { useState, useEffect } from 'react';
import './schedule.css'

import { gapi_env } from '../../../constants/gapi_config';
import { scheduleEvent } from '../../../api';

let event = {
  summary: "Appointment with Doubledot",
  location: "Virtual / Google Meet",
  description: "Free consultation with Doubledot Technologies",
  start: {
    dateTime: "",
    timeZone: "GMT+01",
  },
  end: {
    dateTime: "",
    timeZone: "GMT+01",
  },
  recurrence: [],
  attendees: [
    { email: 'nwokochafranklyn@gmail.com'}, 
    // { email: 'nwokocha.maruche@gmail.com'}
  ],

  reminders: {
    useDefault: true,
  },
  conferenceData: {
    createRequest: {
      conferenceSolutionKey: {
        type: 'hangoutsMeet',
      }
      // requestId: 'x1234567bhn',
    },
  },
};


export const ScheduleConsultation =()=>{
  // this generates basic available timeslots for the next 6 days

  const [event_, setEvent] = useState({});
  const [email, setEmail] = useState({})
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [show, setShowAppointment] = useState(false)

  const handleEmailChange=(e)=>{
    // saves the email from the input
    console.log(email)
    setEmail({...email, [e.target.name]:e.target.value})
  }

  const getDateTime=(date)=>{
      // Gets the date and time schedule by the user.
      // displays the appointment container when date and time are selected

      const dateTime = date['startTime']
      const year = dateTime.getFullYear()
      const month = dateTime.getMonth()
      const day = dateTime.getDate()
      const hour = dateTime.getHours()
      const minutes = dateTime.getMinutes()
      const timezone = dateTime.getTimezoneOffset()
      const utcdate = dateTime.getUTCDate()

      // SET DATE AND TIME
      setDate(`${year}-${month.toString().length < 2? `0${month}`: month}-${day.toString().length < 2? `0${day}`: day}`)
      setTime(`${hour.toString().length < 2? `0${hour}`: hour}:${minutes.toString().length < 2? `0${minutes}`: minutes}:00`)
      
      setShowAppointment(true)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    // adds user's email to the array of attendees
    console.log(email)
    if (email){
      event_.attendees.push(email)
    }
    
    event_.start['dateTime'] = `${date}T${time}`
    event_.end['dateTime']= `${date}T${time}`

    setEvent({...event_, [event_.attendees]:event_.attendees,  [event_.start['dateTime']] :`${date}T${time}`, [event_.end['dateTime']]:`${date}T${time}`})
    // schedules the event
    console.log(event_)
    let res = scheduleEvent(event_)

      if (res.status===200){
        console.log("code:",res.status)
        sendEmail(res.data)
      }
  }

  const sendEmail=(data)=>{
    const payload = {
      email: data['attendees'],
      subject: data['summary'],
      description: data['description'],
      date: date,
      time: time,
      meetId:'exidaldls;;s'

    }
  }
  // Sets available days. # number of days from the current date
  const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
    return {
      id,
      startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)),
      endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(17, 0, 0, 0)),
    };
  });

  useEffect(() => {
    // Set the initial event on page load
    setEvent(event)
  }, [event]);

  // COMPONENT
  return (
    <div className={classes.appointment_container}>
        <div className={classes.appointment_wrapper}>
          <form className={classes.appointment_header} onSubmit={handleSubmit}>
              <div className={classes.appointment_header_email}>
                  <input name='email' defaultValue={'nwokocha.maruche@gmail.com'} type='email' placeholder='Please Enter your email address' onChange={(e)=>handleEmailChange(e)}/>
              </div>
              <div className={classes.appointment_confirm}>
                {show? 
                <div className={classes.appointment_confirm_datetime}>
                  <div className={classes.appointment_confirm_appointment}>
                      <h5>Appointment</h5>
                      <div>
                        <div style={{display:'flex', justifyContent:'', alignItems:'center'}}>
                          <p>Date</p><p className={classes.appointment_confirm_date}>{date}</p>
                        </div>
                        <div style={{display:'flex', justifyContent:'', alignItems:'center'}}>
                          <p>Time</p><p className={classes.appointment_confirm_date}>{time}</p>
                        </div>
                      </div>
                  </div>
                  <button type='submit'>Confirm Appointment</button>
                </div>
                :
                null}
                <button className={classes.appointment_close_btn}><i className='fas fa-close'></i></button>
              </div>
          </form>
          <div>
            <ScheduleMeeting
                borderRadius={10}
                primaryColor='#ea7822'
                skipConfirmCheck={false}
                // eventDurationInMinutes={30}
                availableTimeslots={availableTimeslots}
                onStartTimeSelect={getDateTime}
                startTimeListStyle='scroll-list'
              />
            
          </div>
          {/* <div className=''>
            <button className='btn'>Book Appointment</button>
          </div> */}
        </div>
    </div>
  );
}