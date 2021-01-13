import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    /*state = {
        count: 0,
    };*/

    componentDidMount(){
        console.log(`habit: ${this.props.habit.name} mounted`)

    };

    componentWillUnmount(){
        console.log(`habit: ${this.props.habit.name} will unmounted`)

    }
    handleIncrement = (event) => {
        // check event
        //console.log(event);
        // state 오브젝트 안에 있는 count를 증가 한 뒤 state를 업데이트 한다
        //this.setState({count: this.state.count+1})
        // this.state.count+=1; 불가능 
        // object값을 그냥 업데이트 하게 되면 react가 업데이트 여부를 알 수 없음
        this.props.onIncrement(this.props.habit);


    };
    handleDecrement = () => {
        //const count = this.state.count-1;
        // state 오브젝트 안에 있는 count를 증가 한 뒤 state를 업데이트 한다
        //this.setState({count: count < 0 ? 0 : count})
        // this.state.count+=1; 불가능 
        // object값을 그냥 업데이트 하게 되면 react가 업데이트 여부를 알 수 없음
        this.props.onDecrement(this.props.habit);

    };

    handleDelete = () =>{
        this.props.onDelete(this.props.habit);
        
    };

    render() {
        console.log('habit');
        const {name, count} = this.props.habit;
       
        
        return (
        <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
            <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
            <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" onClick={this.handleDelete}>
            <i className="fas fa-trash"></i>
        </button>
        </li>
        );
    }
}

export default Habit;