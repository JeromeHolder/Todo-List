import React from 'react';

export default class Counter extends React.Component{
    render(){
        // These three variables count the number of list items
        let allJSX = this.props.listContent.length;
        let activeJSX = this.props.listContent.reduce((acc, cur) => {
            if(cur.complete === false){
                return acc + 1
            }
            else {
                return acc
            }
        },0)
        let completeJSX = allJSX-activeJSX;
        return (
            <div>
                <ul className="list-group d-flex countermargins">
                    <li role="presentation" className="list-group-item d-flex justify-content-between align-items-center">
                        All
                        <span className="badge">{allJSX}</span>
                    </li>
                    <li role="presentation" className="list-group-item d-flex justify-content-between align-items-center">
                        Active
                        <span className="badge">{activeJSX}</span>
                    </li>
                    <li role="presentation" className="list-group-item d-flex justify-content-between align-items-center">
                        Complete
                        <span className="badge">{completeJSX}</span>
                    </li>
                </ul>
            </div>
        )
    }
}