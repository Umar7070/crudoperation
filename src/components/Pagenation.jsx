import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Pagination from "react-bootstrap/Pagination";

const Pagenation = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const getData = async () => {
    const resp = await axios.get("https://dummyjson.com/products");
    setData(resp.data.products);
  };
  useEffect(() => {
    getData();
  }, []);

  // previsou  _________________________________________

  const prevInput = () => {};

  // next  _____________________________________________________

  const nextInput = () => {};

  return (
    <>
      <div className="container">
        <h1 className="text-danger my-5">User Data</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>price</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((cur, index) => {
                return (
                  <>
                    <tr>
                      <td>{cur.id}</td>
                      <td>{cur.title}</td>
                      <td>{cur.price}</td>
                      <td>
                        <img
                          src={cur.thumbnail}
                          width="100px"
                          height="100px"
                          alt=""
                        />
                      </td>
                    </tr>
                  </>
                );
              })
            ) : (
              <div className="mt-5">
                <Spinner animation="border" variant="danger" />
                loading...
              </div>
            )}
          </tbody>
        </Table>
      </div>
      <div className="container my-5">

      <div className="pagenation d-flex justify-content-end">
        <Pagination>
          <Pagination.Prev onClick={prevInput} />
          <Pagination.Next onClick={nextInput} />
        </Pagination>
      </div>
      </div>

    </>
  );
};

export default Pagenation;
