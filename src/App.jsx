import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Create from "./component/Create";
import TodoList from "./component/TodoList";
import "./styles/Wrapperstyle.css";

function App() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card bg-dark bg-opacity-50">
                <div className="card-body p-5">
                  <h1 className="h1 text-center mt-3 mb-0 pb-3 text-info fw-bold">
                    what's are doing today
                  </h1>
                  <p className="p text-center mb-4 py-1 fw-bolder text-info">
                    <span className="fw-bolder">Day: </span>
                    {date}
                  </p>
                  <div className="p-2">
                    <Create />
                  </div>
                  <div className="p-2">
                    <TodoList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
