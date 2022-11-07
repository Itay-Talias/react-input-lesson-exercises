import React, { Component } from "react";

class Exercise2 extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            fruit: "",
        };
    }
    changeOptionHandler = (e) => {
        this.setState(
            {
                fruit: e.target.value,
            },
            () => {
                console.log(`${this.state.name} selected ${this.state.fruit}`);
            }
        );
    };
    changeInputHandler = (e) => {
        this.setState({
            name: e.target.value,
        });
    };

    render() {
        return (
            <div>
                <input
                    id="name-input"
                    value={this.state.name}
                    onChange={this.changeInputHandler}
                />
                <select
                    id="select-input"
                    value={this.state.fruit}
                    onChange={this.changeOptionHandler}
                >
                    <option value="Apple">Apple</option>
                    <option value="Orange">Orange</option>
                    <option value="Mango">Mango</option>
                </select>
            </div>
        );
    }
}

export default Exercise2;
