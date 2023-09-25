import axios  from 'axios'


const BASEURL = axios.create ({
    baseURL: process.env.REACT_APP_API_HG,
    headers: {
        'Content-Type': 'application/json',
    }

})

export default  BASEURL