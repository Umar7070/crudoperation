import React, { useuserContext, useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import { UserContext } from "./Context";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = () => {
  const contextData = useContext(UserContext);
  const {
    handleInput,
    changeData,
    name,
    email,
    editItem,
    toggle,
    handleImageUpload,
  } = contextData;

  return (
    <>
      <h2 className="px-5 my-2">Create</h2>

      <Form.Group className="mx-5" controlId="formBasicEmail">
        <Form.Label>Name </Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter name"
          value={email}
          onChange={handleInput}
          name="email"
        />
      </Form.Group>
      <Form className="mx-5 my-2">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={name}
            onChange={handleInput}
            name="name"
          />
          <div className="img_box  my-3">
            <h2 className="text-danger my-2">Upload image</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="my-3"
            />
          </div>
        </Form.Group>
        {toggle ? (
          <Link to="/read" className="padding">
            <button className="btn btn-primary" onClick={changeData}>
              Add Todo
            </button>
          </Link>
        ) : (
          <Link to="/read">
            <button className="btn btn-danger mx-3" onClick={editItem}>
              Update Todo
            </button>
          </Link>
        )}
      </Form>
      <ToastContainer />
    </>
  );
};

export default Create;
