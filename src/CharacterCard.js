import React ,{ useState, useEffect, useRef}from 'react';
import './App.css';
import App from './App.js'

export default class CharacterCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.attempt != this.props.attempt){
        this.setState({active: false})
        }
       }
    activate = () => {

        if (this.state.active == false) {
            this.setState({ active: !this.state.active });
            this.props.activationHandler(this.props.value)
            console.log('...');
        }
    }
    render() {
        let activeClass = this.state.active ? 'activeCard' : '';
        let className = `card ${activeClass}`
        return (
            <div className={className} onClick={this.activate}>
                {this.props.value}                
            </div>
            
        );

    }
}

