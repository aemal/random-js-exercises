import React, { Component } from 'react';

class Todo extends Component {

    render() {
        const todoListDataSource = [
            {id: 1, todoItem: 'Learn React'},
            {id: 2, todoItem: 'Learn Redux'},
            {id: 3, todoItem: 'Have fun!!!'}
        ];

        const CustomComponent =  
            ! this.props.customComponents 
            ? null
            : this.props.customComponents
    
        const todoList = todoListDataSource.map((item, index) => {
            return (
                <div key={item.id} style={{padding: '5px'}}>
                    <div>{item.todoItem}</div>
                    <span><CustomComponent id={item.id}/></span>
                </div>
            );
        });
    
        return (
            <div>
                {todoList}
            </div>
        );
    }

    
}

export default Todo;