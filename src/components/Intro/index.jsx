// import Card from "./../../UI/Card";
// import { user } from "./data";
import React, { useState, useRef } from "react";
import "./style.scss";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const index = () => {
  const [task, setTask] = useState([
    // {id: 1, taskTitle: "lorem ipsum dolor", taskDeadline: "21.03.2001"},
  ]);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");

  const addTask = () => {
    const check = {
      title: taskTitle.trim().length === 0,
      deadline: taskDeadline.trim().length === 0,
    };
    const newTask = {
      id: uuidv4(),
      title: taskTitle,
      deadline: taskDeadline,
    };

    if (check.title || check.deadline) {
      toast.warning("Iltimos, kerakli joyni to'ldiring", {
        position: "top-right",
        autoClose: 1400,
      });
    } else {
      setTask([...task, newTask]);
      toast.success("Muvaffaqqiyatli qo'shildi", {
        position: "top-center",
        autoClose: 1500,
      });
    }

    setTaskTitle("");
    setTaskDeadline("");

  };
    const deleteTask = (id) => {
      const newTasks = task.filter((el) => {
        return el.id != id;
      })

      setTask(newTasks)
    }


  return (
    <>
      <ToastContainer />
      <section className="intro">
        <div className="container">
          <div className="card shadow p-3 mt-5">
            <h4 className="text-center text-danger">TO DO APP</h4>
            <input
              type="text"
              className="form-control mx-auto p-3 mb-3 w-50"
              placeholder="Enter task name"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
            <input
              type="date"
              className="form-control mx-auto p-3 mb-3 w-50"
              placeholder="Enter task deadline"
              value={taskDeadline}
              onChange={(e) => setTaskDeadline(e.target.value)}
            />
            <button
              className="btn btn-success w-50 p-3 mx-auto"
              onClick={() => addTask()}
            >
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
                    <tr key={element.id}>
                      <td>{index + 1}</td>
                      <td>{element.title}</td>
                      <td>{element.deadline}</td>
                      <td>
                        <button className="btn btn-danger" onClick={()=> deleteTask(element.id)}>Remove</button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={4}>
                    <h4 className="text-center text-danger">Data is empty!</h4>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default index;
