import React from "react";
import { MdDeleteForever } from "react-icons/md";

export const TodoList = (props) => {
  return (
    <>
      <div className="todo-style">
        <span className="delet-button">
          <MdDeleteForever
            size={"30px"}
            onClick={() => {
              props.selected(props.id);
            }}
          />
        </span>
        <li>{props.text}</li>
      </div>
    </>
  );
};
export default TodoList;
