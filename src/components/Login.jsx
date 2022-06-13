import React,{useState} from "react";
//import {ShowPost} from './ShowPost'
export const Login = () => {
  const [loginData, setLoginData]=useState({
    username:'',
    pass:''
  })
  const hadleLogin=(e)=>{
    const { name, value}=e.target;
    setLoginData({
      ...loginData, [name] : value
    })
    console.log("LLLL", loginData)
  }
  const loginUser =()=>{
    let data = JSON.parse(localStorage.getItem("loginData"))
    console.log("DDDDDDDDDDDDDD ", data)
   const {userName, password}=data;
   const {username, pass}=loginData;
   console.log("Login data : ", loginData, '\n****', userName, username, '\n####### pass ', password, pass);
   if(userName==username&&pass==password){
      window.alert("login sucees")
   }else{
    window.alert("login fail please check login details")

   }
  }
  const {username, pass   } = loginData;
  return (
    <div>
      Login
      <div>
        <p>User Name : </p>
        <input
          onChange={hadleLogin}
          type="text"
          name="username"
          value={username}
        />
      </div>
      <div>
        <p>Password </p>
        <input
          onChange={hadleLogin}
          type="text"
          name="pass"
          value={pass}
        />
      </div>
      <div>
        <button onClick={loginUser}>loginUser</button>
      </div>
      <div>
      </div>
      <div>

      </div>
    </div>
  );
};