//import React, { Component } from 'react';
/*import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
    formRef = React.createRef();
    inputRef = React.createRef();
    onSubmit = (event) => {
        // refresh 되는 것을 막아줍니다. 
        event.preventDefault(); 
        //console.log(this.inputRef.current.value);
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.inputRef.current.value='';
        this.formRef.current.reset();
    };
    render() {
        console.log('habitAddform');
        return (
            <div>
                <form ref={this.formRef} className="add-Form" onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit"/>
                <button className="add-button">Add</button>
                </form>
                
            </div>
        );
    }
}

export default HabitAddForm;*/

import React, { memo } from 'react';

const HabitAddForm = memo( props => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = (event) => {
        // refresh 되는 것을 막아줍니다. 
        event.preventDefault(); 
        //console.log(this.inputRef.current.value);
        const name = inputRef.current.value;
        name && props.onAdd(name);
        inputRef.current.value='';
        formRef.current.reset();
    };
    return (
        <div>
            <form ref={formRef} className="add-Form" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className="add-input" placeholder="Habit"/>
            <button className="add-button">Add</button>
            </form>
            
        </div>
    );
            
});

export default HabitAddForm;