import React, { Component } from 'react';
import './Form.component.scss';
import Form from "SourceComponent/Form/Form.component";
import Field from "SourceComponent/Field/Field.container";
import { event } from 'react-ga';


export class Form1 extends PureComponent {
    state = {
        First_Name11: '',
        Phone_Number: '',
        Mail: '',
        Password: '',
    }

    First_Name(e) {
        e.preventdefault()
        this.setState({
            First_Name11: e.target.value
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            Storage: [],
            Storeddata: "",
            Storeddata1: "",
            Storeddata2: "",
            Storeddata3: ""
        };
    }

    inputChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    addTask = (event) => {
        event.preventDefault();
        let newTask = {
            task: this.state.Storeddata,
            task1: this.state.Storeddata1,
            task2: this.state.Storeddata2,
            task3: this.state.Storeddata3
        };
        this.setState(
            {
                Storage: [...this.state.Storage, newTask],
                Storeddata: "",
                Storeddata1: "",
                Storeddata2: "",
                Storeddata3: ""
            },
            () => {
                localStorage.setItem("Storage", JSON.stringify(this.state.Storage));
            }
        );
    };
    componentDidMount() {
        const Storage = localStorage.getItem("Storage");
        if (Storage) this.setState({ Storage: JSON.parse(Storage) });
    }

    render() {
        return (
            <div className="App">
                <DatForm
                    Storage={this.state.Storage}
                    value={this.state.Storeddata}
                    value1={this.state.Storeddata1}
                    value2={this.state.Storeddata2}
                    value3={this.state.Storeddata3}
                    inputChangeHandler={this.inputChangeHandler}
                    addTask={this.addTask}
                />
            </div>
        );
    }
}

const DatForm = (props) => {
    return (
        <Form className="add-form">
            <input
                className="add-input"
                name="Storeddata"
                value={props.value}
                type="text"
                onChange={props.inputChangeHandler}
                placeholder="Enter Your Name"
            />
            <br />
            <input
                className="add-input"
                name="Storeddata1"
                value={props.value1}
                type="Number"
                onChange={props.inputChangeHandler}
                placeholder="Enter Your Number"
            />
            <br />
            <input
                className="add-input"
                name="Storeddata2"
                value={props.value2}
                type="email"
                onChange={props.inputChangeHandler}
                placeholder="Enter Your Mail"
            />
            <br />
            <input
                className="add-input"
                name="Storeddata3"
                value={props.value3}
                type="password"
                onChange={props.inputChangeHandler}
                placeholder="Enter Your Password"
            />
            <br />
            <div block="MyAccountOverlay" elem="Buttons">
                <button id="add" block="Button" type="submit" onClick={props.addTask}   >{__('CONTINUE')}</button>
            </div>
        </Form>
    );

}

export default Form1

