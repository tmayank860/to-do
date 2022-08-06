import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ToDoForm from "./Components/ToDoForm";
import ToDos from "./Components/ToDos";

const App = () => {
  const [todos, setToDos] = useState(JSON.parse(localStorage.getItem("todos")) || []);

  useEffect(() => {
    const localToDos = JSON.parse(localStorage.getItem("todos"));
      if (localToDos) {
        setToDos(localToDos);
      }
   
  },[]);

  const addToDos = async (todo) => {
    setToDos([...todos, todo]);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  const markComplete = (id) => {
    // const updateTODOS =
    setToDos(todos.map(obj => {
      if (obj.id === id) {
        return {...obj, complete: true};
      }
    
      return obj;
    }))
  };
  const removeToDo = id =>{
    setToDos(todos.filter(todo=> todo.id!==id))
  }
  console.log("ToDOS",todos)
  
  return (
    <Container fluid>
      <ToDoForm addToDos={addToDos} />
      <ToDos todos={todos} markComplete={markComplete} removeToDo={removeToDo} />
    </Container>
  );
};

export default App;
