import axios from "axios"

const instance = axios.create({baseURL:'https://reqres.in/api'})

export const fetchUserList = async () => {
    const response = await instance.get('/users')
    return response.data
}