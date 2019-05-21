import React from 'react';
import { Card, CardTitle } from 'reactstrap';

export default class ResultComponent extends React.Component {
  constructor(props) {
    super(props);
    var children = this.props.children;
  }

  render() {
    return (
      <div className={this.props.clase} id={this.props.sectionIndex}>
        <Card body>
            <CardTitle><strong>{this.props.title}</strong></CardTitle>
            {this.props.children}
        </Card>
      </div>
    );
  }
}