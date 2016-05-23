import Radium from 'radium';
import React from 'react';
import { sizes, colors } from '../variables';
import scale from 'scale-unit'

@Radium
export default class extends React.Component {
  render() {
    const { props, state } = this;

    return <div style={ styles.container(props) }>
      <a href="#" key="header" style={ styles.header(props) }>
        {props.title}
      </a>
      {props.children}
    </div>
  }
}

export const styles = {
  container: props => ({

  }),

  header: props => ({
    display: 'block',
    padding: sizes.space(),

    fontFamily: 'sans-serif',
    fontSize: sizes.text(),
    textDecoration: 'none',

    backgroundColor: colors.light,
    color: colors.dark,

    ':hover': {
      backgroundColor: colors.dark10
    },

    ':active': {
      backgroundColor: colors.red,
      color: colors.dark,
      textDecoration: 'underline'
    }
  })
}
