import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { compare, compareSync } from 'bcryptjs';
import { useNavigate } from 'react-router-dom';

function Login() {
    let navigate=useNavigate()
    let {register,handleSubmit}=useForm();
    function onLoginFormSubmit(userCredentialsObject){
        fetch(`http://localhost:4000/users?username=${userCredentialsObject.username}`,
            {method:"GET"})
            .then((res)=>res.json())
            .then((userObjArray)=>{
                if(userObjArray.length===0)
                    {
                        alert('INvalid username')
                    }
                    else{
                        //compare password
                       let result= compareSync(userCredentialsObject.password,userObjArray[0].password)
                       //if passwords are matched
                      
                        //navigate to dashboard by passing userobj as state
                        if(result===true)
                    {
                        navigate(`/user-dashboard/${userCredentialsObject.username}`,{state:userObjArray[0]})
                    }
                    else{
                        console.log('Invalid password')
                    }
                    }
            });
        
    }

  return (
    <div>
      <h1 className='text-info  text-center display-3 '> Login</h1>
      <form action='' className='w-50 mx-auto mt-2 bg-light p-4' onSubmit={handleSubmit(onLoginFormSubmit)}>
      <div className='mb-3'>
            <label htmlFor='username'  className='form-label'>Username</label>
        <input type='username' {...register('username')}  id='username' className='form-control mb-4' />
        </div>
        <div className='mb-3'>
            <label htmlFor='password'  className='form-label'>Password</label>
        <input type='password' {...register('password')}  id='password' className='form-control mb-4' />
        </div>
        <button  type='submit' className='btn btn-success btn-info text-secondary d-block mx-auto fs-5 '>Login</button>

      </form>
      <p className='lead text-center'>New User!
      <Link to='/register' className='fs-4 ps-2'>Register Here!</Link></p>
    </div>
  );
}

export default Login
