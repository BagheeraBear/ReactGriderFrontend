import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1d6c5952cd1a8165627f9cb2350b6d6990a2a4296453db787b77c84083abe405'
    } 

})
