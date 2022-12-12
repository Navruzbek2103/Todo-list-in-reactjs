// import Card from "./../../UI/Card";
// import { user } from "./data";

import React, { useState, useRef } from "react";
import "./style.scss";
import { v4 as uuidv4 } from "uuid";



const index = () => {
  const [task, setTask] = useState([
    { id: 1, title: "Lorem ipsum dolor sit", deadline: "20.11.2021" },
  ]);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");


  const addTask = () => {
    const newTask = {
      id: uuidv4(),
      title: taskTitle,
      deadline: taskDeadline
    }
    console.log(newTask);
  }

  return (
    <>
      <section className="intro">
        <div className="container">
          <div className="card shadow p-3 mt-5">
            <h4 className="text-center text-danger">TO DO APP</h4>
            <input
              type="text"
              className="form-control mx-auto p-3 mb-3 w-50"
              placeholder="Enter task name"
            />
            <input
              type="date"
              className="form-control mx-auto p-3 mb-3 w-50"
              placeholder="Enter task deadline"
            />
            <button className="btn btn-success w-50 p-3 mx-auto" onClick={() => addTask()}>
              ADD NEW TASK
            </button>
          </div>
          <table className="table mt-5 shadow table-bordered table-striped p-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>Task title</th>
                <th>Task deadline</th>
                <th>Task remove</th>
              </tr>
            </thead>
            <tbody>
              {task.length > 0 ? (
                task.map((element, index) => {
                  return (
                    <>
                      <tr key={element.id}>
                        <td>{index+1}</td>
                        <td>{element.title}</td>
                        <td>{element.deadline}</td>
                        <td>
                          <button className="btn btn-danger">Remove</button>
                        </td>
                      </tr>
                    </>
                  );
                })
              ) : (
                <h4 className="text-center text-danger">Not Found</h4>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default index;
