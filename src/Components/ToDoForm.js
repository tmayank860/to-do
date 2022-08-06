import React, { useState } from "react";
import { FormGroup, Form, Input, InputGroup, Button, Tooltip  } from "reactstrap";
import { v4 } from "uuid";
const ToDoForm = ({addToDos}) => {
  const [todoString, setToDoString] = useState("");
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const handleSubmitButton = e =>{
    e.preventDefault();
    if(todoString===""){
      setTooltipOpen(true);
      setTimeout(() => {
        setTooltipOpen(false)
      }, 5000);
        return;
    }

    const todo={
        todoString:todoString,
        id: v4(),
        complete: false
    }

    addToDos(todo);
    setToDoString("");
  }


  return (
    <Form onSubmit={handleSubmitButton}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="ScheduleUpdateTooltip"
            placeholder="Your Next Task"
            value={todoString}
            onChange={(e) => {
              setToDoString(e.target.value);
            }}
          />
           <Tooltip
                isOpen={tooltipOpen}
                placement="bottom"
                target="ScheduleUpdateTooltip"
                toggle={() => { setTooltipOpen(tooltipOpen) }}>
                Please Enter a ToDo...
            </Tooltip>
          <Button color="warning">ADD</Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default ToDoForm;
