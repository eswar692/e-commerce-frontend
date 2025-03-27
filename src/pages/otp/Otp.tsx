import React, { useState } from 'react';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
import { toastMessage } from '@/utils/toast';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { userLogin, userOtpVerify, userRegister } from '@/utils/apiRoutes';
  

const Otp: React.FC = () => {
    const navigate = useNavigate()
    const lacation = useLocation();
    const [otp, setOtp] = useState<string>('');

    const handleOtpChange = (value: string) => {
        if (!/^\d*$/.test(value)) {
          toastMessage('failed', 'Please enter only numbers');
          return;
        }
        setOtp(value);
      };

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        if (otp.length !== 6) {
          toastMessage('failed', 'Please enter 6 digit OTP');
          return;
        }
        //API logic to verify OTP
        try {
            const { name, email, password } = lacation.state;
            const { data } = await axios.post(userOtpVerify, { email, otp }, { withCredentials: true });
            if (data.success) {
                console.log(data);
                toastMessage('success', 'OTP verified successfully')

                const response = await axios.post(userRegister, {name, email, password }, { withCredentials: true });
                if(response.data.success){
                    toastMessage('success', 'Login success')
                   
                    if (response.data.success) {
                        toastMessage('success', 'Registration success')
                        navigate('/shop/home')
                    }
                }
            } else {
                toastMessage('failed', 'Invalid OTP')
            }

            
        } catch (error) {
            toastMessage('failed', (error as any).response.data.message || (error as any).message || 'Something went wrong')
        }

        
            
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
            <h2>Enter OTP</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>
                <InputOTP 
                    maxLength={6} 
                    className='rounded-none'
                    value={otp}
                    onChange={handleOtpChange}
                    pattern="[0-9]*"
                    inputMode="numeric"
                    >
                    <InputOTPGroup className='gap-1  rounded-none'>
                        <InputOTPSlot index={0} className='w-10 border-2 border-black/30 !rounded-sm '/>
                        <InputOTPSlot index={1} className='w-10 border-2 border-black/30 !rounded-sm'/>
                        <InputOTPSlot index={2} className='w-10 border-2 border-black/30 !rounded-sm'/>
                        <InputOTPSeparator />
                        <InputOTPSlot index={3} className='w-10 border-2 border-black/30 !rounded-sm'/>
                        <InputOTPSlot index={4} className='w-10 border-2 border-black/30 !rounded-sm'/>
                        <InputOTPSlot index={5} className='w-10 border-2 border-black/30 !rounded-sm'/>
                    </InputOTPGroup>
                </InputOTP>

                </div>
                
                <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                    Submit
                </button>
            </form>
            
        </div>
    );
};

export default Otp;