import { MdAddCircle } from "react-icons/md";


function App() {
  return (
    <div className="mainDiv">
    <div className="centerDiv">
      <br/>
      <h1>ToDo List</h1>  
      <br/>
      <input type="text" placeholder="Add an Items"></input>
      <MdAddCircle size={'4rem'} style={{color: 'rgb(9, 61, 38)', margin: '0px 0px -20px 11px' }}/>
    </div>
    </div>
  );
}

export default App;
