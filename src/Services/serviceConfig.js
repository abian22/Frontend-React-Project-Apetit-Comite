import axios from "axios"

const api = axios.create({
    baseURL:'https://appetitcomite.onrender.com/api'
    //' https://real-backend-production.up.railway.app/'
    //'https://appetitcomite.onrender.com/api'
    // withCredentials: false,
    // headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    // }
})

export default api;