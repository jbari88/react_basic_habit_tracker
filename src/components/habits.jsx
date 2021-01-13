import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
    componentDidUpdate(){
        // component가 업데이트 될 때마다 호출됨
        // render 함수가 호출될 때마다 즉, state 값이변경될 때마다
        // 해당 함수가 호출된다.
    }
    
    handleIncrement = habit => {
        this.props.onIncrement(habit);
    };
    handleDecrement = habit => {
        this.props.onDecrement(habit);
    };

    handleDelete = habit => {
        this.props.onDelete(habit);
    };

    handleAdd = name => {
        this.props.onAdd(name);
    };
    
    render() {
        console.log('habits')
        return (
        <>
        <HabitAddForm onAdd={this.handleAdd}/>
        <ul>
        {
            this.props.habits.map(habit=>
                <Habit 
                    key={habit.id} 
                    habit={habit} 
                    count={habit.count}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                />
            )
        }
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
        </>);
    }
}

export default Habits