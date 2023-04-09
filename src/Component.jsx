import React from "react";
import {notes} from "./notes";

function Read(notes){
  return <div className="note">
  <h1>{notes.title}</h1>
  <p>{notes.content}</p>
 </div>
}

function Component(){
return (
  notes.map(Read)
 );
}

export {Component};