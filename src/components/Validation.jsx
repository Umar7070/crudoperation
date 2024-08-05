import { useState } from "react";
import "../css/valid.css";

const Validation = () => {
  const [input,setInput]=useState({
    username:"",
    phone:"",
    password:"",
    email:"",


  })
  
  return (
    <>
      <h1 style={{ textAlign: "center", color: "navy" }}>Form Validation</h1>
      <div className="container">
        <form>
          <div className="username">
            <label htmlFor="">username</label>
            <input
              type="text"
              name="username"
              placeholder="enter username"
              autoComplete="off"
            />
          </div>

          <div className="username">
            <label htmlFor="">password</label>
            <input
              type="text"
              name="password"
              placeholder="enter password"
              autoComplete="off"
            />
          </div>
          <div className="username">
            <label htmlFor="">email</label>
            <input
              type="text"
              name="email"
              placeholder="enter email"
              autoComplete="off"
            />
          </div>
          <div className="username">
            <label htmlFor="">mobile</label>
            <input
              type="text"
              name="mobile"
              placeholder="enter mobile"
              autoComplete="off"
            />
          </div>
          <div className="username">
            <label htmlFor="">username</label>
            <input
              type="text"
              name="username"
              placeholder="enter username"
              autoComplete="off"
            />
          </div>
        </form>
        <div className="btn">
          <button type="submit">Submit </button>
        </div>
      </div>
    </>
  );
};
export default Validation;
