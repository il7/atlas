import Radium from 'radium';
import { Component } from 'react';
import { colors } from '../variables';

@Radium 
export default class extends Component {
  render(props) {
    return <CardContainer>
      <CardHeader>{props.title}</CardHeader>
      {props.children}
    </CardContainer>
  }
}


// container
@Radium
export class Container extends Component {
  render(props) {
    return <div style={this.styles(props)}>{props.children}</div>
  }

  styles(props) {
    return {
      display: 'block',
      backgroundColor: colors.light,

      ':hover': {
        backgroundColor: colors.dark5,
      }
    }
  };
}


// header
@Radium
export class Header extends Component {
  render(props) {
    return <header style={this.styles(props)}>{props.children}</header>
  }

  styles(props) {
    return {
      backgroundColor: colors.dark5,

      ':hover': {
        backgroundColor: colors.dark10,
      } 
    }
  };
}