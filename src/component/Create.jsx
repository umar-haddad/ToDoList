import { Plus } from "react-bootstrap-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTodo } from "../redux/reducers/todoSlice";

const Create = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(
        addTodo({
          id: nanoid(),
          text,
          completed: false,
        })
      );
      setText("");
    }
  };

  return (
    <form
      className="d-flex justify-content-center align-items-center mb-4"
      onSubmit={handleSubmit}
    >
      <div className="form-outline flex-fill">
        <input
          className="form-control me-2"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="create ToDo...."
        />
      </div>
      <div className="col-auto flex-end">
        <button className="btn btn-primary" type="submit">
          add
        </button>
      </div>
    </form>
  );
};

export default Create;
