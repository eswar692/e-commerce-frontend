// backend all api routes

// User ki releted api routes
const baseUrl = import.meta.env.VITE_backend_base_url  
export const userRegister = `${baseUrl}/user/user-register`;
export const userLogin = `${baseUrl}/user/user-login`
export const userDetails = `${baseUrl}/user/user-get-details`
