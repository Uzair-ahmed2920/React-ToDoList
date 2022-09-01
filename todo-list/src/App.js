import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { TodoList } from "./components/TodoList";

function App() {
  const [inputList, setInputList] = useState();
  const [item, setItem] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const itemList = () => {
    setItem((olditems) => {
      return [...olditems, inputList];
    });
    setInputList("");
  };
  const deleteItem = (id)=> {
    setItem((olditems) => {
      return olditems.filter((arrElement, index)=>{
        return index !== id ;
      })
    })
  }
  return (
    <div className="mainDiv">
      <div className="centerDiv">
        <br />
        <h1>ToDo List</h1>
        <br />
        <div className="inputbar">
          <input
            type="text"
            placeholder="Add an Items"
            onChange={itemEvent}
            value={inputList}
          ></input>
          <span className="changeColor" onClick={itemList}>
            <MdAddCircle
              size={"4rem"}
              style={{ margin: "0px 0px -20px 5px" }}
            />
          </span>
        </div>
        <ol>
          {item.map((itemval, index) => {
            return <TodoList text={itemval} key={index} id={index} selected={deleteItem} />;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
