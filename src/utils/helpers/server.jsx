import axios from 'axios'
import configData from '../constants/config.json'
import { toast } from 'react-toastify'

const axiosClient = axios.create({
    baseURL: configData.SERVER_URL,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${localStorage.getItem('loginToken')}`
    },
})

axiosClient.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        if(error.response.data.message === "Forbidden"){
            return error
        }else{
            toast.error("Server Not Responding. Please Try Again Later", {
                position: toast.POSITION.TOP_CENTER,
            })
            return Promise.reject(error)
        }
    },
)

export default axiosClient