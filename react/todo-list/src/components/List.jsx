import React from 'react';
import '../App.css'

const List = (props) => {

  const strikeThrough = (e) => {
    if (props.todo[e.target.value].completed === false) {
      props.todo[e.target.value].completed = true
    } else {
      props.todo[e.target.value].completed = false
    }
    props.setToDo([...props.todo]);
  }

  const deleteTodo = (e) => {
    props.todo.splice(e.target.value, 1)
    props.setToDo([...props.todo])
  }

  return (
    <div>
      {
        props.todo.map((todo, i) =>
          <div key={i}>
            <span className={todo.completed ? "done" : "incomplete"}>{todo.text}</span>
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