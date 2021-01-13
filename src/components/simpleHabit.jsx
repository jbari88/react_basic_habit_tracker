/*import React, { Component } from 'react';

class SimpleHabit extends Component {
    state = {
        count: 0,
    };

    handleIncrement = () => {
        this.setState({count: this.state.count+1});
    }
    render() {
        return (
            <li className="habit">
                <span className="habit-name">Reading</span>
                <span className="habit-count">{this.state.count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
            </li>
        );
    }
}

export default SimpleHabit;*/

// ReactHook 을 사용한 function component 만들기
// function component는 선언된 전체 지역변수나 함수가 다시 호출된다
// useState(0) 이 0으로 초기화되지 않는 이유는 react api에서 따로 저장해서 동일한 값을 가져올 수 잇음

import React, { useEffect, useState, useRef, useCallback } from 'react';

const SimpleHabit = (props) => {

    // state를 사용하기 위해서 useState 함수 사용함
    // count 변수와 setCount function을 리턴해줌
    const [count, setCount] = useState(0);
    //const spanRef = React.createRef();
    // React.createRef() 처럼 매번 생성하는 것이 아니라
    // 메모리에 저장해놓고 동일한 값을 사용한다.
    const spanRef = React.useRef();

    const handleIncrement= useCallback(() =>{
        setCount(count+1);
    });
    // componentDidmount() && componentDidUpdate()
    useEffect(()=> {
        console.log(`mounted & update: ${count}`);
    }, [count]); // count가 변경될 때마다 호출됨. [] 을 넣으면 처음에만 호출된다. (didmount)
    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );

};
            


export default SimpleHabit;