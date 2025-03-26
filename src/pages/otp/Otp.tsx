import React, { useState } from 'react';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
import { toastMessage } from '@/utils/toast';
  

const Otp: React.FC = () => {
    const [otp, setOtp] = useState<string>('');

    const handleOtpChange = (value: string) => {
        if (!/^\d*$/.test(value)) {
          toastMessage('failed', 'Please enter only numbers');
          return;
        }
        setOtp(value);
      };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (otp.length !== 6) {
          toastMessage('failed', 'Please enter 6 digit OTP');
          return;
        }
        //API logic to verify OTP
        console.log(otp)

        
            
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