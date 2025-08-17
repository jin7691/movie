
//import Button from "./Button";
//import styles from "./App.module.css";

import { useState, useEffect} from "react";

function App() {

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(toDo);
    if(toDo ===""){
      return;
    }
    setToDo("");
    setToDos(currentArray => [toDo, ...currentArray]);   // currentArray 배열을 꺼내서 더해줌
    
  }
  console.log(toDos);

  //console.log(toDo);
  return <div>
    <h1>My To Dos ({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange}  value={toDo} placeholder="Write your to do..."/>
      <button> add to do </button>
    </form>
    <hr></hr>
    <ul>
      {toDos.map((item, index) =>(
        <li key={index}>{item}</li>
        ))}
    </ul>
    
  </div>;

}

export default App;
