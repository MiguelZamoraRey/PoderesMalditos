import React from 'react';
import { Card, Button, CardTitle} from 'reactstrap';

export default class QuestionOptionsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.functionPassed = this.functionPassed.bind(this);
    var children = this.props.children;
  }

  functionPassed() {
    this.props.sendFunction(this.props.sectionIndex); 
  }

  render() {
    return (
      <div className={this.props.clase} id={this.props.sectionIndex}>
        <Card body>
            <CardTitle>{this.props.title}</CardTitle>
            {this.props.children}
            <Button id={this.props.title} onClick={this.functionPassed}>
              Siguiente pregunta
            </Button>
        </Card>
      </div>
    );
  }
}