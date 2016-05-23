import Radium from 'radium';
import React from 'react';
import { sizes, colors } from '../variables';
import scale from 'scale-unit'

@Radium 
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      interval: 0
    };
  }

  tick() {
    this.setState({
      interval: this.state.interval + 0.01
    });
  }

  componentDidMount() {
    // this.interval = setInterval(this.tick.bind(this), 10);
  }

  render() {
    return <Container interval={this.state.interval}>
      <Header>{this.props.title} {this.state.interval}</Header>
      {this.props.children}
    </Container>
  }
}


// container
@Radium
export class Container extends React.Component {
  render() {
    return <div style={this.styles()}>
      {this.props.children}
    </div>
  }

  styles() {
    return {
      display: 'block',
      padding: scale(sizes.space, this.props.interval)(),
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
    return <a href="#" style={this.styles()}>{this.props.children}</a>
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