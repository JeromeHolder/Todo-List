import React from 'react';

export default class Todo extends React.Component {
    render() {
        return (
            <li className="list-group-item flexbox">
            {/* onChange handler that toggles completed status by applying the 'done' class to the label */}
                <input type="checkbox" checked={this.props.complete} onChange={()=>{this.props.setComplete(this.props.id, this.props.complete, this.props.content, this.props.index, this.props.category)}}/>
                <label className={ (this.props.complete) ? 'done':'' }>{this.props.content}</label>
                <label className='categoryLabel'>{this.props.category}</label>
            </li>
        );
    }
}
