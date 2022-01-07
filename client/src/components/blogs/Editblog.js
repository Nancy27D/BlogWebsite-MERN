import axios from "axios";
import React,{useEffect, useState,} from "react";
import { Link, useParams,useNavigate } from "react-router-dom";

const Editblog = () => {
  const [post, setPost] = useState({
      title: "",
      author: "",
      desc: "",
    });
    const {title,author,desc}=post
    const navigate= useNavigate()


    const handleChange=(e)=>{
      console.log(e.target.value);
      setPost({ ...post, [e.target.name]: e.target.value }); 
    }
    useEffect(() => {
      getpostdetails()
    }, [])
  
    const {id}= useParams("");
  console.log(id)
  
    const getpostdetails = async ()=>{
      const postdetails = await axios.get(`http://localhost:5000/api/blog/getblog/${id}`);
      setPost(postdetails.data)
      console.log(postdetails.data)
    }
    const updatepost= async(e)=>{
      e.preventDefault();
      //url= `http://localhost:2000/api/updateuser/${id}
      const postdata= await axios.patch(`http://localhost:5000/api/blog/updateblog/${id}`,post);
      setPost(postdata.data);
     navigate("/home",{replace:true})

     
    }

  return (
    <div>
      <div>
        <Link to="/"> Home </Link>
        <div className="container">
          <h3 className="mt-3">Edit Your Blog</h3>

          <form className="mt-3">
            <div className="row">
              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputEmail1" class="form-label">
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  class="form-control"
                  value={author}
                  onChange={handleChange}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3  col-lg-6 col-md-6 col-12">
                <label for="" class="form-label">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleChange}
                  // onChange={(e) => {
                  //   editData.title = e.target.value;
                  //   seteditData({ ...editData });
                  // }}
                  // value={editData ? editData.title : ""}
                  class="form-control"
                />
              </div>

              <div class="mb-3 ">
                <label for="exampleInputPassword1" class="form-label">
                  Post Description
                </label>
                <textarea
                  name="desc"
                  className="form-control"
                  cols="30"
                  rows="3"
                  value={desc}
                  onChange={handleChange}
                  // onChange={(e) => {
                  //   editData.post = e.target.value;
                  //   seteditData({ ...editData });
                  // }}
                  // value={editData ? editData.desc : ""}
                ></textarea>
              </div>
              <button
                type="submit"
                onClick={updatepost}
                class="btn btn-primary"
              >
                Submit
              </button>
              <button
                // onClick={() => navigate("/home")}
                type="click"
                class="btn btn-danger mt-3"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editblog;
