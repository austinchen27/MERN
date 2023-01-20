import React from 'react';
import '../App.css'

const List = (props) => {

  const strikeThrough = (e) => {
    if (props.todo[e.target.value].completed === false) {
      props.todo[e.target.value].completed = true
    } else {
      props.todo[e.target.value].copmleted = false
    }
    props.setToDo([...props.todo]);
  }

  const deleteTodo = (e) => {
    let todoList = props.todo;
    let newList = []
    for (let i = 0; i < todoList.length; i++) {
      if (e.target.value !== i) {
        newList.push(todoList[i])
      }
    }
    props.setToDo(newList);
  }

  return (
    <div>
      {
        props.todo.map((todo, i) =>
          <div key={i}>
            <span className={todo.completed ? "done" : "a"}>{todo.text}</span>
            <input type="checkbox" onClick={strikeThrough} value={i} />
            <button onClick={deleteTodo} value={i}>Delete</button>
            {todo.completed}
          </div>
        )
      }
    </div>
  );
}




export default List;