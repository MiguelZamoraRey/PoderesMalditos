import React from 'react';
import logo from './logo.svg';
import { Button } from 'reactstrap';
import './IntroComponent.css'

export default class IntroComponent extends React.Component {
  constructor(props) {
    super(props);
    this.functionPassed = this.functionPassed.bind(this);
  }

  functionPassed() {
    this.props.sendFunction(this.props.sectionIndex);
  }

  render() {
    return (
      <div className={this.props.clase} id={this.props.sectionIndex}>
        <img src={logo} className="App-logo" alt="logo"/>
        <p>Bienvenido al Proyecto ODIBEX</p>
        <Button onClick={this.functionPassed} outline color="secondary">
          Comenzar el proceso de Ingreso
        </Button>
      </div>
    );
  }
}