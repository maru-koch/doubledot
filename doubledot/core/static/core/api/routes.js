import axios from 'axios'
import Cookie from 'js-cookie'

// csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
// const csrftoken = Cookies

const csrftoken = Cookie.get('csrftoken');

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