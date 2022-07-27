import axios from "axios"

export const fetchUserList = async () => {
    const response = await axios.get('https://reqres.in/api/users');
    return response.data
}