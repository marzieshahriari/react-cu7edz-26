import React,{useState,useEffect} from "react";
import "./style.css";

export default function App() {

const [text,setText] = useState("");
const [IsError,setIsError] = useState(false);



  return (
    <div>
      <h1>{text || "nazanin"}</h1>
      <button className="btn" onClick={()=> setIsError(!IsError)}>toggle Error</button>
      <h1>{IsError ? <p>Error</p> :<p>not Error</p>}</h1>
    </div>
  );
}
