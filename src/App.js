import "./styles.css";
import React, {useState} from "react"
export default function App() {
  let [fontHeight,setFontHeight]=useState(.5);
  function setHeight1(){
    setFontHeight(1);
  }
  function setHeight2(){
    setFontHeight(2);
  }
  function setHeight3(){
    setFontHeight(3);
  }
  return (
    <div className="App">
      <button onClick={setHeight1}>h1</button>
      <button onClick={setHeight2}>h2</button>
      <button onClick={setHeight3}>h3</button>
      <div style={{"fontSize":fontHeight+"em"}}>I am a complan Boy</div>
    </div>
  );
}
