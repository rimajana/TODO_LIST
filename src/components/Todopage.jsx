import React, { useState } from "react";
import "./Todopage.css";
import Todocard from "./Todocard";
function Todopage(props) {
  return (
    // create a form
    <div className="twin">
      {props.lists.map((ele) => {
        // if(ele.text.length!==0)
        return (
          <Todocard ele={ele} listt={props.lists} setlists={props.setlist} />
        );
      })}
    </div>
  );
}

export default Todopage;
