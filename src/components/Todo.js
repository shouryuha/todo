import React from 'react'

function Todo({text,todos,setTodos, todo}) {
    
    const deleteHandler = () => {
        setTodos(todos.filter(element => element.id !== todo.id))
    }
    const completeHandler = () => {
        setTodos(todos.map((element) => {
            // element.id !== todo.id
            if(element.id === todo.id){
                return {
                    ...element, completed: !element.completed
                }
            }
            return element
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;