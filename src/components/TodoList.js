import React from 'react';
import TodosContext from '../context';

export default function TodoList(){

    const {state,dispatch}=React.useContext(TodosContext);

    const title= (state && state.todos.length) > 0 ? `${state.todos.length} todos` : "Nothing to do!!"
    

    return(
        <div className="container mx-auto max-w-md text-center font-mono" data-test='list-container'>
            <h1 style={{ padding:'10px',fontSize:"30px",fontWeight:'bolder'}}>{title}</h1>
            <ul className="list-reset text-red p-0">
            {
                state && state.todos.map(todo =>(
                <li key={todo.id}
                style={{backgroundColor:'lightblue',marginBottom:"8px"}}
                className=" flex items-center border-black border-dashed border-2 py-5"
                >
                    <span
                    onDoubleClick={()=>dispatch({type:"TOGGLE_TODO",payload:todo})}
                    className={`flex-1 ml-12 cursor-pointer ${todo.complete && "line-through text-grey-darkest"}`}
                    data-test="todo-text"
                    >
                    {todo.text}
                    </span>
                    <button
                    onClick={()=>dispatch({type:"SET_CURRENT_TODO",payload:todo})}
                    data-test='edit-button'
                    >
                        <img src="https://icon.now.sh/edit/0050c5" alt="Edit Icon" className="h-5"></img>
                    </button>
                    <button 
                    onClick={()=>dispatch({type:"REMOVE_TODO", payload:todo})}
                    data-test='delete-button'
                    >
                        <img src="https://icon.now.sh/delete/8b0000" alt="Delete Icon" className="h-5"></img>
                    </button>

                </li>
            ))}
            </ul>
            
        </div>
    )

}