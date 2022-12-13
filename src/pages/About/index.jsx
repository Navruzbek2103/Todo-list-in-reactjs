import React, { useState, useEffect } from "react";
import "./style.scss";
const index = () => {
  const [num, setNum] = useState(0);
  const [user, setUser] = useState([]);
  const [load, setLoad] = useState(false);

  const fetchData = () => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((result) => {
        setUser(result.data);
        setLoad(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (!load) {
    return <h2>Loading. . .</h2>;
  }
  return (
    <div>
      <>
        <div className="container">
          <div className="row p-5">
            <div className="card p-5 m-5 shadow">
              <h1 className="text-center">User list</h1>
              <ul className="list-group">
                {user.length > 0 ? (
                  user.map((e, i) => {
                    return (
                      <>
                        <li className="list-group-item" key={i}>
                          <div className="d-flex">
                            <img
                              src={e.avatar}
                              alt={e.first_name + e.last_name}
                              className="img-thumbnail"
                            />
                            <ul className="list-group">
                              <li className="list-group-item">
                                <strong>First name: </strong>
                                {e.first_name}
                              </li>
                              <li className="list-group-item">
                                <strong>Last name: </strong>
                                {e.last_name}
                              </li>
                              <li className="list-group-item">
                                <strong>Email: </strong>
                                {e.email}
                              </li>
                            </ul>
                          </div>
                        </li>
                        ;
                      </>
                    );
                  })
                ) : (
                  <h2 className="text-center">User list empty</h2>
                )}
              </ul>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default index;
