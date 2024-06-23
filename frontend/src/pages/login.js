import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const { register, handleSubmit } = useForm();
  const [otp, setOtp] = useState('');

  async function onEmailSubmit() {
    try {
      const response = await axios.post("http://localhost:4000/login/log", { email });
      if (response.status === 200) {
        setShowOtpInput(true);
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      // Handle error (e.g., display an error message)
    }
  }

  async function onLoginFormSubmit(data) {
    try {
      const response = await axios.post(`http://localhost:4000/login/verify/${email}`, { otp: data.otp });
      if (response.status === 200) {
        navigate('/userhome'); 
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      // Handle error (e.g., display an error message)
    }
  }

  return (
    <div>
      <h1 className='text-info text-center display-3'>Login</h1>
      <form className='w-50 mx-auto mt-2 bg-light p-4' onSubmit={handleSubmit(showOtpInput ? onLoginFormSubmit : onEmailSubmit)}>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>Email</label>
          <input
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            id='email'
            className='form-control mb-4'
            required
          />
        </div>
        {showOtpInput && (
          <div className='mb-3'>
            <label htmlFor='otp' className='form-label'>OTP</label>
            <input
              type='text'
              onChange={(e)=>setOtp(e.target.value)}
              id='otp'
              className='form-control mb-4'
              required
            />
          </div>
        )}
        <button type='submit' className='btn btn-success btn-info text-secondary d-block mx-auto fs-5'>
          {showOtpInput ? 'Verify OTP' : 'Send OTP'}
        </button>
      </form>
      {/* <p className='lead text-center'>
        New User!
        <Link to='/register' className='fs-4 ps-2'>Register Here!</Link>
      </p> */}
    </div>
  );
}

export default Login;
