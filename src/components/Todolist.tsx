
import React, { useState } from "react";
import { Todo } from "../interfaces"
import TodoTable from "./TodoTable"
function Todolist() {

    const [todo, setTodo] = useState<Todo>({} as Todo);
    const [todos, setTodos] = useState<Array<Todo>>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const value = e.target.value;
        setTodo({
            ...todo,
            [e.target.name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setTodos([todo, ...todos]);
        //reset input
        setTodo({ description: "", date: "", priority: "" });
    };

    const deleteTodo = (index: number) => {
      const newtodos = todos.filter((todo, i) => i !== index);
      setTodos(newtodos);
  }
 

      return (
        <div>
              <input
                placeholder="Description"
                type="text"
                name="description"
                value={todo.description}
                onChange={handleChange}
              />
              <input
                placeholder="Date"
                type="date"
                name="date"
                value={todo.date}
                onChange={handleChange}
              />
              <input
                placeholder="Priority"
                type="text"
                name="priority"
                value={todo.priority}
                onChange={handleChange}
              />
              <input type="button" onClick={handleSubmit} value="Add ToDo" />
              <TodoTable todos={todos} deletetodo={deleteTodo} />
        </div>
      );
}

export default Todolist;