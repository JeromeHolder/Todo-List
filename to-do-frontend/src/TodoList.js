import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component{   
    render(){
        // Loop through list of todos
        // Passes to the Todo component an additional prop of the index in the map() method 
            // The id is used in the onChange handler that toggles that specific item as completed or not
        // I set the key as 'i' as well to get rid of the error, even though this is not good practice
        let todoJSX = this.props.listContent.map((todos, i)=>{
            return <Todo content={todos.content} setComplete={this.props.setComplete} complete={todos.complete} category={todos.category} id={todos.id} index={i} key={i}/>
        })
        
        return (
            <ul className="list-group">
                {todoJSX}
            </ul>
        )
    }
}