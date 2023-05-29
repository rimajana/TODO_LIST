import React, { useEffect, useRef, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import { TiEdit } from "react-icons/ti";

import "./Todocard.css";

function Todocard(props) {
  const [isUpdating, setUpdating] = useState(false);
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  // console.log("here", props);
  // console.log(props.listt);
  function deleteval(x) {
    const newlist = [...props.listt].filter((todo) => todo.id !== x);
    props.setlists(newlist);
  }
  function updatetext(id) {
    if (text.trim().length === 0) {
      setUpdating(false);
      setText(props.ele.text);
      return;
    }
//     console.log(id, text);

    const index = props.listt.findIndex((obj) => obj.id === id);
    if (index !== -1) {
      props.listt[index].text = text;
      // props.setlists(props.listt);
    }
    setUpdating(false);

  }

  return (
    <div className="totalwrap">
      <div className="showtodo" id={props.ele.id}>
        {console.log(props.id)}
        <p className="dateText">{props.ele.time.toDateString()}</p>
        {!isUpdating ? (
          <p className="cardtext">{props.ele.text}</p>
        ) : (
          <textarea
            ref={textareaRef}
            value={text}
            autoFocus={true}
            maxLength={150}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        )}

        <div className="icons">
          <RiCloseCircleLine
            className="delete-icon "
            onClick={() => {
              deleteval(props.ele.id);
            }}
          />
          {!isUpdating ? (
            <TiEdit
              className="delete-icon "
              onClick={() => {
                setText(props.ele.text);
                setUpdating(true);
              }}
            />
          ) : (
            <DoneRoundedIcon
              className="delete-icon "
              onClick={() => {
                updatetext(props.ele.id);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default Todocard;
