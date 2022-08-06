import React from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'
import {FaCheckDouble, FaTrash} from 'react-icons/fa'

const ToDos = ({todos, markComplete,removeToDo}) => {
    console.log(todos)
  return (
   <ListGroup className='mt-5 mb-2 items'>
    {todos.map(todo => (
        <ListGroupItem key={todo.id}>
            <span className={todo.complete ? 'completedTodo' : ''}>{todo.todoString}</span>
            <span className='float-end fa-icon' onClick={()=>removeToDo(todo.id)}><FaTrash/></span>
            <span className='float-end' onClick={()=>markComplete(todo.id)}><FaCheckDouble/></span>
        </ListGroupItem>
    ))}
   </ListGroup>
  )
}

export default ToDos