import React, { useState } from 'react';
import Todolist from './components/ToDolist';

const App = () => {
  
const [inputList, setInputList] = useState();
const [inputItems, setInputItems] = useState([]);

const itemEvent = (event) => {
  setInputList(event.target.value);
}

const listOfItems = () => {
  setInputItems((olditems) => {
    return [...olditems, inputList]
  });
  setInputList("");
};
  
const deleteItems = (id) => {
  setInputItems((olditems) => {
    return olditems.filter((arrElement, index) => {
      return index !== id;
    })
  } )
}
  
  return (
    <>
    <div className="main-div">
    <div className="center-div">
    <h1> ToDo List </h1>
    <input type="text" placeHolder="Add Items Here" value={inputList} onChange={itemEvent}/>
    <button onClick={listOfItems}> + </button>
    
    <ol>
    
     { /*<li> {inputList} </li>*/ }
    
    
  {  inputItems.map((itemval, index) => {
     return <Todolist text={itemval} key={index} id={index} onSelect={deleteItems}  />
    })}
    </ol>
    </div>
    </div>
    </>
    );
}

export default App;