import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Form";
import Button from "./Button";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mail: ''
        }

        this.btnFunc = this.btnFunc.bind(this);
        // this.inputFunc = this.inputFunc.bind(this);
        this.nameFunc = this.nameFunc.bind(this);
        this.mailFunc = this.mailFunc.bind(this);
    }

    nameFunc(event) {
        this.setState({name: event.target.value});
    };
    mailFunc(event){
        this.setState({mail: event.target.value});
    };

    // inputFunc(event){
    // let id = event.target.id;
    // this.setState({[id]: event.target.value})
    // }
    btnFunc(){
        this.setState({name:'', mail:''});
    };


    render() {
        return (
            <div className="App">
                {/*input = {this.inputFunc}*/}
                <Form  name={this.nameFunc} mail={this.mailFunc}/>
                <Button btn={this.btnFunc}/>
            </div>
        );
    }
}

export default App;
