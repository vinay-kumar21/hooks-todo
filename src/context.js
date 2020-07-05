import React from 'react';

const TodosContext=React.createContext({

    todos:
    [
        {id:1,text:"Read React", complete:false},
        {id:2,text:"Read React Hooks", complete:false},
        {id:3,text:"Practice Learning", complete:false},
        {id:4,text:"Do project", complete:false}
        {id:5,text:"Create Git Repo", complete:false}
        {id:6,text:"Commit your changes", complete:false}
        {id:7,text:"Push it to Git Repo", complete:false}

    ],
    currentTodo:{}


})

export default TodosContext;