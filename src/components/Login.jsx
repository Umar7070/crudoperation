import React, { useState } from "react";
import "../css/login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [record, setRecord] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = { ...formData, id: new Date().getTime().toString() };
    setRecord([...record, newItem]);
    console.log(record);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="form">
          <div className="form_container">
            <h1>Login</h1>
            <div className="input_user">
              <label htmlFor="">User Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="enter your name"
                autoComplete="off"
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="">User Password</label>
              <input
                type="password"
                name="password"
                onChange={handleInput}
                value={formData.password}
                placeholder="enter your password"
              />
            </div>
            <div className="login_btn">
              <button>Login</button>
              <button>Sign Up</button>
              <button>Cancle</button>
            </div>
          </div>
        </div>
      </form>
      {record.map((curEle) => {
        return (
          <div>
            <p>{curEle.name}</p>
            <p>{curEle.password}</p>
          </div>
        );
      })}
    </>
  );
};

export default Login;
