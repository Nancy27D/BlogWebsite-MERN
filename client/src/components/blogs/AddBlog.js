import React,{useState} from "react";
import {useNavigate } from "react-router-dom";
import axios from 'axios'

const AddBlog = () => {
  const navigate = useNavigate();
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    desc: "",
  });
  const setData = (e) => {
    console.log(e.target.value);
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  const addBlog= async()=>{
  const data= await axios.post("http://localhost:5000/api/blog/addblog",newBlog)
  setNewBlog(data)
  // navigate("/home")
  }

  return <>
  <div>
  {/* <Link to="/"> Home </Link> */}
  <div className="container">
        

        <h3 className="mt-3">Add New Blog</h3>

        <form className="mt-3">
          <div className="row">
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" class="form-label">
           Author
            </label>
            <input
              type="text"  name='author'
              class="form-control" onChange={setData}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3  col-lg-6 col-md-6 col-12">
            <label for="" class="form-label">
              Title
            </label>
            <input
              type="text" name='title' onChange={setData}
              class="form-control"
            />
          </div>
        
          <div class="mb-3 ">
            <label for="exampleInputPassword1" class="form-label">
            Post Description
            </label>
           <textarea name="desc" className="form-control" cols='30' rows='3' onChange={setData}></textarea>
          </div>
          <button type="submit"   onClick={addBlog} class="btn btn-primary mb-2">Submit</button>
          <button type="submit"   onClick={()=>navigate('/home')} class="btn btn-primary">Back to home</button>
          </div>
        </form>
      </div>
    </div>
  </>;
};

export default AddBlog;
