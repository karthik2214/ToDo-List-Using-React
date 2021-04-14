import React from 'react';

const TodoList = (props) => {
  return (
    <>
    <div className="list_style">
    <i class="fa fa-times" aria-hidden="true" 
    onClick={() => {
      props.onSelect(props.id);
    }}></i>
    <li> {props.text} </li> 
    </div>
    </>
    );
};

export default TodoList;