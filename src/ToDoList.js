import React, { Component } from "react";
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';
import './ToDoList.css'

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = { toDos: [] }
    }
    createToDos = (newTodo) => {
        this.setState({ toDos: [...this.state.toDos, newTodo] })
    }
    update = (editedToDo, id) => {
        const updatedTodos = this.state.toDos.map(el => {
            return (el.id === id) ? { ...el, todo: editedToDo } : el;
            // el.todo = editedToDo; return el;
        })
        this.setState({ toDos: updatedTodos })
    }

    remove = (id) => {
        return () => {
            this.setState({ toDos: this.state.toDos.filter(el => el.id !== id) })
        }
    }

    toggleCompletion = (id) => {
        return () => {
            const updateCompleted = this.state.toDos.map(el => {
                return (el.id === id) ? { ...el, completed: !el.completed } : el
            })
            this.setState({ toDos: updateCompleted })
        }
    }

    render() {
        const toDoList = this.state.toDos.map(el => (
            <ToDo key={el.id} id={el.id} toDo={el.todo} completed={el.completed} remove={this.remove} updateToDo={this.update} toggleCompl={this.toggleCompletion(el.id)} />
        ))
        return (
            <div className="TodoList">
                <h1 style={{ margin: 0 }}>Todo List<span>A Simple React Todo List</span></h1>
                <p className="TodoList-mirror">A Simple React ToDo List</p>
                <ul>{toDoList}</ul>
                <ToDoForm createToDos={this.createToDos} />
            </div>
        )
    }

}

export default ToDoList;