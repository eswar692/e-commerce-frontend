import axios from 'axios'

const backendBaseUrl = import.meta.env.VITE_backend_base_url


const apiClient = ()=>{
    
    return axios.create({
        baseURL: backendBaseUrl,
        headers:{
            "Content-Type":"application/json",
        }

    })
}
export default apiClient;