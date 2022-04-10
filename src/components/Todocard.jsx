import React, { useEffect, useRef, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import { TiEdit } from "react-icons/ti";

import "./Todocard.css";

function Todocard(props) {
  const [isUpdating, setUpdating] = useState(false);
  const [text, setText] = useState(props.ele.text);
  const textareaRef = useRef(null);

  function deleteval(x) {
    //remove from list
    // console.log("del fun clicked");
    const newlist = [...props.listt].filter((todo) => todo.id !== x);
    props.setlists(newlist);
  }
  function updatetext(id) {
    if (text.trim().length === 0) {
      setUpdating(false);
      setText(props.ele.text);
      return;
    }

    const newlist = [...props.listt].filter((todo) => todo.id !== id);
    newlist.push({
      id: id,
      text: text.trim()
    });
    // const newlist = props.listt;
    // for (let i = 0; i < newlist.length; i++) {
    //   console.log(newlist[i].text, newlist[i].id);
    //   if (newlist[i].id === id) {
    //     newlist[i].text = textareaRef.current.value;
    //   }
    // }

    props.setlists(newlist);
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
