import React, { createContext, useState } from "react";
export const UserContext = createContext();
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Context = ({ children }) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  const { name, email } = input;
  const [imageUrl, setImageUrl] = useState(null);

  const [addTodo, setAddTodo] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [edit, setEdit] = useState();
  console.log(addTodo);

  const handleInput = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  // function is called ________________________
  const changeData = () => {
    if (!name && !email) {
      toast.success("please enter the data...", {
        position: "top-center",
      });
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        name: name,
        email: email,
        image: imageUrl,
      };
      setAddTodo([...addTodo, newItem]);
      console.log(addTodo);
      setInput("");
    }
  };

  const deleteItem = (element) => {
    const del = addTodo.filter((cur) => {
      return element.id !== cur.id;
    });
    setAddTodo(del);
  };

  // updateItem___________________________
  const updateItem = (ele) => {
    setToggle(false);
    setInput(ele);
    setEdit(ele.id);
  };

  // editItem ________________________________
  const editItem = () => {
    const editData = addTodo.map((curEle) => {
      return curEle.id === edit
        ? { ...curEle, name: name, email: email }
        : curEle;
    });
    setAddTodo(editData);
    setToggle(true);
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };
  // downloadClick to pdf_________________________


  return (
    <>
      <UserContext.Provider
        value={{
          input,
          handleInput,
          changeData,
          addTodo,
          deleteItem,
          email,
          name,
          editItem,
          toggle,
          updateItem,
          handleImageUpload,
        }}
      >
        {children}
      </UserContext.Provider>
      <ToastContainer />
    </>
  );
};

export default Context;
