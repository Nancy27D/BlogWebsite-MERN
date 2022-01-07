import React,{useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './css/Signup.css'

const Signup = () => {
const [input, setInput] = useState({
    username:"",
    name:"",
    email:"",
    password:""
})
const [errMsg,setErrMsg]=useState('')
const navigate = useNavigate();

    const formData=(e)=>{
setInput({...input,[e.target.name]:e.target.value})
    }

    const signUpHandler=()=>{
const Url='http://localhost:5000/api/signup';
axios.post(Url,input).then(res=>{
  console.log(res);
  setErrMsg(res.data.msg)
}).catch(err=> console.log(err))
    }

  useEffect(() => {
   if(localStorage.getItem('token')){
     navigate('/home')
   }
  }, [])
  return (
    <div className=" signup">
         <h1 style={{alignItems:"center"}}>Signup Please</h1>
      <form className="">
       
            <div class=" ">
            <label for="exampleInputEmail1" class="form-label">
              User Name
            </label>
            <input
              type="text"  name='username'
              class="form-control" onChange={formData}
            />
            </div>
            <div class="">
            <label class="form-label">
              Name
            </label>
            <input
              type="text"  name='name'
              class="form-control" onChange={formData}
            />
            </div>
            <div class=" ">
            <label for="exampleInputEmail1" class="form-label" >
              Email
            </label>
            <input
              type="email" name='email' onChange={formData}
              class="form-control"
              placeholder="xyz@gmail.com"
            />
          </div>
          <div class="mb-3 ">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password" name='password' onChange={formData}
              class="form-control"
            />
          </div>
          <div class="form-text text-danger">{errMsg}</div>
          <button type="submit"   onClick={signUpHandler} class="btn btn-primary signupButton">Submit</button>
      
      </form>
    </div>
  );
};

export default Signup;
