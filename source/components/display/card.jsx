import Radium from 'radium';
import React from 'react';
import { sizes, colors } from '../variables';

@Radium 
export default class extends React.Component {
  render() {
    return <Container>
      <Header>{this.props.title}</Header>
      {this.props.children}
    </Container>
  }
}


// container
@Radium
export class Container extends React.Component {
  render() {
    return <div style={this.styles()}>{this.props.children}</div>
  }

  styles() {
    return {
      display: 'block',
      padding: sizes.space(),
      backgroundColor: colors.light,

      ':hover': {
        backgroundColor: colors.dark10,
      }
    }
  };
}


// header
@Radium
export class Header extends React.Component {
  render() {
    return <header style={this.styles()}>{this.props.children}</header>
  }

  styles() {
    return {
      backgroundColor: colors.blue,

      ':hover': {
        backgroundColor: colors.red,
      } 
    }
  };
}