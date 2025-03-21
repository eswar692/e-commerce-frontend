import { useState } from 'react';
import { toast } from 'sonner';
import { Eye, EyeOff } from 'lucide-react';
import {toastMessage} from '@/utils/toast';
import axios from 'axios';
import { userRegister } from '@/utils/apiRoutes';
// import apiClient from '@/utils/api';



interface FormData {
    name: string;
    email: string;
    password: string;
}

const RegisterLayout= () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', password: '' });

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleChange = (e :React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateEmail = (email: string): boolean => {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    };

    const validatePassword = (password: string): boolean => {
        return /^(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password);
    };

    const registerHandler = async(e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name.trim()) {
             return toastMessage('failed', 'Name is required');
        }
        if (!formData.email.trim() || !validateEmail(formData.email)) {
            return toastMessage("failed",'Please enter a valid email address.');
        }
        if (!formData.password.trim() || !validatePassword(formData.password)) {
            return toastMessage('failed','Password must be at least 8 characters long and include a special character.');
        }

        
        // API call logic ekkada ravali 

        try {
            
             const response = await axios.post(userRegister,{name:formData.name, email:formData.email, password:formData.password}, {withCredentials:true})
             console.log(response.data)
             if(response.status === 201){
             toastMessage('success', "Login successfully")
                setFormData({ name: '', email: '', password: '' })
             }

        } catch (error) {
            console.log(error)
            const message = (error as any)?.response.data.message || (error as any)?.message || "Internet error";

            toastMessage('failed', message)
            
        }
    };

    return (
        <div >
          <div className='flex justify-center flex-col'>
            <div className='py-5 bg-blue-400'><h3 className='text-center font-bold text-2xl text-white stroke-text'>Pro Daddy Agency</h3></div>
            <div>
              <h3 className='text-center pt-5 '>For new User Create Account</h3>
              <h3 className='text-center text-sm font-[Poppins] mt-[-2px]'>Have Account <span className='text-blue-800 '><a href='/auth/login'>Login</a></span></h3>
            </div>
          </div>

          <div className="max-w-md mx-auto p-6 ">
              <form onSubmit={registerHandler} className="space-y-4">
                  <div className='border-2 border-black/30 rounded '>
                      <input
                          type="text"
                          name="name"
                          placeholder="Enter Name"
                          className="w-full p-2 focus:outline-none "
                          value={formData.name}
                          onChange={handleChange}
                      />
                  </div>

                  <div className='border-2 border-black/30 rounded' >
                      <input
                          type="email"
                          name="email"
                          placeholder="Enter Email"
                          className="w-full p-2 focus:outline-none"
                          value={formData.email}
                          onChange={handleChange}
                      />
                  </div>

                  <div className="relative border-2 border-black/30 rounded">
                      <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          placeholder="Enter Password"
                          className="w-full p-2 focus:outline-none"
                          value={formData.password}
                          onChange={handleChange}
                      />
                      <button
                          type="button"
                          className="absolute inset-y-0 right-3 flex items-center"
                          onClick={togglePasswordVisibility}
                      >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                  </div>

                  <button
                      type="submit"
                      className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                  >
                      Submit
                  </button>
              </form>
          </div>
          <div>

          </div>
        </div>
    );
};

export default RegisterLayout;
