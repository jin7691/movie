
import Button from "./Button";
import styles from "./App.module.css";

import { useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword , setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (evnet) => setKeyword(evnet.target.value);

  console.log("i run all the time");
  /*
  const iRunOnlyONCE = () => {
    console.log("i run only once");

  }
  */
  useEffect(() =>{
    console.log("i run when 'keyword' changes");
    /*
    if(keyword !=="" && keyword.length >=6){
      console.log("SEARCH For ", keyword);
    }
      */
    
  }, [keyword])

  useEffect(() =>{
    console.log("i run when 'counter' change");
  }, [counter]);
  // 한번만 실행됨
  //useEffect(iRunOnlyONCE, []);
  useEffect(() =>{
    console.log("CALL THE API");
  }, []);


  const [showing, setShowing] = useState(false);
  const onClick2 =() => setShowing((prev) => prev = !prev);

  return (
    <div>
      <input type="text" value={keyword} onChange={onChange} placeholder="Search hrer.."></input>
      <h1 className={styles.title}>Welcom back;</h1>
      <Button text ={"Countinue"}></Button>

      <h1>{counter}</h1>
      <button onClick={onClick}> click me</button>
      <br></br>
      {showing? <Hellow/> : null}
      <button onClick={onClick2} >{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

function Hellow() {
  /*
  const hiFn = () =>{
    console.log("craete");
    return byFn;
  }
  const byFn = () =>{
    console.log("destroyed");
  }
  useEffect(hiFn,[]);
  return <h1>hellow</h1>
  */
 useEffect(()=>{
  console.log("hi :)");
  return () => console.log("by :<");
 },[]);
}
  
 

export default App;
