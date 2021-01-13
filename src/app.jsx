import React, { Component } from 'react';
import './app.css';
//import React from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';

import './app.css';

/*function App() {
  return <Habits/>;
}
export default App;
*/



class App extends Component {
  state = {
    habits: [
        {id: 1, name : 'Reading', count: 0 },
        {id: 2, name : 'Running', count: 0 },
        {id: 3, name : 'Coding', count: 0 },
    ]
  };
  handleIncrement = (habit) => {
    //console.log(`handleIncrement ${habit.name}`);
    // 옳지 않는 방식
   /* habit.count++;
    this.setState(this.state);
    // react에서는 state를 직접 변경하면 안 된다. 
    */

   // 아래와 같은 코드를 하면 habit component를 PureComponent로 만들었을 때,
   // count 값의 변화가 반영되지 않는다.
   // shallow comparison 속성 때문에 object 자체가 변경되어야함
   /*const habits=[...this.state.habits]; // ... spread operators
   const index = habits.indexOf(habit);
   habits[index].count++;
   //this.setState({habits: habits}); 
   // 아래와 동일
   this.setState({habits});*/


   const habits = this.state.habits.map(item=> {
     if (item.id === habit.id){
       return {...habit, count: habit.count+1}; // deconstructing object
     }
     return item;
   });
   this.setState({habits});

};
handleDecrement = (habit) => {
    //console.log(`handleDecrement ${habit.name}`);
    /*const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count-1;
        
    habits[index].count = count < 0 ? 0 : count;
    this.setState({habits});*/

    const habits = this.state.habits.map(item=> {
      if (item.id === habit.id){
        const count = habit.count-1;
        return {...habit, count: count < 0 ? 0 : count}; // deconstructing object
      }
      return item;
    });
    this.setState({habits});

};
handleDelete = (habit) => {
    //console.log(`handleDelete ${habit.name}`);
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
    

};
handleAdd = name => {
  const habits = [...this.state.habits,{id: Date.now(), name, count:0} ];
  this.setState({habits});
};
handleReset = () => {
  /*const habits = this.state.habits.map(habit => {
    habit.count=0;
    return habit;
  });
  this.setState({habits});
*/
  const habits = this.state.habits.map(item=>{
    if(item.count !=0 ){
      return {...item, count:0};
    }
    return item;
    
  });
  this.setState({habits});
};
  render() {
    console.log('app');
    return (
    <>
    <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
    <Habits 
      habits={this.state.habits}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
      onDelete={this.handleDelete}
      onAdd={this.handleAdd}
      onReset={this.handleReset}
    />
    </>
    );
  }
}

export default App;


