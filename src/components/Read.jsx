import { useContext } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { UserContext } from "./Context";
import { jsPDF } from "jspdf";
// import PDF, {  img, Line,   Html } from 'jspdf-react'

const Read = () => {
  const downloadAsPDF = () => {
    alert("func called")
    const pdf = new jsPDF();

    const content = document.getElementById("contentToConvert");

    pdf.html(content, {
      callback:(pdf) => {
        pdf.save("content.pdf"); 
      },
    });
  };

  
  const username = useContext(UserContext);
  const { addTodo, deleteItem, updateItem } = username;
  return (
    < >
    <div className="contentToConvert">

      <h2 className="mx-5 text-danger">Read</h2>
      <Table striped bordered hover className="mx-5">
        <thead>
          <tr>
            <th>id</th>
            <th>image</th>

            <th>name</th>
            <th>email</th> 
          </tr>
        </thead>
        {addTodo.map((curEle) => {
          return (
            <tbody>
              <tr>
                <td>{curEle.id}</td>
                <td>
                  <img width="32px" height="32px" src={curEle.image} />
                </td>

                <td>{curEle.email}</td>
                <td>{curEle.name}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteItem(curEle)}
                  >
                    Delete
                  </button>
                </td>
                <Link to="/">
                  <td>
                    <button
                      className="btn btn-primary my-2"
                      onClick={() => updateItem(curEle)}
                    >
                      Edit
                    </button>
                  </td>
                </Link>
              </tr>
            </tbody>
          );
        })}
      </Table>
      {
        addTodo.length >0 &&    <button className="btn btn-danger mx-5 my-5" onClick={downloadAsPDF}>Download FDP </button>
      }
    </div>

    </>
  );
};

export default Read;















