import React, { Component } from "react";
import './ToDo.css'

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false, todo: this.props.toDo, completed: this.props.completed }
    }

    handleEdit = () => {
        this.setState({ isEditing: true })
    }
    handleSave = (evt) => {
        evt.preventDefault();
        this.props.updateToDo(this.state.todo, this.props.id)
        this.setState({ isEditing: false })
    }
    handleChange = (evt) => {
        this.setState({ todo: evt.target.value })
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handleSave}>
                        <input name="todo" value={this.state.todo} onChange={this.handleChange} type="text" />
                        <button>Save</button>
                    </form>
                </div>)
        } else {
            result = (
                <li className="Todo">
                    <span className={this.props.completed ? 'Todo-task completed' : 'Todo-task'} onClick={this.props.toggleCompl}>{this.props.toDo}</span>
                    <span className="Todo-buttons">
                        <button onClick={this.handleEdit} style={{ margin: '0 10px' }}><i className="fas fa-edit"></i></button>
                        <button onClick={this.props.remove(this.props.id)}><i className="fas fa-trash-alt"></i></button>
                    </span>
                </li>
            )
        }
        return result;
    }
}
export default ToDo;