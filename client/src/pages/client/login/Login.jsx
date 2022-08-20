import React from "react";
import { useState } from "react";
import axios from "axios";
import "./login.scss";
import { Header } from "../../../components/header/Header";
import { Footer } from "../../../components/footer/Footer";
import { useDispatch } from "react-redux";
import { userSlice } from "../../../redux/userSlice";
import { Link, Navigate } from "react-router-dom";
import OAuth2Login from 'react-simple-oauth2-login';


export const Login = () => {
  const [check, setCheck] = useState(false)
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch()
  const handleLogin = () => {
    axios
      .post("auth/login", {
        username,
        password,
      })
      .then((res) => {
        if(!res.data.err){
          alert(res.data.message);
          dispatch(userSlice.actions.login(res.data.data[0]))  
          setCheck(true) 
        } else{
          alert(res.data.message);
        }
      });


  };
  const onSuccess = async (res)=>{
    const accessToken = res.access_token;
    const result = await fetch(`https://graph.facebook.com/me?field=id,name&access_token=${accessToken}`)
    const profile = await result.json();
    const fb_id = profile.id
    axios
    .post("auth/loginFB", {
      fb_id
    })
    .then((res) => {
      if(!res.data.err){
        alert(res.data.message);
        dispatch(userSlice.actions.login(res.data.data[0]))  
        setCheck(true) 
      } else{
        alert(res.data.message);
      }
    });
  }
  const onFailure = response => console.error(response);
 
  return (
    <div>
      <Header></Header>
      {check &&<Navigate  to="/" replace={true}/>}
      <div className="container">
          <div className="login-form">
            <input
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            placeholder="Username"
          />
          <input
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <button onClick={handleLogin}>Login</button>
          <div>
            <OAuth2Login
              buttonText="login with facebook"
              authorizationUrl="https://facebook.com/dialog/oauth"
              responseType="token"
              clientId="1205163773668722"
              redirectUri="http://localhost:3000"
              onSuccess={onSuccess}
              onFailure={onFailure}/>
          </div>
          </div>
        <Link to ={'/register'} style={{textDecoration:'none', color:'black'}}>
          <div className="toRegister">
            Bạn chưa có tài khoản? Đăng ký ngay
          </div>
        </Link>
        
      </div>
      <Footer></Footer>
    </div>
  
  );
};

