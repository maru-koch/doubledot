import axios from 'axios'

const client = axios.create({
    baseURL:'http://127.0.0.1:8000/',
    headers:{
        'Content-Type':'application/json'
    }
})

export const endpoints={
    sendEmail: async (formData)=>{
        const res = await client.post('enquiry', formData)
        return res
    }
}