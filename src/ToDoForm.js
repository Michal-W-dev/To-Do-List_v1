import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import './ToDoForm.css'

class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { todo: '' }
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const newTodo = { ...this.state, id: uuidv4(), completed: false }
        this.props.createToDos(newTodo)
        this.setState({ todo: '' })
    }

    handleChange = (evt) => {
        this.setState({ todo: evt.target.value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="NewTodoForm">
                <label style={{ display: 'block', margin: '5px 0' }} htmlFor="insertNewToDo">  New Todo </label>
                <input id="insertNewToDo" name="todo" value={this.state.todo} onChange={this.handleChange} placeholder="New Todo" />
                <button>Add ToDo!</button>
            </form>
        )
    }

}

export default ToDoForm;