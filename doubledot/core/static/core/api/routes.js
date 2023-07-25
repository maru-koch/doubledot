import axios from 'axios'
import Cookie from 'js-cookie'
import { gapi } from "gapi-script";
import { gapi_env } from '../constants/gapi_config';


const csrftoken = Cookie.get('csrftoken');

// const calendarID = gapi_env.REACT_APP_CALENDAR_ID;
// const apiKey = gapi_env.REACT_APP_GOOGLE_API_KEY;
// const accessToken = gapi_env.REACT_APP_GOOGLE_ACCESS_TOKEN;

const calendarID = "b55a2eb39bbda1f9c08760ec78b66f7a3b7d5995385c248c2805ee54793210f7@group.calendar.google.com";
const apiKey = gapi_env.REACT_APP_GOOGLE_API_KEY;
const accessToken = "ya29.a0AbVbY6OC3VY7KnkMeuTj8ilpMnDLACfMHzptD-P-walhmIwrUny7Ef5KO440b5X-UbvPPoAB5AWxTOWPffvAx5gc2_u0ysqZiYrssu63uY6wTFOUnJGxuLPkt2McvdCgBDp1dsw9cIqv8sf3z1ATZqrS6f6sS98aCgYKAXgSARMSFQFWKvPlaKWL9Mpzcrc1OYMyY-mT5A0166"

const client = axios.create({
    baseURL:'http://127.0.0.1:8000/',
    headers:{
        'Content-Type':'application/json',
        'X-CSRFToken': csrftoken
    }
})

export const endpoints={
    sendEmail: async (formData)=>{
        const res = await client.post('enquiries', formData)
        return res
    }
}


export const schedule_=(event)=>{

    // Initiates google meet and Adds event to calender

    const path = `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`;
    
    // const path = `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`;

    const handleSuccess=(res)=>{
        return [true, res]
    }

    const handleError=(err)=>{
        return [false, err]
    }

    const initiate=()=>{
      gapi.client.request({
        path: path, 
        method: "POST", 
        body: event, 
        headers: {"Content-type": "application/json",Authorization: `Bearer ${accessToken}`},
        }).then(handleSuccess, handleError);
    }

    gapi.load("client", initiate);

  }

  const gapi_client = axios.create({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  });

  export const scheduleEvent= async(event)=>{
    try{
        const url= `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events?conferenceDataVersion=1`
        const res = await gapi_client.post(url, event)
        console.log(res)
    }catch(err){
        console.log(err)
    }
   
  }