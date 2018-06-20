import React from 'react';

export default class TodoForm extends React.Component{
    // Constructor to set up a controlled component to enable/disable the add button
    constructor(){
        super();
        this.state ={
            content:'',
            category: 'General'
        };
    }

    // Validates the 'add' button on the form
    updateContent = (e) => {
        this.setState({
            content: e.target.value.trimLeft()
        });
    }

    // Grabs the category value from the select drop down for use in grabTodo
    updateCategory = (e) => {
        this.setState({
            category: e.target.value
        })
    }

    // Click handler that calls the addTodo function
    grabTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.content, this.state.category);
        this.setState({
            content: '',
        });
    }

    render(){
        return(
            <form onSubmit={this.grabTodo}>
                <div className="input-group flexbox">
                    {/* <span className="input-group-btn"> */}
                        <button disabled={this.state.content.length === 0 ? true : false} className="btn btn-primary btnColor" type="submit">Add</button>
                    {/* </span> */}
                    <input type="text" onChange={this.updateContent} className="form-control " placeholder="Enter your task" value={this.state.content} />
                    <select className='btn btn-primary btnColor' onChange={this.updateCategory}>
                        <option value="General">General</option>
                        <option value="Work">Work</option>
                        <option value="Private">Private</option>
                    </select>
                </div>
            </form>
        )
    }
}