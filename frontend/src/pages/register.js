import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate,Link } from 'react-router-dom';
import { hashSync  } from 'bcryptjs';


function Register() {
    let {register,handleSubmit}=useForm();
    let navigate=useNavigate()
    

    function onRegisterFormSubmit(newUser){
        //hash pass
    let hashedpass=hashSync(newUser.password,5);
    //replace plain pass with hashed pass
    newUser.password=hashedpass


        //make http post req to create user in api
        fetch('http://localhost:4000/users',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newUser)
        })
        .then(res=>
            {
                if(res.status===201){
                    //navigate to login component
                    navigate('/login')
                }
            }
        )
        .catch(err=>console.log('err in registration',err))
    }

  return (
    <div>
      <h1 className='text-info  text-center display-3 '> User Registration Form</h1>
      <form action='' className='w-50 mx-auto mt-2 bg-light p-4' onSubmit={handleSubmit(onRegisterFormSubmit)}>
      <div className='mb-3'>
            <label htmlFor='username'  className='form-label'>Username</label>
        <input type='username' {...register('username')}  id='username' className='form-control mb-4' />
        </div>
        <div className='mb-3'>
            <label htmlFor='password'  className='form-label'>Password</label>
        <input type='password' {...register('password')}  id='password' className='form-control mb-4' />
        </div>

        <div className='mb-3'>
            <label htmlFor='email'  className='form-label'>Email</label>
        <input type='email' {...register('email')}  id='email' className='form-control mb-4' />
        </div>
        <button  type='submit' className='btn btn-success btn-info text-secondary d-block mx-auto fs-5 '>Register</button>

      </form>
      <p className='lead text-center'>Already Registered!
      <Link to='/login' className='fs-4 ps-2'>Login</Link></p>
    </div>
  );
}

export default Register