import {useEffect,useState} from 'react';
import google from '../assets/google.svg';
import { NavLink } from 'react-router-dom';

const colors = {
  primary: "#060606",
  background: "#E0E0E0",
  disabled: "#D9D9D9"
};

export function Login(props) {
  const [errors,setErrors] = useState({})
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [data,setData] = useState([])

  useEffect(()=>{
    fetch("https://sl-backend-gpnt.onrender.com/login",{mode:"cors"})
    .then((res) => res.json())
    .then((data) => setData(data));
    console.log({data})
  },[]);
  console.log(data)

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!email && password == ""){
      setErrors({...errors,email:"Email is required",password:"Enter valid password"})
    }else if(password == ""){
      setErrors({...errors,email:"",password:"Password is required"})
    }else if(email == ""){
      setErrors({...errors,email:"Email is required",password:""})
    }
  }
  const handleChangeEmail = (e) =>{
    setEmail(e.target.value)
  }
  const handleChangePassword = (e) =>{
    setPassword(e.target.value)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" onSubmit={handleSubmit}>
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Welcome back</span>
          <span className="font-light text-gray-400 mb-8">
            Welcome back! Please enter your details
          </span>
          <div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input
              type="text" onChange={handleChangeEmail} value={email}
              className="w-full p-2 border hover:border-red-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
            />
            {errors.email && <div className='error'>Email is required</div>}
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password" autoComplete='off' onChange={handleChangePassword} value={password}
              name="pass"
              id="pass"
              className="w-full p-2 border hover:border-red-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
              {errors.password && <div className='error'>Password is required</div> }
          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Remember for 30 days</span>
            </div>
            <button className=" text-blue-500 py-1 underline underline-offset-4 text-xs">Forgot password</button>
          </div>
          <div>
          <NavLink to='/'>
            <button
              onClick={handleSubmit} className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
              Sign in
            </button>
          </NavLink>
          </div>
          <button
            className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
            <img src={google} alt="img" className="w-6 h-6 inline mr-2" />
            Sign in with Google
          </button>
          <div className="text-center text-gray-400">
            Don't have an account?
            <span className="font-bold text-black">Sign up for free</span>
          </div>
        </div>
      </div>
    </div>
  );
}
