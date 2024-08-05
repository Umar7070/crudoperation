import React, { useState } from "react";
import "../css/todo.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Todo = () => {
  const [item, setItem] = useState();
  const [addTodo, setAddTodo] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [edit, setEdit] = useState();

  // addtask__________________________________________

  const addtask = () => {
    if (!item) {
      toast.success("please enter the todo", {
        position: "top-center",
      });
    } else {
      const newItem = { id: new Date().getTime().toString(), name: item };
      setAddTodo([...addTodo, newItem]);
      console.log(newItem);
      setItem("");
    }
  };

  // removeall_________________________________________

  const removeall = () => {
    setAddTodo([]);
    toast.success("cleare all", {
      position: "top-center",
    });
  };

  // deletTask________________________________________

  const deletTask = (ele) => {
    const del = addTodo.filter((cur) => {
      return ele.id !== cur.id;
    });
    toast.success("delete task completed ", {
      position: "top-center",
    });
    setAddTodo(del);
  };

  // editTodo ____________________________________________
  const editTodo = (ele) => {
    setToggle(false);
    setItem(ele.name);
    setEdit(ele.id);
  };

  // updateTodo_____________________________________

  const updateTodo = () => {
    const update = addTodo.map((curEle) => {
      return curEle.id === edit ? { ...curEle, name: item } : curEle;
    });
    setAddTodo(update);
    setToggle(true);
    setItem("");
  };

  return (
    <div className="container">
      <div className="container_box">
        <input
          className="input_feild"
          type="text"
          placeholder="enter your todo"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        {toggle ? (
          <button className="btn btn-success ms-5 " onClick={addtask}>
            Add Todo
          </button>
        ) : (
          <button className="btn btn-primary ms-3" onClick={updateTodo}>
            Update Todo
          </button>
        )}
        {addTodo.map((curEle) => {
          return (
            <p>
              {curEle.name}
              <button
                className="btn btn-danger my-4 mx-2"
                onClick={() => deletTask(curEle)}
              >
                Delete Todo
              </button>
              <button
                className="btn btn-primary"
                onClick={() => editTodo(curEle)}
              >
                Edit Todo
              </button>
            </p>
          );
        })}
        {addTodo.length > 0 && (
          <button onClick={removeall} className="btn btn-danger">
            remove all
          </button>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Todo;
