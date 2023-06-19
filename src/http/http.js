import axios from 'axios'

export const URL = "http://localhost:7575"

const http = axios.create({
    baseURL: URL,
    withCredentials: true
})

export const registerApi = async (data) => await http.post("/user/register", data)
export const loginApi = async (data) => await http.post("/user/login", data)
export const logoutApi = async () => await http.get("/user/logout")
export const refresh = async (cancelToken) => await http.get("/user/refresh", { cancelToken: cancelToken })


/**
 * Interceptors for testing
 */



// http.interceptors.response.use((config) => {
//     return config
// }, async (error) => {

//     const originalRequest = error.config

//     if (error.response.status === 401 && originalRequest && !originalRequest._isRetry) {
//         originalRequest.isRetry = true

//         try {
//             await axios.get(`${URL}/user/refresh`, {
//                 withCredentials: true
//             })

//             return http.request(originalRequest)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     throw error
// })