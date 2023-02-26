import { Button, Form, Input } from "antd";
import React from "react";
import toast from "react-hot-toast";
import {  useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import image from '../assets/login-image.jpg';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/login", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.data);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    <div style={{ backgroundImage:`url(${image})`,backgroundSize: "cover",
    height: "100vh", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div className="authentication-form card-1 p-3">
        <h1 className="card-title">Sign in</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>

          
          <Button className="primary-button my-2 full-width-button" htmlType="submit">
            LOGIN
          </Button>

          <Link to="/register" className="anchor mt-2">
            Don't have an account Sign up here
          </Link>
         
        </Form>
      </div>
    </div>
   
  );
}

export default Login;
