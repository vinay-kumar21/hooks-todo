import React from 'react';

const TodosContext=React.createContext({

    todos:
    [
        {id:1,text:"Read React", complete:false},
        {id:2,text:"Read React Hooks", complete:false},
        {id:3,text:"Practice Learning", complete:false},
        {id:4,text:"Do project", complete:false}
    ],
    currentTodo:{}


})

export default TodosContext;