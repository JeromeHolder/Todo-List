import React from 'react';

export default class SelectDropdownFilter extends React.Component{
    render(){
        return(
            // onChange handler passing the event to setFilter in App
            <select onChange={this.props.setFilter}>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="complete">Complete</option>
                <option value="General">General</option>
                <option value="Work">Work</option>
                <option value="Private">Private</option>
            </select>
        )
    }    
}