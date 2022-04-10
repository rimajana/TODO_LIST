import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import { BsFillPatchCheckFill } from "react-icons/bs";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./Form.css";
function Form({ setList, setDisp, style }) {
  const [input, setInput] = useState(""); //initial value is empty

  //STORE IN ARRAY AND ALSO DISPLAY THAT NEW ITEM
  const handleSubmit = (e) => {
    //to prevent it from refreshing
    e.preventDefault();
    if (input.trim() === "") {
      setDisp((dis) => !dis);
      return;
    }

    const newtask = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      time: new Date()
    };

    setList((list) => [...list, newtask]);
    setDisp((dis) => !dis);

    //after adding a task make it empty again
    setInput("");
  };
  const handleChange = (e) => {
    //assign my input text to input
    setInput(e.target.value);
  };

  return (
    // create a form
    <>
      <form onSubmit={handleSubmit} style={style} class="frm">
        <input
          type="text"
          maxLength="200"
          placeholder="Add task"
          id="frm"
          className="todo-input"
          value={input}
          onChange={handleChange}
          name="input-todo"
          autoFocus={true}
        />

        {/* <button
          disabled={input.trim() === ""}
          className="todo-btn"
          type="submit"
        >
          <BsFillPatchCheckFill className="check"/>
        </button> */}
        {input.trim() === "" ? (
          <CloseRoundedIcon className="todo-btn-close" onClick={handleSubmit} />
        ) : (
          <DoneRoundedIcon className="todo-btn" onClick={handleSubmit} />
        )}
      </form>
      {/* <BsPlusCircle /> */}
    </>
  );
}

export default Form;
