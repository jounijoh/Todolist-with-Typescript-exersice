import React from "react";
import { Todotableprops, Todo } from "../interfaces"
import '../App.css';
function Todotable(props:Todotableprops){

   

    return(
        
        <table>
        <thead>
          <tr>
           <th> Description</th><th> Date</th><th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td><td>{todo.date}</td><td>{todo.priority}</td>
              <td><button onClick={() => props.deletetodo(index)}> Delete </button></td>
            </tr>
          ))}
        </tbody>
      </table>
        
    )

}

export default Todotable;