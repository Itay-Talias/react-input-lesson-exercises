import React, { Component } from "react";

class Exercise1 extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: 0,
        };
    }
    ChangeAgeHandler = (e) => {
        this.setState({
            age: e.target.value,
        });
    };
    ChangeNameHandler = (e) => {
        this.setState({
            name: e.target.value,
        });
    };
    onClickHandler = () => {
        alert(
            `Come in ${this.state.name}, you’re ${this.state.age} - that’s good enough`
        );
    };
    render() {
        return (
            <div>
                <input
                    type="text"
                    id="name-input"
                    value={this.state.name}
                    onChange={this.ChangeNameHandler}
                />
                <input
                    type="number"
                    id="age-input"
                    value={this.state.age}
                    onChange={this.ChangeAgeHandler}
                />
                <button onClick={this.onClickHandler}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;
