import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import './css/Home.css'

const Home = () => {
  const [blogData, setBlogData] = useState([]);
  const [tokenData, setTokenData] = useState({});

  const navigate = useNavigate();
  const getBlogdata = () => {
    axios.get("http://localhost:5000/api/blog/getblogdata").then((res) => {
      setBlogData(res.data.data);
    });
  };
  useEffect(() => {
    getBlogdata();
    const decoded = jwt_decode(localStorage.getItem("token"));
    setTokenData({ ...decoded });
    console.log(decoded.username)
  }, []);

  const deleteblog = async (id) => {
    await axios.delete(`http://localhost:5000/api/blog/deleteblog/${id}`);
    getBlogdata();
  };

  return (
    <div className="home container-fluid   py-3 ">
      <h4>
        Welcome <span>{tokenData.name}</span>
      </h4>
      <NavLink to="/addblog" className="btn btn-primary mb-3">
        Add New Blog
      </NavLink>
      <div className="container">
        <div className="row ">
          {blogData.map((ele) => (
           <div style={{'width':'38rem'}} class=" jumbotron col-md-5 m-3 bg-light py-3 ">
    
                <div
                  class="text-primary d-flex align-items-center py-2 "
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src="https://source.unsplash.com//40x40/?random"
                    class="img-fluid rounded-circle"
                  />
                  <div className="ms-3">
                    <span>
                      <strong>{ele.author}</strong>
                    </span>
                    <span className="ms-2 text-dark">
                      <small>
                        {new Date(ele.Time).toLocaleString().slice(0, 25)}
                      </small>
                    </span>               
                  </div>
                </div>
                <hr class="my-2" />

                <h3 class="display-6">{ele.title}</h3>

                <p>{ele.desc}</p>
         
            
              <NavLink to={`/editblog/${ele._id}`}> 
                <button class="btn btn-primary mx-2" type="button">
                  Edit
                </button>
              </NavLink>
                                                
              <button
                onClick={() => deleteblog(ele._id)}
                type="click"
                class="btn btn-danger"
              >
                Delete
              </button>
         
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
{/* <div className="container-fluid d-flex justify-content-center">
<div className="row d-flex justify-content-center"> */}