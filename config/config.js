import axios from "axios"

export const IP_ADDRESS = '192.168.88.231'

export const model = axios.create(
    {
        baseURL: "http://192.168.88.17:3000/api"
    }
)